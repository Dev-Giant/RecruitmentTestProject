export default function GenerateDiamond( input: string = "C" ){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    const index = alphabet.indexOf(input)
    const arr = alphabet.slice(1, index).concat(alphabet.slice(1, index + 1).reverse())
    const total = index * 2 + 1
    let edge = index -1
    let result = [];
    result.push("_".repeat(index) + "A" + "_".repeat(index))
    arr.forEach((item, index) => 
        result.push("_".repeat(Math.abs(edge - index)) + item + "_".repeat(total - 2 * Math.abs(edge - index) - 2) + item + "_".repeat(Math.abs(edge - index)))
    )
    result.push("_".repeat(index) + "A" + "_".repeat(index))
    return result
}