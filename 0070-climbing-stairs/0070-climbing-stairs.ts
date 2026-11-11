function climbStairs(n: number): number {

    if (n === 1) return 1;
    if (n === 2) return 2;

    let first = 1;  // ways to reach step 1
    let second = 2; // ways to reach step 2

    for (let i = 3; i <= n; i++) {
        const current = first + second;
        first = second;
        second = current;
    }

    return second;
}

