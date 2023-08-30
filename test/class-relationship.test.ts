describe(' class relationship', () => {

    class Person {
        constructor(public name: string) {
            this.name = name;
        }
    }

    class Customer{
        constructor(public name: string) {
                    this.name = name;
        }
    }
    it( 'class relationship', () => {
        const person: Person = new Customer('Yusril');
        console.info(person.name);
    });
});