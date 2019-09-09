export function test() {
    // 04 data structures objects and arrays > data sets
    let listOfNumbers = [2, 3, 5, 7, 11]

    // 04 data structures objects and arrays > properties
    // console.log(null.length)
    // console.log(listOfNumbers["length"])

    // 04 data structures objects and arrays > methods
    // console.log(typeof listOfNumbers)
    // console.log(typeof listOfNumbers.length)
    // console.log(typeof "some string".toUpperCase)
    // console.log(typeof "some string".toUpperCase())
    listOfNumbers.push(4)
    // console.log(listOfNumbers)
    listOfNumbers.pop()
    // console.log(listOfNumbers)

    // 04 data structures objects and arrays > objects
    let day1 = {
        squirrel: false,
        events: ["work", "touched tree", "pizza", "running"]
    }

    // console.log(day1.squirrel)
    // console.log(day1.wolf)
    day1.wolf = false
    // console.log(day1.wolf)

    let anObject1 = {
        left: 1,
        right: 2
    }

    // console.log(anObject1.left)
    delete anObject1.left
    // console.log(anObject1.left)
    // console.log("left" in anObject1)
    // console.log("right" in anObject1)
    // console.log(Object.keys(anObject1))

    let anObject2 = {}

    // console.log(anObject2)
    Object.assign(anObject2, anObject1)
    // console.log(anObject2)

    let journal = [{
            events: ["work", "touched tree", "pizza", "running", "television"],
            squirrel: false
        },
        {
            events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
            squirrel: false
        },
        {
            events: ["weekend", "cycling", "break", "peanuts", "beer"],
            squirrel: true
        }
    ]

    // 04 data structures objects and arrays > mutability
    let object1 = {
        value: 10
    }
    let object2 = object1
    let object3 = {
        value: 10
    }

    // console.log(object1 == object2)
    // console.log(object1 == object3)

    const score = {
        visitors: 0,
        home: 0
    }

    score.visitors = 1
    // console.log(score)
    // score = { visitors: 1, home: 1 }
    // console.log(score)

    // 04 data structures objects and arrays > the lycanthrope's log
    journal = []

    function addEntry(events, squirrel) {
        journal.push({
            events,
            squirrel
        })
    }

    // console.log(journal)
    addEntry(["work", "touched tree", "pizza", "running", "television"], false)
    addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false)
    addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true)
    // console.log(journal)

    // 04 data structures objects and arrays > computing correlation
    function phi(table) {
        return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
    }

    // console.log(phi([76, 9, 4, 1]))

    function tableFor(event, journal) {
        let table = [0, 0, 0, 0]

        for (let i = 0; i < journal.length; i++) {
            let entry = journal[i],
                index = 0

            if (entry.events.includes(event)) {
                index += 1
            }
            if (entry.squirrel) {
                index += 2
            }
            table[index] += 1
        }

        return table
    }

    // console.log(tableFor("pizza", journal))
    // console.log(journal[0].events.includes("running"))

    // 04 data structures objects and arrays > array loops
    for (let entry of journal) {
        // console.log(`${entry.events.length} events`)
    }

    // 04 data structures objects and arrays > the final analysis
    function journalEvents(journal) {
        let events = []

        for (let entry of journal) {
            for (let event of entry.events) {
                if (!events.includes(event)) {
                    events.push(event)
                }
            }
        }

        return events
    }

    // console.log(journalEvents(journal))

    for (let event of journalEvents(journal)) {
        let correlation = phi(tableFor(event, journal))

        if (0.1 < correlation || -0.1 > correlation) {
            // console.log(event + ": ", correlation)
        }
    }

    for (let entry of journal) {
        if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
            entry.events.push("peanut teeth")
        }
    }

    // console.log(phi(tableFor("peanut teeth", journal)))

    // 04 data structures objects and arrays > further arrayology
    let todoList = ["work", "touched tree", "pizza"]

    function remember(task) {
        todoList.push(task)
    }

    function getTask() {
        return todoList.shift()
    }

    function rememberUrgently(task) {
        todoList.unshift(task)
    }

    // console.log(todoList)
    remember("running")
    // console.log(todoList)
    // console.log(getTask())
    rememberUrgently("television")
    // console.log(todoList)
    // console.log(todoList.indexOf("work"))
    // console.log(todoList.lastIndexOf("work"))
    // console.log(todoList)
    // console.log(todoList.slice(1, todoList.length - 1))

    function remove(array, index) {
        return array.slice(0, index).concat(array.slice(index + 1))
    }

    // console.log(remove(["a", "b", "c", "d", "e"], 2))

    // 04 data structures objects and arrays > strings and their properties
    let kim = "Kim"

    // kim.age = 35
    // console.log(kim.age)

    // console.log("coconuts".slice(4, 7))
    // console.log("coconut".indexOf("u"))
    // console.log("one two three".indexOf("ee"))
    // console.log(" okay\n ".trim() == "okay")
    // console.log("6".padStart(3, "0"))

    let sentence = "Secretary birds specialize in stomping"
    let words = sentence.split(" ")

    // console.log(words)
    // console.log(words.join(". "))

    // console.log("NY".repeat(3))

    let alphabet = "abc"

    // console.log(alphabet.length)
    // console.log(alphabet[1])

    // 04 data structures objects and arrays > rest parameters
    function max(...numbers) {
        let result = -Infinity

        for (let number of numbers) {
            if (result < number) {
                result = number
            }
        }

        return result
    }

    // console.log(max(4, 1, 9, -2))

    let numbers = [5, 1, 7]

    // console.log(max(...numbers))
    // console.log(max(9, ...numbers, 2))

    words = ["never", "fully"]

    // console.log(["will", ...words, "understand"])

    // 04 data structures objects and arrays > the math object
    var data1;
    var data1;

    function yes1() {
        console.log("1")
    }

    function yes1() {
        console.log("2")
    }

    // yes1()

    // console.log(Math.PI)
    // console.log(Math.floor(Math.random() * 100))

    // 04 data structures objects and arrays > destructuring
    let someNumbers = [1, 2, 3, 4, 5]

    function doSomethingOnSomeNumbers([st, nd, rd, th]) {
        return st + nd + rd + th
    }

    // console.log(doSomethingOnSomeNumbers(someNumbers))

    let {
        name
    } = {
        name: "Michael",
        age: 25
    }

    // console.log(name)

    // 04 data structures objects and arrays > json
    let stringSquirrel = JSON.stringify(journal)

    // console.log(stringSquirrel)
    // console.log(JSON.parse(stringSquirrel)[0].events[0])

    // 04 data structures objects and arrays > exercises > the sum of a range
    function range(start, end, step = 1) {
        let arr = []

        if (step >= 1) {
            for (let i = start, j = 0; i <= end; i += step) {
                arr[j++] = i
            }
        }
        for (let i = start, j = 0; i >= end; i += step) {
            arr[j++] = i
        }

        return arr
    }

    function sum(arr) {
        let sum = 0
        let i = -1

        while (i++ < arr.length - 1) {
            sum += arr[i]
        }

        return sum
    }

    // console.log(range(1, 5))
    // console.log(55 == sum(range(1, 10)))
    // console.log(range(1, 10, 2))
    // console.log(range(5, 2, -1))

    // 04 data structures objects and arrays > exercises > reversing an array
    function reverseArray(arr) {
        let temp = []

        for (let i = arr.length - 1, j = 0; i >= 0; i--) {
            temp[j++] = arr[i]
        }

        return temp
    }

    // console.log(reverseArray(range(1, 5)))

    // 04 data structures objects and arrays > exercises > a list
    function arrayToList(...numbers) {}

    // 04 data structures objects and arrays > exercises > deep comparison
    function deepEqual(a, b) {
        if (null == a || null == b) {
            return false
        }
        if ('object' == typeof a) {
            for (let [key, value] of Object.entries(a)) {
                if (a[key] != b[key]) {
                    return false
                }
            }

            return true
        }

        return a == b
    }

    // console.log(deepEqual(5, 5))

    let obj1 = {
        a: 'somestring',
        b: 45
    }

    let obj2 = {
        a: 'somestring',
        b: 45
    }

    let obj3 = {
        x: 'something',
        y: 55
    }

    // console.log(deepEqual(obj1, obj2))
    // console.log(deepEqual(obj1, obj3))
    // console.log(deepEqual(obj1, null))
}
