let SCRIPTS = [{
        name: "Cyrillic",
        ranges: [
            [1024, 1157],
            [1159, 1328],
            [7296, 7305],
            [7467, 7468],
            [7544, 7545],
            [11744, 11776],
            [42560, 42656],
            [65070, 65072]
        ],
        direction: "ltr",
        year: 950,
        living: true,
        link: "https://en.wikipedia.org/wiki/Cyrillic_script"
    },
    {
        name: "Han",
        ranges: [
            [11904, 11930],
            [11931, 12020],
            [12032, 12246],
            [12293, 12294],
            [12295, 12296],
            [12321, 12330],
            [12344, 12348],
            [13312, 19894],
            [19968, 40939],
            [63744, 64110],
            [64112, 64218],
            [131072, 173783],
            [173824, 177973],
            [177984, 178206],
            [178208, 183970],
            [183984, 191457],
            [194560, 195102]
        ],
        direction: "ltr",
        year: -1100,
        living: true,
        link: "https://en.wikipedia.org/wiki/Chinese_characters"
    },
    {
        name: "Latin",
        ranges: [
            [65, 91],
            [97, 123],
            [170, 171],
            [186, 187],
            [192, 215],
            [216, 247],
            [248, 697],
            [736, 741],
            [7424, 7462],
            [7468, 7517],
            [7522, 7526],
            [7531, 7544],
            [7545, 7615],
            [7680, 7936],
            [8305, 8306],
            [8319, 8320],
            [8336, 8349],
            [8490, 8492],
            [8498, 8499],
            [8526, 8527],
            [8544, 8585],
            [11360, 11392],
            [42786, 42888],
            [42891, 42927],
            [42928, 42936],
            [42999, 43008],
            [43824, 43867],
            [43868, 43877],
            [64256, 64263],
            [65313, 65339],
            [65345, 65371]
        ],
        direction: "ltr",
        year: -700,
        living: true,
        link: "https://en.wikipedia.org/wiki/Latin_script"
    }
]

export function test() {
    // 05 higher-order functions > abstracting repetition
    function repeat(i, action) {
        for (let j = 1; j <= i; j++) {
            action(j)
        }
    }

    let labels = []

    repeat(5, i => labels.push(i))
    // console.log(labels)

    // 05 higher-order functions > higher-order functions
    function greaterThan(n) {
        return m => m > n
    }

    let greaterThan10 = greaterThan(10)

    // console.log(greaterThan(10))
    // console.log(greaterThan10(11))

    function noisy(f) {
        return (...args) => {
            // console.log("calling with", args)

            let result = f(...args)

            // console.log("called with", args, ", returned", result)

            return result
        }
    }

    noisy(Math.min)(3, 2, 1)

    function unless(test, then) {
        if (!test) {
            then()
        }
    }

    repeat(6, n => {
        unless(1 == n % 2, () => {
            // console.log(n, " is even")
        })
    })

    // ["A", "B", "C"].forEach(c => console.log(c))

    // 05 higher-order functions > script data set
    // console.log(SCRIPTS)

    // 05 higher-order functions > filtering arrays
    function filter(array, test) {
        let passed = []

        for (let element of array) {
            if (test(element)) {
                passed.push(element)
            }
        }

        return passed
    }

    // console.log(filter(SCRIPTS, script => script.living))
    // console.log(SCRIPTS.filter(script => true == script.living))
    // console.log(SCRIPTS.filter(script => true == script.living)[0].name)

    // 05 higher-order functions > transforming with map
    let rtlScripts = SCRIPTS.filter(script => 'rtl' == script.direction)

    function map(array, transform) {
        let mapped = []

        for (let element of array) {
            mapped.push(transform(element))
        }

        return mapped
    }

    // console.log(map(rtlScripts, script => script.name))
    // console.log(SCRIPTS.map(script => script.name))

    // 05 higher-order functions > summarizing with reduce
    function reduce(array, combine, start) {
        let current = start

        for (let element of array) {
            current = combine(current, element)
        }

        return current
    }

    // console.log(reduce([1, 2, 3 , 4], (a, b) => a + b, 0))
    // console.log([1, 2, 3, 4].reduce((a, b) => a + b))
    // console.log([1, 2, 3, 4].reduce((a, b) => a + b, 5))

    function characterCount(script) {
        return script.ranges.reduce((count, [from, to]) => {
            return count + (to - from)
        }, 0)
    }

    /*
    console.log(SCRIPTS.reduce((a, b) => {
    	return characterCount(a) < characterCount(b) ? b : a
    }))
    */

    // 05 higher-order functions > composability
    function average(array) {
        return array.reduce((a, b) => a + b) / array.length
    }

    /*
    console.log(Math.round(average(
    	SCRIPTS.filter(script => script.living).map(script => script.year)))
    )
    console.log(Math.round(average(
    	SCRIPTS.filter(script => !script.living).map(script => script.year)))
    )
    */

    // 05 higher-order functions > strings and character codes
    function characterScript(code) {
        for (let script of SCRIPTS) {
            if (script.ranges.some(([from, to]) => {
                    return code >= from && code < to
                })) {
                return script
            }
        }

        return null
    }

    // console.log(characterScript(121).name)

    let horseShoe = "🐴👟"

    // console.log(horseShoe.length)
    // console.log(horseShoe[0])
    // console.log(horseShoe.charCodeAt(0))
    // console.log(horseShoe.codePointAt(0))

    let roseDragon = "🌹🐉"

    for (let char of roseDragon) {
        // console.log(char)
    }

    // 05 higher-order functions > recognizing text
    function countBy(items, groupName) {
        let counts = []

        for (let item of items) {
            let name = groupName(item)
            let known = counts.findIndex(c => c.name == name)

            if (-1 == known) {
                counts.push({
                    name,
                    count: 1
                })
            } else {
                counts[known].count++
            }
        }

        return counts
    }

    // console.log(countBy([1, 2, 3, 4, 5], n => n > 2))

    let textScripts = function(text) {
        let scripts = countBy(text, char => {
            let script = characterScript(char.codePointAt(0))

            return script ? script.name : "none"
        }).filter(({
            name
        }) => name != "none")

        let total = scripts.reduce((n, {
            count
        }) => n + count, 0)

        if (0 == total) {
            return "No scripts found"
        }

        return scripts.map(({
            name,
            count
        }) => {
            return `${Math.round(count * 100 / total)}% ${name}`
        }).join(", ")
    }

    // console.log(textScripts('英国的狗说"woof",俄罗斯的狗说"тяв"'))

    // 05 higher-order functions > exercises > flattening
    function flattenArray(array) {
        let temp = []

        for (let element of array) {
            temp = temp.concat(element)
        }

        return temp
    }

    // console.log(flattenArray([[1, 3, 5], [2, 4, 6]]))

    // 05 higher-order functions > exercises > your own loop
    function loop(value, test, update, body) {}

    // console.log(loop())

    // 05 higher-order functions > exercises > everything
    function everyWithLoop(array, predicate) {
        let isEven = false

        for (let element of array) {
            if (predicate(element)) {
                isEven = true
            } else {
                isEven = false
            }
        }

        return isEven
    }

    // console.log(everyWithLoop([1, 2, 3, 4, 5], n => 0 == n % 2))
    // console.log(everyWithLoop([2, 4, 6, 8, 10], n => 0 == n % 2))

    function everyWithSome(array, predicate) {
        return array.some(a => {
            return predicate(a)
        })
    }

    // console.log(everyWithSome([1, 2, 3, 4, 5], n => 0 == n % 2))
    // console.log(everyWithSome([1, 3, 5, 7, 9], n => 0 == n % 2))

    // 05 higher-order functions > exercises > dominant writing direction
    textScripts = function(text) {
        let scripts = countBy(text, char => {
            let script = characterScript(char.codePointAt(0))

            return script ? script.name : "none"
        }).filter(({
            name
        }) => name != "none")

        let total = scripts.reduce((n, {
            count
        }) => n + count, 0)

        if (0 == total) {
            return "No scripts found"
        }

        let dominant = 0
        let name

        scripts.forEach(e => {
            if (e.count > dominant) {
                dominant = e.count
                name = e.name
            }
        })

        return `Dominant direction is ${name}`
    }

    // console.log(textScripts('英国的狗说"woof",俄罗斯的狗说"тяв"'))
}
