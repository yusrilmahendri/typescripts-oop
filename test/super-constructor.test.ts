describe('super constructor', () => {

    class Person{
        name: string;

        constructor(name: string){
            this.name = name;
        }
    }

    class Employe extends Person {
        departement: string;

        constructor(name: string, departement: string){
            super(name);
            this.departement = departement;
        }
    }

    it('should support super constructor', () => {
        const employe = new Employe('yusril', 'software engginering');
        console.info(employe.name);
        console.info(employe.departement);
    });
});