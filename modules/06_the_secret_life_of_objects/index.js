export function test() {
    // 06 the secret life of object > methods
    let rabbit = []

    rabbit.speak = function(line) {
        return `The rabbit says ${line}`
    }

    // console.log(rabbit.speak("I'm alive"))

    function speak(line) {
        return `The ${this.type} rabbit says ${line}`
    }

    let whiteRabbit = {
        type: "white",
        speak
    }
    let hungryRabbit = {
        type: "hungry",
        speak
    }

    // console.log(whiteRabbit.speak("oh my ears and whiskers, how late it's getting!"))
    // console.log(hungryRabbit.speak("I could use a carrot right now"))
    // console.log(speak.call(hungryRabbit, "Burp!"))

    function normalize() {
        return this.coords.map(n => n / this.length)
    }

    // console.log(normalize({coords: [0, 1, 2], length: 5}))

    // 06 the secret life of object > prototypes
    let empty = {}

    // console.log(empty.toString)
    // console.log(empty.toString())
    // console.log(Object.getPrototypeOf({}) == Object.prototype)
    // console.log(Object.getPrototypeOf(Object.prototype))
    // console.log(Object.getPrototypeOf(Math.max) == Function.prototype)
    // console.log(Object.getPrototypeOf([]) == Array.prototype)

    let protoRabbit = {
        speak(line) {
            return `The ${this.type} rabbit says ${line}`
        }
    }

    let lovelyRabbit = Object.create(protoRabbit)

    lovelyRabbit.type = "lovely"
    // console.log(lovelyRabbit.speak("much love"))

    let a = {}

    a.b = "c"
    // console.log(a.b)

    // 06 the secret life of object > classes
    function Giraffe(type) {
        this.type = type
    }

    let chadGiraffe = new Giraffe("chad")

    Giraffe.prototype.speak = function(line) {
        return `The ${this.type} giraffe says ${line}`
    }

    // console.log(chadGiraffe.speak("problem bruh?"))

    // console.log(Object.getPrototypeOf(Giraffe) == Function.prototype)
    // console.log(Object.getPrototypeOf(chadGiraffe) == Function.prototype)
    // console.log(Object.getPrototypeOf(chadGiraffe) == Giraffe.prototype)

    // 06 the secret life of object > class notation
    class Kangaroo {

        constructor(type) {
            this.type = type
        }

        speak(line) {
            return `The ${this.type} kangaroo says ${line}`
        }

    }

    let boxingKangaroo = new Kangaroo("boxing")

    Kangaroo.prototype.kick = function() {
        return `Kangaroo KICK!`
    }

    // console.log(Object.getPrototypeOf(Kangaroo))
    // console.log(Object.getPrototypeOf(boxingKangaroo))
    // console.log(boxingKangaroo.kick())

    let object = new class {
        getWord() {
            return "Hello, World!"
        }
    }

    // console.log(object.getWord())

    // 06 the secret life of object > overriding derived properties
    Kangaroo.prototype.teeth = "medium"

    // console.log(boxingKangaroo.teeth)

    boxingKangaroo.teeth = "long, sharp, and bloody"

    // console.log(boxingKangaroo.teeth)
    // console.log(Kangaroo.prototype.teeth)

    // console.log(Array.prototype.toString == Object.prototype.toString)
    // console.log([1, 2].toString())
    // console.log(Object.prototype.toString.call([1, 2]))

    Object.prototype.toString = function() {
        let arr = ""

        this.forEach(e => arr = arr + " " + e)
        arr.trim()

        return arr
    }

    // console.log(Object.prototype.toString.call([1, 2, 3, 4]))

    // 06 the secret life of object > maps
    let ages = {
        Boris: 39,
        Liang: 22,
        Julia: 62
    }

    // console.log(`Julia is ${ages["Julia"]}`)
    // console.log("Is Jack's age known?", "Jack" in ages)
    // console.log("Is toString's age known?", "toString" in ages)

    // console.log("toString" in Object.create(null))

    ages = new Map()

    ages.set("Boris", 39)
    ages.set("Liang", 22)
    ages.set("Julia", 62)
    ages.set(boxingKangaroo, 11)
    // console.log(`Julia is ${ages.get("Julia")}`)
    // console.log("Is Jack's age known?", ages.has("Jack"))
    // console.log(ages.has("toString"))
    // console.log(ages.get(boxingKangaroo))

    // console.log({x: 1}.hasOwnProperty("x"))
    // console.log({x: 1}.hasOwnProperty("toString"))

    // 06 the secret life of object > polymorphism
    Kangaroo.prototype.toString = function() {
        return `a ${this.type} kangaroo`
    }

    // console.log(String(boxingKangaroo))

    // 06 the secret life of object > symbols
    let sym = Symbol("name")

    // console.log(sym == Symbol("name"))
    Kangaroo.prototype[sym] = 55
    // console.log(boxingKangaroo[sym])

    const toStringSymbol = Symbol("toString")

    Array.prototype[toStringSymbol] = function() {
        return `${this.length} cm of blue yarn`
    }

    // console.log([1, 2].toString())
    // console.log([1, 2][toStringSymbol]())

    let stringObject = {
        [toStringSymbol]() {
            return "a jute rope"
        }
    }

    // console.log(stringObject[toStringSymbol]())

    // 06 the secret life of object > the iterator interface
    let okIterator = "OK" [Symbol.iterator]()

    // console.log(okIterator.next())
    // console.log(okIterator.next())
    // console.log(okIterator.next())
    // console.log(okIterator.next())

    class Matrix {

        constructor(width, height, element = (x, y) => undefined) {
            this.content = []

            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    this.content[i * width + j] = element(x, y)
                }
            }
        }

        get(i, j) {
            return this.content[i * this.width + j]
        }

        set(i, j, value) {
            return this.content[i * this.width + j] = value
        }

    }

    // 06 the secret life of object > getters, setters, and statics
    let varyingSize = {

        get size() {
            return Math.floor(Math.random() * 100)
        }

    }

    // console.log(varyingSize.size)
    // console.log(varyingSize.size)

    class Temperature {

        constructor(celcius) {
            this.celcius = celcius
        }

        get fahrenheit() {
            return this.celcius * 1.8 + 32
        }

        set fahrenheit(value) {
            this.celcius = (value - 32) / 1.8
        }

        static fromFahrenheit(value) {
            return new Temperature((value - 32) / 1.8)
        }

    }

    let temp = new Temperature(22)

    // console.log(temp.fahrenheit)
    temp.fahrenheit = 68
    // console.log(temp.celcius)
    // console.log(Temperature.fromFahrenheit(100).fahrenheit)

    // 06 the secret life of object > summary
    // console.log(temp instanceof Temperature)

    // 06 the secret life of object > exercises > a vector type
    class Vec {

        constructor(x, y) {
            this.x = x
            this.y = y
        }

        get length() {
            return Math.sqrt((this.x * this.x) + (this.y * this.y))
        }

    }

    Vec.prototype.plus = function(v) {
        let sum = []

        if (v instanceof Vec) {
            sum[0] = this.x + v.x
            sum[1] = this.y + v.y
        }

        return sum
    }

    Vec.prototype.minus = function(v) {
        let diff = []

        if (v instanceof Vec) {
            diff[0] = this.x + v.x * -1
            diff[1] = this.y + v.y * -1
        }

        return diff
    }

    let v1 = new Vec(3, 4)
    let v2 = new Vec(5, -1)

    // console.log(v1.plus(v2))
    // console.log(v1.minus(v2))
    // console.log(v1.length)

    // 06 the secret life of object > exercises > groups
    let set1 = new Set([1, 2, 3, 4, 5])

    // console.log(set1.has(1))
    // console.log(set1)
    // console.log(set1.size)

    class Group {

        constructor() {
            this.group = []
        }

        add(e) {
            if (!this.has(e)) {
                this.group.push(e)
            }
        }

        delete(e) {
            if (!this.has(e)) {
                return
            }

            let index = this.group.indexOf(e)

            return this.group.splice(index, 1)
        }

        has(e) {
            return 0 <= this.group.indexOf(e)
        }

        static from(iter) {
            if (Array.prototype != Object.getPrototypeOf(iter)) {
                return
            }

            let group = []

            iter.forEach(elm => {
                group.push(elm)
            })

            return group
        }

    }

    let group1 = new Group()

    group1.add(1)
    group1.add(1)
    group1.add(2)
    group1.add(3)
    group1.add(4)

    // console.log(group1.group)
    // console.log(Group.from([5, 6, 7, 8]))

    // 06 the secret life of object > exercises > iterable groups

    // 06 the secret life of object > exercises > borrowing a method
}
