import { ArrayGenerator } from "ArrayGenerator";
import { Coordinate } from "types/Coordinate";

export class Matrix<T> {

    public readonly N: number;
    public readonly M: number;
    constructor(
        private readonly matrix: T[][],
    ) {
        this.N = matrix.length;
        this.M = Math.min(...matrix.map(row => row.length));
    }

    static Z(n: number, m: number): Matrix<number> {
        const matrix = ArrayGenerator.Z(n)
            .map(() => ArrayGenerator.Z(m));
        return new Matrix(matrix);
    }

    map<F>(f: (c: Coordinate, value: T, matrix: Matrix<T>) => F): Matrix<F> {
        const matrix: F[][] = ArrayGenerator.Z(this.N).map(() => []);
        for (let i = 0; i < this.N; i++) {
            for (let j = 0; j < this.M; j++) {
                matrix[i][j] = f({ x: i, y: j }, this.matrix[i][j], this);
            }
        }
        return new Matrix(matrix);
    }
}