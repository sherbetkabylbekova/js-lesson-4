// чтобы получить длину массива
// let array = [2, 43, 43,56,87,5,3]
// console.log(array[array.length - 1])
//
//
// // чтобы заменить или добавить новый элемент
// let array1 = []
// array1[0] = 'dima'
// array1[0] = 'misha'
// console.log(array1)
// console.log(array1.length)

//
// способы сложения массивов
//     ... SPREAD ОЗНАЧАЕТ Скопировать ВСЕ СОДЕРЖИМОЕ В СКОБКАХ

// let array1 = [32, 34, 65]
// let array2 = [22, 44, 66]
// let result = array1.concat((array2))
// let result1 = [...array1, ...array2]
// console.log(result)
// console.log(result1)


// сравниваются не значение, а ссылка на область памяти (расположения адрес)
// let array1 = [100]
// let array2 = [200]
//
// console.log(array1===array2)false
// console.log(typeof array1)object




// const нельзя переопределять, а можно изменить, измениние массива без смены адреса называетя мутация
// const array = [100, 200, 300]
// array[0] = 999
// console.log( array )



// function declaration
// function sum(a, b){(параметры)
//     return a + b
// }
// console.log(sum (5, 15))(аргументы)
// console.log(sum (5, 25))



// arrow function стрелковые функции всегда пишется с const
// const sum = (a, b) => {
//     return a + b
// }
// const sum = (a, b) => a + b(сокращенный вариант)
// console.log(sum(5, 15))
// console.log(sum(5, 25))

// function square (num){
//     return num * num
// }
// const  square = num => num * num
// console.log( square(20))





// есть function declaration и arrow function
// первую можно вызывать до и после обьявления

// тернарное выражение
// const task1 = a => a === 10 ? 'verno' : 'neverno'
// console.log(task1(5))


// const task2 = (a, b) => a > b ? `${a} bolshe ${b}` : `${a} menshe ${b}` "
// console.log(task2(7,6))

//
// function task3(a) {
//     if (a > 0) {
//         return "positive"
//     } else if (a === 0) {
//         return "равно"
//     }
//     return "negative"
// }
//
// console.log(task3(0))
//
//
// // const task3 = a => a > 0 ? "negative" :  a < 0 "positive"
// // console.log(task3(25))
//
//
// const task4 = number => num % 2 === 0 ? "chetnoe" : "nechetnoe"
// console.log(task3(46))


// умножение массива
// let array = [20, 30, 40]
// array[0] = array[0] * 2
// array[1] = array[1] * 2
// array[2] = array[2] * 2
// console.log(array)



// с помощью "map" перебирает исхожный массив и создает новый с таки же количеством элементов, записыввается =>

// let array =  [20, 30, 40]
// let result = array.map(item => item * 2)
// console.log (result)
//
//
// let array1 =  ["vanya", "kolya", "denis"]
// let result2 = array1.map(item => item.toUpperCase())
// console.log (result2)
//
// let array2 =  ["vanya", "kolya", "denis"]
// let result3 = array2.map(item => item.length)
// console.log (result3)


// filter перебирает исхожный массив и возвращает новый массив с элементами, которые подходят по условиям
// let array =  [20, 30, 40, 52, 66, 85,88]
// let result = array.filter(item => item < 60)    [ 20, 30, 40, 52 ]
// console.log(result)


// let array2 =  ["vanya", "kolya", "denis", "medetkhan"]
// let result3 = array2.filter(item => item.length < 6)
// console.log (result3)











