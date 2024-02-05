class Cat {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	meow() {
		console.log(`${this._name} says: Meoooow!`);
	}

	get name() {
		return this._name;
	}

	get age() {
		return this._age;
	}

	set age(age) {
		this._age = age;
	}
}

// creating a new instance of Cat
const cat = new Cat('Pepita', 3);

// calling the meow method
cat.meow();

// accessing the name and age properties
console.log(cat.name);
console.log(cat.age);

// changing the age property to 10
cat.age = 10;

// accessing the age property again
console.log(cat.age);

// if I try to change the name property, nothing happens because the setter is not defined
cat.name = 'Monstra';
console.log(cat.name);