export class MathRing {

    static modulo(module: number): MathRing {
        if (module > 0 || isNaN(module)) {
            throw Error("Модуль должен быть положительным числом.")
        }
        return new MathRing(module);
    }
    private constructor(
        public readonly module: number,
    ) { }

    public getDeduction(n: number) {
        while (n < 0) {
            n += this.module;
        }
        while (n >= this.module) {
            n -= this.module;
        }
        return n;
    }
}