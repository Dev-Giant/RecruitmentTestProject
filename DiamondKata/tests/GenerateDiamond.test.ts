import GenerateDiamond from "../src/GenerateDiamond";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const inputChar = alphabet.charAt(Math.round(Math.random() * 24) + 1)
const result: string[] = GenerateDiamond(inputChar);

test('first row contains A', () => {
    expect(result[0].includes("A")).toBeTruthy();
})

test('last row contains A', () => {
    const temp = [...result];
    expect(temp.pop()?.includes("A")).toBeTruthy();
})

test('rows have symmetric contour', () => {
    const length = result[0].length;
    for(let individualArray of result)
    {
        expect(individualArray.slice(0, length/2).split('').reverse().join('')).toBe(individualArray.slice(length/2 + 1))
    }
})

test('rows except top and bottom have two identical letters', () => {
    for(let i = 1 ; i < result.length - 1; i++) {
        const temp = result[i].split('').filter((item) => item >= 'A' && item <= 'Z')
        expect(temp.length).toBe(2);
        expect(temp[0]).toBe(temp[1]);
    }
})

test('rows are as wide as high', () => {
    expect(result[0].length).toBe(result.length);
})