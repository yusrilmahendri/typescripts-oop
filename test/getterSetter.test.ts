describe('geeter & setter', () => {

    class Category{
        _name?: string;

        //getter
        get name(): string{
            if(this._name){
                return this._name;
            }else {
                return 'empty';
            }
        }

        // setter 
        set name(value: string){
            if(value !== ""){
                this._name = value;
            }
        }
    }

    it('should support in class', () => {
        const category = new Category();
        
        console.info(category.name);

        category.name = "Yusril iza mahendri";
        console.info(category.name);

        category.name = "";
        console.info(category.name);
    });
});