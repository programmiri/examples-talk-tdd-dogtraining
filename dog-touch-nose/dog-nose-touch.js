class Dog {
	constructor(name) {
		this.name = name;
	}

	#rewards = ["Frolic", "Ball", "Playtime"];
	#punishments = ["Petting on the Head", "Hugging", "Loud cheering"];
	#fingerLookingRewarded = 0;

	touch() {
		if (this.#fingerLookingRewarded >= 5) {
			return "🐶💡 *touch*";
		}
		return "❓❓🐶❓❓";
	}

	looksAtFingers(treat) {
		if (this.#rewards.includes(treat)) {
			this.#fingerLookingRewarded++;
			return "🐶🎉 *rewarded*";
		}
		if (this.#punishments.includes(treat)) {
			return "NO! 🐶🛑";
		}
		return "Whatever. 🐶";
	}
}

export { Dog };
