class Dog {
	constructor(name) {
		this.name = name;
	}

	touch() {
		return "❓❓🐶❓❓";
	}

	looksAtFingers(treat) {
		if (treat === "Ball" || treat === "Frolic") {
			return "🐶🎉 *rewarded*";
		}
	}
}

export { Dog };
