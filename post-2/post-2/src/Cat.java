public class Cat {
	private String name;
	private String color;

	public Cat(String name, String color) {
		this.name = name;
		this.color = color;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getColor() {
		return this.color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public void meow() {
		System.out.println(this.name + " says: Meooooow!");
	}

	public static void main(String[] args) {
		Cat cat = new Cat("Pepita", "black");
		cat.meow();
	}	

}

