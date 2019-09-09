export function test() {
    // 02 program structure > functions
    // let input = prompt('Enter a number')

    // console.log(input * input)

    // 02 program structure > conditional execution
    let number = '1';

    if (!isNaN(number)) {
        // console.log('Not a number')
    }

    // 02 program structure > exercises > looping a triangle
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            // console.log('#')
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    let map = new Map()
    let first = 'first'
    let key = {}
    let fun = function() {}
    let roles = {
        'Administrator': 'Administrator',
        'Sysadmin': 'Sysadmin',
        'User': 'User'
    }
    let role = 'Sysadmin'

    map.set(first, 'The one and only')
    map.set(key, 'Hello, World!')
    map.set(fun, 'I\'ll be back')
    // console.log(map.size)
    // console.log(map.get(first) == map.get('first'))
    // console.log(map.get(key) == map.get({})) // undefined, because key !== {}
    // console.log(map.get(fun) == map.get(function() {})) // undefined, because fun !== function() {}
    // console.log(map.has(first))

    // console.log(role == roles[role])
    // console.log('Dentist' == roles['Dentist'])

    // 02 program structure > exercises > fizzbuzz
    let i = 0;
    while (i++ < 100) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}
