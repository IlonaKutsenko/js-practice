interface Storable {
    id: string | number;
}

class Repository<T extends Storable> {
    items: T[] = [];
    
    add (item: T): void {
        this.items.push(item);
    }

    findAll(): T[] {
        return this.items;
    }

    findById(id: string | number): T | undefined {
        return this.items.find(item => item.id === id);
}
}


interface User {
    id: number;
    name: string;
}

interface Product {
    id: string;
    title: string;
    price: number;
}

const userRepository = new Repository <User>();
const productRepository = new Repository <Product>();   

userRepository.add({ id: 1, name: "Alice"});
userRepository.add({ id: 2, name: "Tina"});
userRepository.add({ id: 3, name: "Tanya"});

productRepository.add({ id: "id1", title: "Phone", price: 1000});
productRepository.add({ id: "id2", title: "Notepad", price: 5000});

console.log(userRepository.findAll());
console.log(userRepository.findById(1));
console.log(productRepository.findAll());
console.log(productRepository.findById("id2"));
console.log(userRepository.findById(0));

