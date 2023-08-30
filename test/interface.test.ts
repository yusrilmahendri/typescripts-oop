describe('interface', () => {
    
    interface hasName{
        name: string;
    }

    interface canSayHello {
        sayHello(name: string): void;
    }

    class Person implements hasName, canSayHello{
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`hello ${name} my name is ${this.name}`);
        }
    }
    
    it('should support inheritance', () => {
        const person = new Person("ihza");
        person.sayHello('yusril');
    });
});