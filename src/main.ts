import { ArrayGenerator } from "./ArrayGenerator"
import { Matrix } from "./Matrix"

console.log("Hellow world!")
console.log(ArrayGenerator.Z(10))
Matrix.Z(2, 2)
    .map((_, c) => c)
    .forEach(value => console.log(value))

