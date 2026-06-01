import LoginPage from './login-page.js';
import type {LoginElements} from './page-types.js';

const myLocators: LoginElements = {
usernameInput: 'username field',
passwordInput: 'password field',
submitButton: 'Submit'
}

const loginPage = new LoginPage(myLocators);
loginPage.performLogin('Charlie', '12345');
