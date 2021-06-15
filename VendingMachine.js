class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.juice1 = { name: "Apple Juice", price: 350, count: 5 };
    this.coffee = { name: "Tully's", price: 250, count: 7 };
    this.tea = { name: "Lipton", price: 250, count: 3 };
    this.biscuits = { name: "Miss Field's", price: 350, count: 10 };
    this.cola = { name: "Coke", price: 150, count: 4 };
    this.pepsi = { name: "Pepsi", price: 140, count: 5 };
    this.sprite = { name: "Sprite", price: 150, count: 7 };
    this.sevenup = { name: "Sevenup", price: 150, count: 8 };
    this.energyDrink = { name: "Monster", price: 150, count: 2 };
    this.energyDrink2 = { name: "Red Bull", price: 350, count: 1 };
    this.water = { name: "Evian", price: 200, count: 0 };
    this.beer = { name: "Asahi", price: 450, count: 3 };
    this.beer2 = { name: "Sapporo", price: 480, count: 7 };
    this.sparklingWater = { name: "Badoit", price: 500, count: 15 };
    this.iceTea = { name: "Nice Ice", price: 500, count: 3 };
    this.juice2 = { name: "Orange Juice", price: 250, count: 7 };

    this.inventory = [
      [this.juice1, this.coffee, this.tea, this.biscuits],
      [this.cola, this.pepsi, this.sprite, this.sevenup],
      [this.energyDrink, this.energyDrink2, this.water, this.beer],
      [this.beer2, this.sparklingWater, this.iceTea, this.juice2],
    ];
    this.tempItem;
  }
  insertCoin(coin) {
    this.balance = this.balance + coin;
    // determine what coin it is, then add it to till
    this.till[coin]++;
  }
  changeReturn() {
    let oldBalance = this.balance;
    this.balance = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    return oldBalance;
  }
  // get balance() {
  //   return this.balance;
  // }
  pressButton(a, b) {
    if (a === "A") {
      a = 0;
    } else if (a === "B") {
      a = 1;
    } else if (a === "C") {
      a = 2;
    } else if (a === "D") {
      a = 3;
    }
    // print letter to console
    console.log("Letter: ", a);
    // log row
    console.log("Row: ", this.inventory[a]);
    // log column
    console.log("Column: ", this.inventory[a][b - 1]);

    let chosenItem = this.inventory[a][b - 1];
    this.tempItem = chosenItem;
    // if not enough of item break
    if (chosenItem.count === 0) {
      console.log("Error not enough of item");
      return chosenItem.count;
    }

    // Check to see if sufficient balance
    if (this.balance >= chosenItem.price) {
      // log chosen item
      console.log("Here is your " + chosenItem.name);
      // Remove 1 from item inventory count
      chosenItem.count -= 1;
      // Subtract item price from balance
      this.balance -= chosenItem.price;
      console.log("Inventory update: ", chosenItem.count);
      return this.inventory[a][b - 1];
    } else {
      console.log("Insufficient balance");
    }
  }
}

module.exports = VendingMachine;
