import LoginPage from './login-page.js';
const myLocators = {
    usernameInput: 'username field',
    passwordInput: 'password field',
    submitButton: 'Submit'
};
const loginPage = new LoginPage(myLocators);
loginPage.performLogin('Charlie', '12345');
