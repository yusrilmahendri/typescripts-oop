describe('method overiding', () => {
    
    class Employee {
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayHello(name: string): void{
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee{

        sayHello(name: string): void {
            //      console.info(`Hello ${name}, my name is ${this.name} i am your manager`);
            //with super
            super.sayHello(name);
            console.info('i am your manager');
        }
    }

    it('should support method overiding', () => {
        const employe = new Employee("yusril");
        employe.sayHello("yusril ihza mahendri");

        const manager = new Manager("yusril mahendri");
        manager.sayHello("yusril ihza mahendri S.Kom");
    });

});