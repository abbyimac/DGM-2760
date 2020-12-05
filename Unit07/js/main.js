let message

const pizza = {
    crust: 'thin',
    topping: 'pepperoni',
    size: 'small',
    buildPizza: function () {
        // for testing: console.log('buildPizza method has been called')
        message = `Baking a ${pizza.size} pizza on ${pizza.crust} crust with cheese and ${pizza.topping}, just for you!`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: () => {
        let flour = 2
        if (pizza.crust === 'thick') flour *= 2
        if (pizza.size === 'large') flour *= 1.5
        message = `You will need to purchase ${flour} cups of flour and 1 pound of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = message
    }
}

/* SAME AS BELOW, BUT NOT AS MODERN
let thinButton = document.querySelector('#thin')
thinButton.addEventListener('click', function () {
    return pizza.crust = 'thin'
}) */

//reference html radio buttons and set object properties by returning value
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')


//reference html button and call object method by returning function
document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)