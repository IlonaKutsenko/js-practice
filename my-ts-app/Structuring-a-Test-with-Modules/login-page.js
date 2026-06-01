export default class LoginPage {
    elements;
    constructor(locators) {
        this.elements = locators;
    }
    performLogin(username, password) {
        console.log(`Put username "${username}" in ${this.elements.usernameInput}`);
        console.log(`Put password in ${this.elements.passwordInput}`);
        console.log(`Click button ${this.elements.submitButton}`);
        console.log("Done!");
    }
}
