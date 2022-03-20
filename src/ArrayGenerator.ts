export class ArrayGenerator {
    static Z(n: number): number[] {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(0);         
        }
        return arr;
    }

    static N(n: number): number[] {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(i+1);         
        }
        return arr;
    }
}