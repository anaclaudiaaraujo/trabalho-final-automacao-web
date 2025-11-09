const Chance = require('chance');
const chance = new Chance();

class UserFactory {
	User() {
		const gender = this.randomGender();
		const title = this.selectTitle(gender);

		return {
			title: title,
			name: chance.name({gender: gender}),
			email: chance.email(),
			birthdayDay: chance.birthday({ string: true, american: false }).split('/')[0],
			birthdayMonth: chance.birthday({ string: true, american: false }).split('/')[1],
			birthdayYear: chance.birthday({ string: true, american: false }).split('/')[2],
			company: chance.company(),
			phone: chance.phone()
		}
	}

	randomGender(){
		const genders = ['Male', 'Female'];
		return genders[Math.floor(Math.random() * genders.length)];
	}

	selectTitle(gender){
		return gender === 'Male' ? 'Mr' : 'Mrs';
	}
}

export default UserFactory;