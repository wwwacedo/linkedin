public class Cat {
	private String name;
	private int age;

	public Cat(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public String getName() {
		return this.name;
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void meow() {
		System.out.println(this.name + " says: Meow!");
	}

	public static void main(String[] args) {
		Cat cat = new Cat("Pepita", 3);
		cat.meow();
		System.out.println(cat.getName());
		System.out.println(cat.getAge());
		cat.setAge(10);
		System.out.println(cat.getAge());
	}
}