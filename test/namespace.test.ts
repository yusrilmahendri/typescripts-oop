import { MathUtil } from "../src/math-utils";

describe('namespace', () => {


    it('works this namespace', () => {
        console.info(MathUtil.PI);
        console.info(MathUtil.sum(1, 2, 3, 4, 5));      
    });
});