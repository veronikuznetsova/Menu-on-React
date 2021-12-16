// import './styles/default.scss';
// import ReactDom from 'react-dom';
// import React from 'react';
// import App from './components/App';
// import { BrowserRouter } from 'react-router-dom';
// import store from './redux';
// import { Provider } from 'react-redux';

// const element = document.querySelector('#root');

// ReactDom.render(
// <BrowserRouter>
// <Provider store={store}>
// <App />
// </Provider>
// </BrowserRouter> 
// , element);


const a1: number = 5;
const a2: string = 'Vera';
const a3: boolean = true;
const a4: undefined = undefined;
const a5: null = null;
const a6: bigint = BigInt(2);
const a7: object = {};
const a8: symbol = Symbol('fff');

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(1, 1));

// const c = Number(prompt('Введите число'));
// const d = +prompt('Введите число');

// console.log(sum(c, d))

const numbers: number[] = [1, 2, 3, 4];
const numbers2: Array<number> = [1, 2, 3, 4];

function arrSum(array: number[]){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
    return sum;
}

console.log(arrSum(numbers));

const touple: [string, number] = ['vero', 24];

function arrTouple(array: number[]): string {
    return array.reduce((a, b) => {
        return a + b
    }, '')
}

console.log(arrTouple(numbers))

enum Colors {
    Red = 5,
    Green,
    Blue
}

console.log(Colors);
console.log(Colors.Blue);

let anytype: any;

anytype = 5;
anytype = 'five';

function aaa(): void {
    console.log(6)
}

interface IUser {
    name: string,
    age: number
}

const veronika: IUser = {
    name: 'Veronika',
    age: 24
}

interface Engine {
    name: string,
    power: number
}

interface Owner {
    readonly name: string,
    age: number
}

interface ICar {
    title?: string,
    engine: Engine,
    owner: Owner
}

const bmv: ICar = {
    // title: 'car',
    engine: {
        name: 'bmv',
        power: 5,
    },
    owner: {
        name: 'bmv',
        age: 15
    }
}

console.log(bmv)

interface ISum {
    (a: number, b: number): number
}

const sum2: ISum= (a, b) => {
    return a + b
}

interface A {
    name: string
}

interface B extends A{
    age: number
}

const c: B = {
    name: 'ver',
    age: 24
}

function getName(name: string): string;
function getName(name: number): number;
function getName(name: any): any {
    if (typeof name == 'string'){
        return name;
    }
    return name
}

// getName('dima');
// getName('dima', 'yankouski');