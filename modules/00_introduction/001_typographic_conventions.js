export function factorial(n) {
    if (0 == n)
        return 1;
    else {
        return factorial(n - 1) * n;
    }
}
