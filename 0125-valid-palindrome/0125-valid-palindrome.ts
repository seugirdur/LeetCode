function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9 ]/g, "");
    s = s.toLowerCase()
    s = s.replace(/ /g,'')
    console.log(s)
    

    if (s == "") {
        return true
    }

    let letters:string[] = s.split("")
    let inverseLetters = []
    let wordSize = letters.length
    let equal:boolean = false
    for (let letter of letters) {
        if (letter == letters[wordSize - 1]) {
            equal = true
        } else {
            equal = false
            break;
        }
        wordSize--

    }

    return equal
};