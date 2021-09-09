
//data part
let zombies = [];
let persons = [];
let zid = 1;
let pid = 0;
let app = document.getElementById("app");

class Zombie {
  constructor(id) {
    this.width = window.innerWidth-120;
    this.height = window.innerHeight-120;
    this.id = id;
  }
  make() {
    var zombie = document.createElement("div");
    zombie.innerHTML = this.id;
   
      zombie.style.background = "url('./zombie.png')";
      zombie.style.backgroundSize = 'cover';
    
    zombie.setAttribute('id',  `zombie-${this.id}`);
    zombie.classList.add('zombie');
    app.appendChild(zombie);
  }
  move() {
    let  s = this.id;
    let width = this.width;
    let height = this.height;
    let zombie = document.getElementById(`zombie-${s}`);
    let x = 0 ;
    let y = 0;
    let interval = setInterval(function() {
        zombie.style.top = `${y+Math.random()*height}px`;
        zombie.style.left = `${x+Math.random()*width}px`;
    }, 160)
  }
}

class Person {
  constructor(id) {
    this.width = window.innerWidth-120;
    this.height = window.innerHeight-120;
    this.id = id;
  }
  make() {
    var zombie = document.createElement("div");
    zombie.innerHTML = this.id;
   
      zombie.style.background = "url('./businessman.png')";
      zombie.style.backgroundSize = 'cover';
    
    zombie.setAttribute('id',  `person-${this.id}`);
    zombie.classList.add('zombie');
    app.appendChild(zombie);
  }
  delete() {
    let zombie = document.getElementById(`person-${this.id}`);
    app.removeChild(zombie);
  }
  move() {
    let  s = this.id;
    let width = this.width;
    let height = this.height;
    let zombie = document.getElementById(`person-${s}`);
    let x = 0 ;
    let y = 0;
    let interval = setInterval(function() {
        zombie.style.top = `${y+Math.random()*height}px`;
        zombie.style.left = `${x+Math.random()*width}px`;
    }, 160)
  }
}

function makeZombie() {
  if(zombies.length < persons.length-1) {
    zombies.push(new Zombie(zid));
    zombies[zombies.length -1].make();
    zombies[zombies.length - 1].move();
    zid++;
    let btn = document.getElementById('btn');
    btn.style.display='none';
    startDestruction();
  }else {
    alert('Already infected whole city, some of them are immunes');
  }

}

function makePersons(size) {
  for(let i  =0  ; i<size ; ++i) {
     persons.push(new Person(i));
     persons[i].make();
     persons[i].move();
  }
}

let sizeOfPersons = prompt("Enter population of normal people");


makePersons(sizeOfPersons);

function startDestruction() {
  let interval = setInterval(function() {
   //delete the persons
   if(zombies.length <= persons.length) {
    persons[pid].delete();
   }
 
   
   zombies.push(new Zombie(zid));
   zombies[zombies.length -1].make();
   zombies[zombies.length - 1].move();
   zid++;

   console.log("Persons length "+persons.length);
   console.log("Zombies length "+zombies.length);
   pid++;

   if(pid >= persons.length) {
    clearInterval(interval);
   }
  }, 150)
}
let pos = 0;
setInterval(function() {
   let blood = document.createElement('img');
   blood.setAttribute('src', './bld.png');
   blood.classList.add('img');
   blood.style.position = 'absolute';
   blood.style.left = `${Math.random()*window.innerWidth}px`;
   blood.style.top += pos+'px';
   blood.style.animationDuration = Math.random() * 3 + 2 + 's'; 
   app.appendChild(blood);
   pos++;
   setTimeout(function() {
     blood.remove();
   }, 2000);
}, 70)