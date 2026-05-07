class Person {
    constructor(name, height, mass, gender) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.gender = gender;
    }

    getDisplayCard() {
        return {
            title: this.name,
            stats: {
                height: this.height,
                mass: this.mass
            }
        };
    }
}