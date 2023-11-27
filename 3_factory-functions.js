// ############################################################################
// ----------------------------------------------------------------------------
// Step - 1: Object creation with factory functions and and method declaration
// ----------------------------------------------------------------------------
// ############################################################################

/*
const Human = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`I'm ${firstName}`)
    },
    myFriend(friend) {
      console.log(`I'm ${firstName} and firends with ${friend.firstName}`)
    },
  }
}

const mohsin = Human('Mohsin', 'Ali')
const chan = Human('Chan', 'Zaib')

console.log(mohsin.sayHello())
console.log(mohsin.myFriend(chan))
*/

// ##############################
// ------------------------------
// Step - 2: Inheritance
// ------------------------------
// ##############################

// In JavaScript, Inheritance is: where you get properties and methods from the parent blueprint.

/*
function Human(firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hello, I'm ${firstName}`)
    },
  }
}

// Now we are going to create a developer function which inherits from the Human

function Developer(firstName, lastName) {
  const human = Human(firstName, lastName)
  return Object.assign({}, human, {
    // Properties and methods go here
    code(thing) {
      console.log(`${human.firstName} coded ${thing}`)
    },
    sayHello() {
      human.sayHello()
      console.log(
        'This hello is from the developer. After overiding the sayHello method of the parent.'
      )
    },
  })
}

const mohsin = Developer('Mohsin', 'Ali')
console.log(mohsin.sayHello())
console.log(mohsin.code('myShop'))
*/

// #######################################################
// -------------------------------------------------------
// Step - 3: Composition - As alternative to Inheritance
// -------------------------------------------------------
// #######################################################

// Now we are going to use the composition which is also a good alternative to the inheritance. Sometimes it is said that we should always try to use the composition instead of inheritance

/*
const skills = {
  code(thing) {
    console.log(`I coded ${thing}`)
  },
  design(thing) {
    console.log(`I designed ${thing}`)
  },
  sayHello() {
    console.log(`Hello I'm ${firstName}`)
  },
}

function Human(firstName, lastName) {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hello I'm ${firstName}`)
    },
  }
}

function Developer() {
  const human = Human(firstName, lastName)

  return Object.assign({}, human, {
    code: skills.code,
  })
}

function Designer() {
  const human = Human(firstName, lastName)

  return Object.assign({}, human, {
    design: skills.design,
  })
}

function DesignerDeveloper(firstName, lastName) {
  const human = Human(firstName, lastName)

  return Object.assign({}, human, {
    code: skills.code,
    design: skills.design,
  })
}

const mohsin = DesignerDeveloper('Mohsin', 'Ali')
console.log(mohsin.design('Asaami'))
*/

// #######################
// -----------------------
// Step - 3: Encapsulation
//------------------------
// #######################
/*
function Car() {
  const fuel = 50
}
const car = Car()
console.log(car.fuel) // Error
console.log(fuel) // Error

// Now we can create getter and setter variable to use this private fuel variable
function Car() {
  let fuel = 50

  return {
    get fuel() {
      return fuel
    },

    set fuel(value) {
      value > 100 ? (fuel = 100) : (fuel = value)
    },
  }
}

const car = Car()
console.log(car.fuel) // outputs - 50
car.fuel = 3000
console.log(car.fuel)
*/

// ############################################
// --------------------------------------------
// Building a counter using factory functions
// --------------------------------------------
// ############################################

function Counter(counterElement) {
  const countElement = counterElement.querySelector('span')
  const buttonElement = counterElement.querySelector('button')
  let count = parseInt(countElement.textContent) || 0

  const counter = {
    updateCount() {
      countElement.textContent = count
    },

    increseCount() {
      count = count + 1
      counter.updateCount()
    },
  }

  buttonElement.addEventListener('click', counter.increseCount)
}

Counter(document.querySelector('.counter'))
