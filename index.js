class HKeyGenerator {
	constructor(hkey = [1]) {
		this.hkey = hkey.concat();
		this.hkey.push(0);
	}

	spawn() {
		this.hkey[this.hkey.length - 1]++;
		return new HKeyGenerator(this.hkey);
	}

	get key() {
		return this.hkey.slice(0, this.hkey.length - 1);
	}
}

module.exports = HKeyGenerator;