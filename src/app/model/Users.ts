export class Users {
    userId!: String
    firstName!: String
    lastName!: String
    gender!: String
    dob!: String
    emailId!: String
    password!: String

    constructor(firstName: string, lastName: string, emailId: string, userId: string, dob: string, password: string, gender: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.userId = userId;
        this.dob = dob,
        this.password = password;
        this.gender = gender;

    }
}
