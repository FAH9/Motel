class MotelCustomer {
    constructor(name, birthDate, gender, roomPreferences, paymentMethod, mailingAddress, phoneNumber, checkInDate, checkOutDate) {
        this.name = name;
        this.birthDate = new Date(birthDate);
        this.gender = gender;
        this.roomPreferences = roomPreferences;
        this.paymentMethod = paymentMethod;
        this.mailingAddress = mailingAddress;
        this.phoneNumber = phoneNumber;
        this.checkInDate = new Date(checkInDate);
        this.checkOutDate = new Date(checkOutDate);
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const m = today.getMonth() - this.birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }

    getDurationOfStay() {
        const duration = Math.round((this.checkOutDate - this.checkInDate) / (1000 * 60 * 60 * 24));
        return duration;
    }

    getDescription() {
        return `
            <p>Customer Name: ${this.name}</p>
            <p>Age: ${this.getAge()} years</p>
            <p>Gender: ${this.gender}</p>
            <p>Room Preferences: ${this.roomPreferences.join(', ')}</p>
            <p>Payment Method: ${this.paymentMethod}</p>
            <p>Mailing Address: ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.state} ${this.mailingAddress.zip}</p>
            <p>Phone Number: ${this.phoneNumber}</p>
            <p>Check-in Date: ${this.checkInDate.toDateString()}</p>
            <p>Check-out Date: ${this.checkOutDate.toDateString()}</p>
            <p>Duration of Stay: ${this.getDurationOfStay()} days</p>
        `;
    }
}

// Example Usage
const mailingAddress = {
    street: '57 Allandale Road',
    city: 'St. Johns',
    state: 'NL',
    zip: 'A1B 3S7'
};

const customer = new MotelCustomer(
    'Frank Holdbrook',
    '1996-07-27',
    'Male',
    ['Non-smoking', 'King Bed', 'Pool View'],
    'Credit Card',
    mailingAddress,
    '555-1234',
    '2024-07-01',
    '2024-07-10'
);

console.log(customer.getDescription());