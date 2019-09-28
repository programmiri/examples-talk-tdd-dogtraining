import { Dog } from "./dog-nose-touch.js";

describe("Our lovely Dog", () => {
	it("is a dog and AWESOME", () => {
		const ourDog = new Dog();
		expect(ourDog).toBeTruthy();
	});

	it('is named "Ruby"', () => {
		const ourDog = new Dog("Ruby");
		expect(ourDog.name).toEqual("Ruby");
	});

	it('is confused and does nothing I say "Touch" initially', () => {
		const ourDog = new Dog("Ruby");
		expect(ourDog.touch()).toEqual("❓❓🐶❓❓");
	});
});
