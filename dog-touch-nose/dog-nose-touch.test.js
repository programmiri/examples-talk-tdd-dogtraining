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

	describe("can be rewarded with", () => {
		const ourDog = new Dog("Ruby");
		["Frolic", "Ball", "Playtime"].forEach(treat => {
			it(`${treat}`, () => {
				expect(ourDog.looksAtFingers(treat)).toEqual("🐶🎉 *rewarded*");
			});
		});
	});

	describe("is punished with", () => {
		const ourDog = new Dog("Ruby");
		["Petting on the Head", "Hugging", "Loud cheering"].forEach(treat => {
			it(`${treat}`, () => {
				expect(ourDog.looksAtFingers(treat)).toEqual("NO! 🐶🛑");
			});
		});
	});

	describe("does not react to", () => {
		const ourDog = new Dog("Ruby");
		["Dry Food", "Praise", "Sausage", "Smile"].forEach(treat => {
			it(`${treat}`, () => {
				expect(ourDog.looksAtFingers(treat)).toEqual("Whatever. 🐶");
			});
		});
	});

	describe('can learn "Touch" based on rewards and repetition', () => {
		it(`shows right behavior after 5 trainings with rewards`, () => {
			const ourDog = new Dog("Ruby");
			ourDog.looksAtFingers("Ball");
			ourDog.looksAtFingers("Ball");
			ourDog.looksAtFingers("Ball");
			ourDog.looksAtFingers("Ball");
			ourDog.looksAtFingers("Ball");
			expect(ourDog.touch()).toEqual("🐶💡 *touch*");
		});
	});
});
