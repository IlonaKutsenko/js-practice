import type {LoginElements} from './page-types.js';
export default class LoginPage {
    private readonly elements: LoginElements;
    constructor (locators:LoginElements) {
        this.elements = locators;
    }
        
    public performLogin(username: string, password: string): void {
        console.log(`Put username "${username}" in ${this.elements.usernameInput}`);
        console.log(`Put password in ${this.elements.passwordInput}`);
        console.log(`Click button ${this.elements.submitButton}`);
        console.log("Done!");
        }
    }
