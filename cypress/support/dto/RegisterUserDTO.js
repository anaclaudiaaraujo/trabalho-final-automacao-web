class RegisterUserDTO {
    constructor(userData, addressData) {
        // User basic information
        this.name = userData.name;
        this.email = userData.email;
        this.password = userData.password || 'defaultPassword123';
        
        // User personal details
        this.title = userData.title;
        this.firstName = userData.firstName || userData.name?.split(' ')[0];
        this.lastName = userData.lastName || userData.name?.split(' ')[1];
        this.company = userData.company;
        this.mobileNumber = userData.phone;
        
        // Birth date
        this.birthdayDay = userData.birthdayDay;
        this.birthdayMonth = userData.birthdayMonth;
        this.birthdayYear = userData.birthdayYear;
        
        // Address information
        this.address = addressData.address;
        this.country = addressData.country;
        this.state = addressData.state;
        this.city = addressData.city;
        this.zipcode = addressData.zip;
    }
    
    // Method to get user signup data (name and email)
   /*  getSignupData() {
        return {
            name: this.name,
            email: this.email
        };
    } */
    
    // Method to get account information
    /* getAccountInfo() {
        return {
            title: this.title,
            password: this.password,
            birthdayDay: this.birthdayDay,
            birthdayMonth: this.birthdayMonth,
            birthdayYear: this.birthdayYear,
            newsletter: this.newsletter,
            specialOffers: this.specialOffers
        };
    } */
    
    // Method to get address information
   /*  getAddressInfo() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            company: this.company,
            address: this.address,
            address2: this.address2,
            country: this.country,
            state: this.state,
            city: this.city,
            zipcode: this.zipcode,
            mobileNumber: this.mobileNumber
        };
    } */
    
    // Method to get all data
    /* getAllData() {
        return {
            ...this.getSignupData(),
            ...this.getAccountInfo(),
            ...this.getAddressInfo()
        };
    } */
}

export default RegisterUserDTO;