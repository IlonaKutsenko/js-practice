class UIComponent {
    constructor(protected locator: string){
    }
    click() {
    console.log (`Clicked on component with locator: '${this.locator}'.`);
    }
}

class Button extends UIComponent {
}

class Input extends UIComponent {
    private currentValue: string = "";
    
    public setValue(text: string): this {
    this.currentValue = text;
    return this;
    }

    public getValue() {
    return this.currentValue;
    }
}

const logButton = new Button("login");
logButton.click(); 

const nameInput = new Input("name");
nameInput.setValue("Ilona").click();

console.log("Input:", nameInput.getValue());
