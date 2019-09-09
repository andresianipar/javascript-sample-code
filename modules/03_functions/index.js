export function test() {
    // 03 functions > defining a function
    const square = function(x) {
        return x * x;
    }

    // console.log(square(4));

    let power = function(x, y) {
        let result = 1;

        for (let i = 0; i < y; i++) {
            result *= x;
        }

        return result;
    }

    // console.log(power(2, 3));

    {
        let x = 5;
    }

    // console.log(x);

    // 03 functions > bindings and scopes > nested scope
    const scope1 = function(a, b) {
        const scope2 = function(x, y, z) {
            return x + y + z;
        }

        // return a + b + x;
        return a + b + scope2(1, 1, 1);
    }

    // console.log(scope1(1, 1))

    // 03 functions > functions as values
    let launchMissiles = function() {}

    // console.log(launchMissiles())

    if (true) {
        launchMissiles = function() {
            return 1
        }
    }

    // console.log(launchMissiles())

    // 03 functions > declaration notation
    // console.log(future())

    function future() {
        return 'Back to the Future'
    }

    // 03 functions > arrow functions
    const square1 = (x) => {
        return x * x
    }
    const square2 = x => x * x
    const horn = () => {
        return 'Horn'
    }

    // console.log(square1(2) + square2(2) + 1)
    // console.log(horn())

    // 03 functions > optional arguments
    function minus(a, b) {
        if (undefined == b) {
            return -a
        }

        return a - b
    }

    // console.log(minus(5))
    // console.log(minus(5, 15))

    power = function(base, exponent = 2) {
        let result = 1

        for (let i = 0; i < exponent; i++) {
            result *= base
        }

        return result
    }

    // console.log(power(2))

    // 03 functions > closure
    function wrapValue(n) {
        let local = n

        return () => local
    }

    let wrap1 = wrapValue(1)
    let wrap2 = wrapValue(2)

    // console.log(wrap1())
    // console.log(wrap2())

    function multiplier(factor) {
        return number => number * factor
    }

    // console.log(multiplier(5))

    let twice = multiplier(2)

    // console.log(twice(5))

    // 03 functions > recursion
    function powerRecursion(base, exponent) {
        if (0 == exponent) {
            return 1
        }

        return base * powerRecursion(base, exponent - 1)
    }

    // console.log(powerRecursion(2, 4))

    function findSolution(target) {
        function find(current, history) {
            if (target == current) {
                return history
            } else if (current > target) {
                return null
            } else {
                return find(current * 3, `${history} * 3`) || find(current + 5, `${history} + 5`)
            }
        }

        return find(1, "1")
    }

    // console.log(findSolution(13))

    let printFarmInventory = function(cows, chicken) {
        let cowString = String(cows)
        let chickenString = String(chicken)

        for (let i = 0; i < 4 - cowString.length; i++) {
            cowString = "0" + cowString
        }
        console.log(cowString + " cows")

        for (let i = 0; i < 4 - chickenString.length; i++) {
            chickenString = "0" + chickenString
        }
        console.log(chickenString + " chicken")
    }

    // console.log(printFarmInventory(7, 10))

    function printZeroPaddedWithLabel(number, label) {
        let numberString = String(number)

        for (let i = 0; i < 4 - numberString.length; i++) {
            numberString = "0" + numberString
        }

        return numberString + " " + label
    }

    printFarmInventory = function(cows, chicken, pig) {
        console.log(printZeroPaddedWithLabel(cows, "cows"))
        console.log(printZeroPaddedWithLabel(chicken, "chicken"))
        console.log(printZeroPaddedWithLabel(pig, "pig"))
    }

    // console.log(printFarmInventory(6, 10, 19))

    // 03 functions > exercises > recursion
    function isEven(x) {
        if (0 == x) {
            return 0
        } else if (1 == x) {
            return 1
        } else {
            return isEven(x - 2)
        }
    }

    // console.log(isEven(75))

    // 03 functions > exercises > bean counting
    function countBs(s) {
        let i = s.length
        let count = 0

        while (i >= 0) {
            --i
            if (65 <= s.charCodeAt(i) && 90 >= s.charCodeAt(i)) {
                count++
            }
        }

        return count
    }

    // console.log(countBs("AgilitY"))

    function countChar(s, c) {
        let i = s.length
        let count = 0

        while (i >= 0) {
            if (c == s[--i]) {
                count++
            }
        }

        return count
    }

    // console.log(countChar("Intelligence", "e"))
}

// 03 functions > declaration notation
// console.log(future())
