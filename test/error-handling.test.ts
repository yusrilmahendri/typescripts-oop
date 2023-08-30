describe('error handling', () => {

    class ValidationError extends Error {
        constructor(message: string){
            super(message);
        }
    }

    function double(value: number): number{
        if(value <= 0){
            throw new ValidationError('value cannot be negative');
        }
        return value * 2;
    }
    
    it('should throw an error try and catch', () => {
         try{
            const result = double(-1);
            console.log(result);
         }catch(error){
            if(error instanceof ValidationError){
                console.log(error.message);
            }
         }
    });
});