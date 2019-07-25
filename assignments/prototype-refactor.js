/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(details){
        this.createdAt = details.createdAt,
        this.name = details.name,
        this.dimensions = details.dimensions
    }

    destroy() {
        return `${this.name} was removed from the game.`
    }
}

class CharacterStats extends GameObject {
    constructor(details) {
        super(details),
        this.healthPoints = details.healthPoints
    }

    takeDamage() {
        return `${this.name} took damage`;
    }
}  
  
class Humanoid extends CharacterStats {
    constructor(details) {
        super(details),
        this.team = details.team,
        this.weapons = details.weapons,
        this.language = details.language
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}  
  
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    });

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
    });

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
    });
  
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  

class Villian extends Humanoid {
    constructor(details) {
        super(details)
    }

    attack(enemy, weapon) {
        let damage = 0;
        console.log("Weapon is", weapon)
        if (weapon == "Rocket") {
            damage = 20;
        } else if (weapon == "Laser") {
            damage = 15;
        } else if (weapon == "Sonic Beam") {
            damage = 30;
        } else {
            damage = 0; //someone messed up, technically don't need this line
        }
        enemy.healthPoints -= damage;
        
        if (enemy.healthPoints <= 0) {
            return `${enemy.name} has fallen due to the ${weapon}.`;
        } else{
            return `${this.name} [${this.healthPoints}] uses his ${weapon} to deal ${damage} to ${enemy.name} [${enemy.healthPoints}]`;
        }
        }
}
  
function randomItemFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
  } 
  
class Hero extends Humanoid {
    constructor(details) {
        super(details)
    }

    attack(enemy, weapon) {
        //writing if statment a different way
        let damage = 0;
            
        (weapon == "Fist") ? damage = 15 : 
        (weapon == "Foot") ? damage = 20 :
        (weapon == "Double Fists") ? damage = 30 : damage = 0;

        damage *= (this.dimensions.length+this.dimensions.width+this.dimensions.height);
        enemy.healthPoints -= damage;

        return enemy.healthPoints <= 0 ? 
        `${enemy.name} has fallen due to the ${weapon}.`: 
        `${this.name} [${this.healthPoints}] smashes the ground with his ${weapon} for ${damage} and injures ${enemy.name} [${enemy.healthPoints}]`;
    }
}  

   
const badGuy = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: Math.floor(Math.random() * 10+1),
        width: Math.floor(Math.random() * 10+1),
        height: Math.floor(Math.random() * 10+1),
    },
    healthPoints: Math.floor(Math.random() * 10+1000),
    name: 'Johnny',
    team: 'The Unknown',
    weapons: [
        'Laser',
        'Rocket',
        'Sonic Beam'
    ],
    language: 'French',
    });
  
const goodGuy = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: Math.floor(Math.random() * 10+1),
        width: Math.floor(Math.random() * 10+1),
        height: Math.floor(Math.random() * 10+1),
    },
    healthPoints: Math.floor(Math.random() * 10+1000),
    name: 'Gerald',
    team: 'The Known',
    weapons: [
        'Fist',
        'Foot',
        'Double Fists'
    ],
    language: 'English',
    });
  
  //let's see if we can do a basic battle first
  
  //also need a dead feature?
  
  // console.log(goodGuy.attack(badGuy, randomItemFromArray(goodGuy.weapons)));
  // console.log(badGuy.attack(goodGuy, randomItemFromArray(goodGuy.weapons)));
  // console.log(goodGuy.attack(badGuy, randomItemFromArray(goodGuy.weapons)));
  // console.log(badGuy.attack(goodGuy, randomItemFromArray(goodGuy.weapons)));
  
  //let's make this random now
  
  function battle(person1, person2){
    console.log(`The battle starts with ${person1.name} [${person1.healthPoints}] and ${person2.name} [${person2.healthPoints}]`);
    for (let i = 0; !(person1.healthPoints <= 0 || person2.healthPoints <= 0); i++){
      //50-50 if you get to attack
      let contestants = [person1, person2];
      const attacker = randomItemFromArray(contestants);
      contestants.slice(contestants.indexOf(attacker),1);
      const defender = contestants[0];
      console.log(attacker.attack(defender, randomItemFromArray(attacker.weapons)));
    }
  }
  
  battle(goodGuy, badGuy);