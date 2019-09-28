class Dog {
	constructor(name) {
		this.name = name;
	}

	touch() {
		return "❓❓🐶❓❓";
	}

	looksAtFingers(treat) {
		if (treat === "Ball") {
			return "🐶🎉 *rewarded*";
		}
	}
}

export { Dog };
