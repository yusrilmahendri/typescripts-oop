describe('instance of test', ()=>{

    class Employe{

    }

    class Manager {

    }
    const yusril = new Employe();
    const eko  = new Manager();

    it('should problem test using typeof', () => {
        console.info(typeof yusril);
        console.info(typeof eko);
    });

    it('should be support instance of test', () => {
       expect(yusril instanceof Employe).toBe(true);
       expect(eko instanceof Manager).toBe(true);
    });

});