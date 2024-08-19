// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'hello world'

// 변수 선언
// var myVariable
// 값 할당
// myVariable = 10
// 출력
// console.log(myVariable)

// ES6 이전(최근에는 거의 사용하지 않는다)
var myV1 = 1

// 변경가능
let myV2 = 2
// 불변 => 상수
const myV3 = 3

var myV1 = 10
myV1 = 20

// 재선언 x
// let myV2 = 20
// 재할당 가능
myV2 = 20

// 재선언 x
// const myV3 = 30
// 재할당 x 
// myV3 = 30

let a = 'bob'
let b = 10
let c = true
let d = [1, 2, 3, 4, 5]
let e = {
    'a':10,
}

d.push(10) //list.append 기능(python)
// console.log(d)

e.name = 'kim'
e.location = 'seoul'
// console.log(e)

let myVarA = '10'
let myVarB = 10

// console.log(myVarA == myVarB)
// console.log(myVarA === myVarB)

// 조건문

// let iceCream = 'vanila'
// if (iceCream === 'chocolate') {
//     console.log('i love choco')
// } else if (iceCream === 'vanila') {
//     console.log('vanila')
// } else {
//     console.log(':(')
// }

// 반복문
// console.log('while')
// let i = 0
// while (i < 5) {
//     console.log(i)
//     // i += 1(python)에 해당되는 코드
//     i++
// }

// console.log('for1')
// for (let i=0 ; i<5 ; i++) {
//     console.log(i)
// }

// console.log('for')
// let myArray = [1, 2, 3, 4, 5]
// for (let i=0 ; i<myArray.length ; i++) {
//     console.log(myArray[i])
// }

// console.log('for in')
// for (let item in myArray) {
//     console.log(item, myArray[item])
// }

// console.log('for of')
// for (let item of myArray) {
//     console.log(item)
// }

// console.log('forEach')
// myArray.forEach( function(item, index, array){
//     console.log(item, index, array)
// } )

// 함수
// def func():

function multiply1(num1, num2) {
    let result = num1 * num2
    return result
}

// console.log(multiply1(2, 3))
// console.log(multiply1(5, 6))

// 함수표현식
let multiply2 = function(num1, num2){
    let result = num1 * num2
    return result
}

console.log(multiply2(2, 3))

// 화살표함수
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}
console.log(multiply3(3, 4))

// 화살표함수 생략1
// {}안에 코드가 return하는 문장 하나만 있는 경우
// {}, return 생략 가능

let multiply4 = (num1, num2) => num1 * num2

console.log(multiply4(4, 8))

// 화살표함수 생략2
// ()안에 매개변수가 하나만 있다면 ()를 생략가능

let multiply5 = num => num * 2

console.log(multiply5(5))



let p1 = {
    'name': 'kim',
    'greeting': function(){console.log(this)}
}

let p2 = {
    'name': 'hong',
    'greeting': ()=>{console.log(this)}
}

// p1.greeting()
// p2.greeting()

// // 이벤트
// document.querySelector('html').onclick = function(){
//     alert('ouch!!!')
//     console.log('hello')
// }

let myH1 = document.querySelector('h1')
// addEventListener(무슨 일이 일어 났을 때, 무슨 행동을 할지)
myH1.addEventListener('click', function(e){
    console.log('hello')
    console.log(e)
    console.log(e.target)
})

let myImage = document.querySelector('img')
myImage.addEventListener('click', function(e){
    let src = myImage.getAttribute('src')

    if (src==='images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/meal.jpg')
    } else {
        myImage.setAttribute('src', 'images/firefox-con.png')
    }
})


// 비동기1 (promise)
// console.log('hi')
// setTimeout(function(){console.log('1234')}, 1000)
// console.log('bye')

// const URL = 'https://jsonplaceholder.typicode.com/todos/1'
// fetch(URL)
//     .then(response => response.json())
//     .then(json => console.log(json))

// console.log('after fetch')

// 비동기2 (async await)
// async function fetchAndPrint(){
//     let res = await fetch(URL)
//     let result = await res.json()

//     console.log(result)
// }
// fetchAndPrint()


let liList = document.querySelectorAll('li')

liList.forEach(function(li){
    li.style.color = 'red'
    li.style.backgroundColor = 'green'
})


liList.forEach(function(li){
    li.addEventListener('click', function(e){
        console.log(e.target)
    })
})