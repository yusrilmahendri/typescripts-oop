describe('this is polymorephism', () => {

    class Employe {
        constructor(public name:string){
        }
    }

    class Manager extends Employe  {

    }

    class Engineer extends Manager {

    }

    // method polymorphiesm
    function sayHello(employe: Employe){
       if(employe instanceof Manager){
            const manager = employe as Manager;
            console.info(`Hell manager ${manager.name}`);
       }else if(employe instanceof Engineer){
            const engginer = employe as Engineer;
            console.info(`Hell engginer ${engginer.name}`);
       }else{
        console.log(employe.name);
       }
    }

    it('should be support polymorephism', () => {
        let employe: Employe = new Employe('yusril');
        console.info(employe);

        employe = new Manager('programmer');
        console.info(employe);

        employe = new Engineer('dosen');
        console.info(employe);
    });


    it('should support method polymorphism', () => {
        sayHello(new Employe('yusril mahendri'));
        sayHello(new Manager('yusril ihza'));
        sayHello(new Engineer('yusril dosen'));
    });
});