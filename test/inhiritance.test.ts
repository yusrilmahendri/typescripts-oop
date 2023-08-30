describe('inheritance', () => {

    class Employe {
        name: string;

        constructor(name: string){
            this.name = name;
        }
    }

    class Manager extends Employe{

    }

    class Director extends Manager{

    }

    it('should support inheritance', () => {
        const employe = new Employe("yusril");
        const manager = new Manager("mahendri");
        const director = new Director("ihza");

        console.info(employe.name);
        console.info(manager.name);
        console.info(director.name);
    });
});