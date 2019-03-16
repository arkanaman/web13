// function mybind(testFunction, context) {
//     return function () {
//         return testFunction.apply(context, arguments);
//     };
// }

// function test(a, b) {
//     alert(this);
//     alert(a + b);
// }

// // test.apply("THIS", 1, 2);

// var g = mybind(test, "THIS");
// g(1, 2);


function Animal() {
}

Animal.prototype.eat = function () {
    console.log('Кушает');
}

Animal.prototype.sleep = function () {
    console.log('Спит');
}



function WildAnimal() {

}

WildAnimal.prototype = Object.create(Animal.prototype);
WildAnimal.prototype.constructor = WildAnimal;

WildAnimal.prototype.steelChicken = function () {
    console.log('Ворует куриц');
}

function Pet() {

}

Pet.prototype = Object.create(Animal.prototype);
Pet.prototype.constructor = Pet;

Pet.prototype.peeInTray = function () {
    console.log('Ходит в лоток');
}



function Wolf() {

}

Wolf.prototype = Object.create(WildAnimal.prototype);
Wolf.prototype.constructor = Wolf;

Wolf.prototype.hawlAtTheMoon = function () {
    console.log('Воет на луну');
}

function Fox() {
}

Fox.prototype = Object.create(WildAnimal.prototype);
Fox.prototype.constructor = Fox;

Fox.prototype.eatColobok = function () {
    console.log('Ест колобка');
}



function Cat(name) {
    this.name = name;
}

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.sleepOnKeyboard = function (how) {
    console.log(this.name + ' спит на клавиатуре ' + how);
}

function YorkshireTerrier() {

}

YorkshireTerrier.prototype = Object.create(Pet.prototype);
YorkshireTerrier.prototype.constructor = YorkshireTerrier;

YorkshireTerrier.prototype.bark = function () {
    console.log('Лает');
}

var Cat = new Cat('Барсик');
Cat.sleep();
Cat.sleepOnKeyboard('на спине');