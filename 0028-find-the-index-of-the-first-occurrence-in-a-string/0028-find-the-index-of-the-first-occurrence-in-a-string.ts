function strStr(haystack: string, needle: string): number {
    let haystackLetters = haystack.split("")
    let needleLetters = needle.split("")
    let startIndex = -1

    for (let i = 0; i < haystackLetters.length; i++) {
        let correct = false
        for (let j = 0; j < needleLetters.length; j++) {
            if(needleLetters[j] == haystackLetters[j + i]) {
                if(correct == true) {
                    continue
                }
                correct = true
                startIndex = i

            } else {
                correct = false
                startIndex = -1
                break;
            }
        }
        if (correct == true) {
            break;
        }
    }
    return startIndex;
};