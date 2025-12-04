/* -------------------------------------------------------------------------- */
/*                                  OPERATORS                                 */
/* -------------------------------------------------------------------------- */

//!Arithmethic Operators

let a=10
let b=2

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**6) // üs alma işlemi
console.log(a % 2) // remainder (modules) kalanı bulma


let result=365/6
console.log(result)
console.log(Math.trunc(result))
console.log(result.toFixed(2))
console.log(typeof result.toFixed(3))

// saat ve dakika bulma
let time=375

let hour=Math.trunc(time/60)
console.log(hour)

let minute=375 % 60
console.log(`375 dakika=> ${hour}:${minute}`)

// INCREMENT  / DECREMENT

//post ve pre olaraka adlandırılır

//Post increment -decrement
let x=5

console.log(x++)
console.log(x)  //6

console.log(x--) // 6 yı yazdı bir azalttı

console.log(x) // 5

//Pre Increment - decrement
console.log(++x) 
console.log(--x)

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                            ASSIGNMENT OPERATORS                            */
/* -------------------------------------------------------------------------- */

let t=10
let y=5

console.log(t)
console.log(y)

console.log(t=t+y)
console.log(t+=y)
console.log(t-=y)
console.log(t*=y)
console.log(t/=y)
console.log(t**=y)
console.log(t%=y)

let k=18
let h=3
console.log(h +=k)

let sayi=45.986
console.log(Math.trunc(sayi))
console.log(sayi)


