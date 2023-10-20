class Cat {
  color;
  fav_toy;
  fav_place;
  breed = "Persian";

  getColor() {
    return this.color;
  }
  getFav_toy() {
    return this.fav_toy;
  }
  getFav_place() {
    return this.fav_place;
  }
}

const catobj1 = new Cat();
const catobj2 = new Cat();
catobj1.color = "black";
catobj1.fav_toy = "ball";
catobj1.fav_place = "bed";
catobj2["color"] = "white";
catobj2["fav_toy"] = "catnip";
catobj2["fav_place"] = "cattree";
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

console.log("------------------------------");

class Pirate {
  constructor(name, type, fav_food) {
    this.name = name;
    this.type = type;
    this.fav_food = fav_food;
  }

  printName() {
    console.log(`Pirate Name is ${this.name}`);
  }

  printType() {
    console.log(`Pirate Type of ${this.name} is ${this.type}`);
  }

  printFavfood() {
    console.log(`Favourite food of ${this.name} is ${this.fav_food}`);
  }
}

const jollyRoger = [
  new Pirate("Blackbeard", "Privateer", "Meat"),
  new Pirate("William Kid", "Buccaneers", "Vegetables"),
  new Pirate("Calico Jack", "Corsairs", "Meat"),
];

const blackPearl = [
  new Pirate("Ching Shih", "Buccaneers", "Beef"),
  new Pirate("Henry Morgan", "Corsairs", "Dried beans"),
  new Pirate("Anne Bonny", "Privateer", "Biscuits"),
];

console.log("JOLLY ROGER ARRAY");
jollyRoger.forEach((pirate) => {
  pirate.printName();
  pirate.printFavfood();
  console.log(`Type of ${pirate.name} is ${pirate.type}`);
});

console.log("BLACK PEARL ARRAY");
blackPearl.forEach((pirate) => {
  pirate.printName();
  pirate.printFavfood();
  console.log(`Type of ${pirate.name} is ${pirate.type}`);
});
