// Simple concept
const food = 'Hamburger'

{
  console.log(food)
  const drink = 'Coca Cola'
}

console.log(drink) // Error

// Scope with Function
const drink = 'Coca Cola'

function sayFood() {
  return (food = 'Hamburger'), console.log(drink)
}

sayFood()
console.log(food) // Error

// Closures
// Advanced form of Encapsulation - basically functions wrapped in functions

function outsideFunction() {
  const food = 'Hamburger'
  console.log('Called outside')

  return function insideFunction() {
    console.log('Called inside')
    console.log(food)
  }
}

// Calls 'outside function', which returns inside function
// Stores 'inside function', as variable 'fn'
const fn = outsideFunction()

// Calls 'inside function'
fn()
