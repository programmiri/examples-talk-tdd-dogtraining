class Dog {
	constructor(name) {
		this.name = name;
	}

	#rewards = ["Frolic", "Ball", "Playtime"];

	touch() {
		return "❓❓🐶❓❓";
	}

	looksAtFingers(treat) {
		if (this.#rewards.includes(treat)) {
			return "🐶🎉 *rewarded*";
		}
	}
}

export { Dog };
