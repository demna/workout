export class Matrix<T> {

    public readonly N: number;
    public readonly M: number;
    constructor(
        private readonly matrix: T[][],
    ) {
        this.N = matrix.length;
        this.M = Math.min(...matrix.map(row => row.length));
     }
}