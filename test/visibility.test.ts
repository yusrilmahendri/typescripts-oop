describe('this is visibility', () => {


    class Counter {
       // private counter: number = 0;
       protected counter: number = 0;

        public increment() {
            this.counter++;
        }

        public getCounter() {
            return this.counter;
        }
    }

    class doubleCounter extends Counter {
        public increment(): void {
            this.counter += 2;
       }
    }
    

    it('should be support private', () => {
            const counter = new Counter();
            console.info(counter);
            counter.increment();
            console.info(counter.getCounter());
            const x = new doubleCounter();
            console.info(counter.getCounter());
    });
});