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


}