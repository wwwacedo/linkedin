console.log('Hello, World!')

class Cat {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get color() {
		return this._color;
	}

	set color(value) {
		this._color = value;
	}

	meow() {
		console.log(`${this.name} says: Meoooow!`);
	}

}

const cat = new Cat('Pepita', 'black');
cat.meow();