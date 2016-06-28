//------App Title------//
console.log("Meal Calculator!");

//------Constuctor Functions------//
var Diner = function(name, meal){
	this.name = name,
	this.meal = meal
}

var Dish = function(food, price){
	this.food = food,
	this.price = price
}
var Bill = function(beforeTax, tax, total){
	this.beforeTax = Math.round(beforeTax * 100) / 100,
	this.tax = Math.round((.08 * this.beforeTax) * 100) / 100,
	this.total = Math.round((this.beforeTax +  this.tax) * 100) / 100
}

//------Dishes------//
var waffles = new Dish("Waffles", 4.50);
var eggs = new Dish("Scrambled Eggs", 3.75);
var toast = new Dish("French Toast", 5.37);
var coffee = new Dish("Coffee", 1.20);
var tea = new Dish("Tea", 0.50);


//------Diners------//
var ryanMeal = {
	dishes: [waffles.food, eggs.food, coffee.food],
	mealPrice: eggs.price + waffles.price + coffee.price
};
var ryanBill = new Bill(ryanMeal.mealPrice, bill.tax, bill.total);
var ryan = new Diner("Ryan", ryanMeal.dishes);

var lisaMeal = {
	dishes: [toast.food, eggs.food, tea.food],
	mealPrice: toast.price + eggs.price + tea.price
};
var lisaBill = new Bill(lisaMeal.mealPrice, bill.tax, bill.total);
var lisa = new Diner("Lisa", lisaMeal.dishes);

//------Personal Bill for Diners------//
function personalBill(name, mealPrice){
	console.log(name + "'s Bill", mealPrice)
};

//------Total Bill of Diners------//
function totalBill(x, y){
	var bill = Math.round((x + y) * 100) / 100;
	var tip = Math.round((bill * .20) * 100) / 100;
	var tipDiners = Math.round((tip/2) * 100) / 100;
	var total = Math.round((bill + tip) * 100) / 100;
	console.log("Total Tip: $"+ tip);
	console.log("Tip Per Diner: $" + tipDiners);
	console.log("Total Bill (Sales Tax & Tip Included): $" + total);
}

//------Print Out Onto Console------//
console.log(ryan);
console.log(lisa);
personalBill(ryan.name, ryanBill);
personalBill(lisa.name, lisaBill);
totalBill(lisaBill.total, ryanBill.total);
