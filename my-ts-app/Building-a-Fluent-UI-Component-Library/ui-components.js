"use strict";
class UIComponent {
    locator;
    constructor(locator) {
        this.locator = locator;
    }
    click() {
        console.log(`Clicked on component with locator: '${this.locator}'.`);
    }
}
class Button extends UIComponent {
}
class Input extends UIComponent {
    currentValue = "";
    setValue(text) {
        this.currentValue = text;
        return this;
    }
    getValue() {
        return this.currentValue;
    }
}
const logButton = new Button("login");
logButton.click();
const nameInput = new Input("name");
nameInput.setValue("Ilona").click();
console.log("Input:", nameInput.getValue());
