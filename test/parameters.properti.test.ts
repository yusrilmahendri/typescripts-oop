describe('parameter properties', () => {

    class Person{
        constructor(public name: string){
            
        }
    }

    it('should support parameter properties', () => {
        const person = new Person('yusril iza mahendri');
        console.info(person.name);

        person.name = 'ihza';
        console.info(person.name);

    });
});