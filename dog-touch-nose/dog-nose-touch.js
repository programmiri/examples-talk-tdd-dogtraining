class Dog {
	constructor(name) {
		this.name = name;
	}

	touch() {
		return "❓❓🐶❓❓";
	}

	looksAtFingers(treat) {
		if (treat === "Ball" || treat === "Frolic" || treat === "Playtime") {
			return "🐶🎉 *rewarded*";
		}
	}
}

export { Dog };
