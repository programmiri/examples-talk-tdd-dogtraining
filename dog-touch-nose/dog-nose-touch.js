class Dog {
	constructor(name) {
		this.name = name;
	}

	#rewards = ["Frolic", "Ball", "Playtime"];
	#punishments = ["Petting on the Head", "Hugging", "Loud cheering"];

	touch() {
		return "❓❓🐶❓❓";
	}

	looksAtFingers(treat) {
		if (this.#rewards.includes(treat)) {
			return "🐶🎉 *rewarded*";
		}
		if (this.#punishments.includes(treat)) {
			return "NO! 🐶🛑";
		}
		return "Whatever. 🐶";
	}
}

export { Dog };
