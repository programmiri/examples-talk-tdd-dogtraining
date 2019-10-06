class Dog {
	constructor(name) {
		this.name = name;
	}

	#rewards = ["Frolic", "Ball", "Playtime"];
	#punishments = ["Petting on the Head", "Hugging", "Loud cheering"];

	#fingerLookingRewardThreshold = 5;
	#fingerLookingRewarded = 0;

	touch() {
		if (this.#fingerLookingRewarded >= this.#fingerLookingRewardThreshold) {
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
			this.#fingerLookingRewarded -= 2;
			return "NO! 🐶🛑";
		}
		return "Whatever. 🐶";
	}
}

export { Dog };

