class Cat {
    color;
    fav_toy;
    fav_place;

    getColor(){
        return this.color;
    }
    getFav_toy(){
        return this.fav_toy;
    }
    getFav_place(){
        return this.fav_place;
    }
}

const catobj1 = new Cat();
const catobj2 = new Cat();
catobj1.color="black";
catobj1.fav_toy="ball";
catobj1.fav_place="bed";
catobj2["color"]="white";
catobj2["fav_toy"]="catnip";
catobj2["fav_place"]="cattree";
console.log(catobj1);
console.log(catobj2);
console.log("------------------------------");
console.log(catobj1.getColor());
console.log(catobj1.getFav_place());
console.log(catobj1.getFav_toy());
console.log("------------------------------");
console.log(catobj2.getColor());
console.log(catobj2.getFav_place());
console.log(catobj2.getFav_toy());

class Pirate {
  constructor(name, type, fav_food) {
    this.name = name;
    this.type = type;
    this.fav_food = fav_food;
  }

  printName() {
    console.log(this.name);
  }

  printType() {
    console.log(this.type);
  }

  printFavfood() {
    console.log(this.fav_food);
  }
}

const jollyRoger = [
  new Pirate("Blackbeard", "Privateer", "Meat"),
  new Pirate("William Kid", "Buccaneers", "Vegetables"),
  new Pirate("Calico Jack", "Corsairs", "Meat"),
];

const blackPearl = [
  new Pirate("Ching Shih", "Privateer", "Beef"),
  new Pirate("Henry Morgan", "Buccaneers", "Dried beans"),
  new Pirate("Anne Bonny", "Corsairs", "Biscuits"),
];

jollyRoger.forEach((obj) => {
  obj.printName();
  obj.printFavfood();
  obj.printType();
});

blackPearl.forEach((obj) => {
    obj.printName();
    obj.printFavfood();
    obj.printType();
  });

