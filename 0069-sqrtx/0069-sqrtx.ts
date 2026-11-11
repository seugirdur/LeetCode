function mySqrt(x: number): number {
    let found:boolean = false
    if (x == 0) return 0
    if (x == 1) return 1
    let i:number = 1
    while (found == false) {
        if (i * i > x) {
            return i - 1
        }
        i++
    }

};