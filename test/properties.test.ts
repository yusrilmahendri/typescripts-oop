describe('Property', () => {

    class Customer {
        readonly id: number;
        name: string = "ihza"; // make default value
        age?: number;

        constructor(id: number, name: string){
            this.id = id;
            this.name = name;
        }

        // method 
        sayHello(name: string): void{
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('should can have properties', () => {
        const customer = new Customer(1, "Yusril");
        customer.age = 20;

        console.info(customer.id);
        console.info(customer.name);
        console.info(customer);
    });

    it('should can havae method', () => {
        const customer = new Customer(1, "Yusril");
        customer.sayHello("ihza");
    });
});