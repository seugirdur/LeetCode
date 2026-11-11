function addBinary(a: string, b: string): string {
    let lastIndexA: number = a.length;
    let lastIndexB: number = b.length;
    let textSum: string = ""
    let biggerIndex: number = lastIndexA > lastIndexB ? lastIndexA : lastIndexB
    let rest = 0
    for (biggerIndex; biggerIndex > 0; biggerIndex--) {
        let numberA: number = parseInt(a[lastIndexA - 1])
        let numberB: number = parseInt(b[lastIndexB - 1])
        let sum = numberA + numberB + rest
        rest = 0
        switch(sum) {
            case 0:
             textSum = "0" + textSum
             break;
            case 1:
             textSum = "1" + textSum
             break;
            case 2:
             textSum = "0" + textSum
             rest = 1
             break;
            case 3:
            textSum = "1" + textSum
            rest = 1
        }
        if (lastIndexA - 1 == 0 && lastIndexB - 1 == 0) {
            if (rest == 1) {
                textSum = "1" + textSum
            }
            return textSum
        }
        if (lastIndexA - 1 == 0) {
            a = "0"
        } else {
            lastIndexA--
        }
        if (lastIndexB - 1 == 0) {
            b = "0"
        } else {
            lastIndexB--
        }

    }
};