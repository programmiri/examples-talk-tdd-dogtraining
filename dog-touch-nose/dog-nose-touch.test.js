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

	it("can look at our fingers", () => {
		const ourDog = new Dog("Ruby");
		expect(ourDog.looksAtFingers).toBeTruthy();
	});

	it("can be rewarded with a Ball", () => {
		const ourDog = new Dog("Ruby");
		expect(ourDog.looksAtFingers("Ball")).toEqual("🐶🎉 *rewarded*");
	});

	it("can be rewarded with a Frolic", () => {
		const ourDog = new Dog("Ruby");
		expect(ourDog.looksAtFingers("Frolic")).toEqual("🐶🎉 *rewarded*");
	});

	it("can be rewarded with a Playtime", () => {
		const ourDog = new Dog("Ruby");
		expect(ourDog.looksAtFingers("Playtime")).toEqual("🐶🎉 *rewarded*");
	});
});
