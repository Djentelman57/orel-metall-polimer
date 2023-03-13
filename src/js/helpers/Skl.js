export default class {
    static get(number, values) {
        let cases =  [2, 0, 1, 1, 1, 2];
        return values[(number%100>4 && number%100<20)? 2: cases[Math.min(number%10, 5)] ];
    }
}