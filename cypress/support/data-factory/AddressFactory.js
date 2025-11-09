const Chance = require('chance');
const chance = new Chance();

class AddressFactory {
	Address() {
		return {
			address: chance.address(),
			country: this.randomCountry(),
			state: chance.state({ full: true }),
			city: chance.city(),
			zip: chance.zip()
		}
	}

	randomCountry() {
		const availableCountries = require('../../fixtures/Countries.json');
		const index = Math.floor(Math.random() * availableCountries.Countries.length);
		return availableCountries.Countries[index];
	}
}

export default AddressFactory;