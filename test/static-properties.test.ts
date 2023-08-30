describe('static properties', () => {

    class Configuration {
        static NAME: string = "Relation typescripts OOP";
        static VERSION: number = 1.0;
        static AUTHOR: string = "yusril ihza mahendri";
    }

    it('should be able to access static properties', () => {
        console.log(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    });

    // static methodds 
    class MathUtil {
        static sum(...values: number[]): number{
            let total = 0;
            for(let value of values){
                total += value;
            }
            return total;
        }
    }    
    it('should be able to access static methods', () => {
        console.log(MathUtil.sum(1,2,3,4,5));
    });
});