describe('Class', function(){

    class Customer{

        //constructor 
        constructor(){
            console.info("create new customer");
        }
    }
    class Order{

    }

    it('should can create class', () => {
       
        //this is object 
        const customer: Customer = new Customer(); // cara dengan explesit 
        const order = new Order(); // cara not explesit
    });

    it('should create constructor', () => {
        new Customer();
    });

});