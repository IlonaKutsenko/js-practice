"use strict";
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    findAll() {
        return this.items;
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
}
const userRepository = new Repository();
const productRepository = new Repository();
userRepository.add({ id: 1, name: "Alice" });
userRepository.add({ id: 2, name: "Tina" });
userRepository.add({ id: 3, name: "Tanya" });
productRepository.add({ id: "id1", title: "Phone", price: 1000 });
productRepository.add({ id: "id2", title: "Notepad", price: 5000 });
console.log(userRepository.findAll());
console.log(userRepository.findById(1));
console.log(productRepository.findAll());
console.log(productRepository.findById("id2"));
console.log(userRepository.findById(0));
