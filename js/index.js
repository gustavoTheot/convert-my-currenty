const convert = document.querySelector('.convert')
const viewConvert = document.querySelector('.viewConvert')


const firstCurrenty = document.querySelector('.selectionMyCurrency')
const secondCurrenty = document.querySelector('.selectionConvertCurrency')

const display = document.querySelector('.display')


const currenty = document.querySelector('.inputMyCurrency')
const currentyNumber = Number(currenty)


/**
 * criar uma variavel para o primeiro valor
 * criar uma variavel para o segundo valor
 */
let firstValue = 'BRL'
let secondValue = 'BRL'

/*
 * ouvir o primeiro select
 *  adicionar o valor ouvido na variável do primeiro valor
 */

firstCurrenty.addEventListener('change', () => {
    if(firstCurrenty.options[firstCurrenty.selectedIndex].value == 'BRL'){
        firstValue = 'BRL'
    }
    else if(firstCurrenty.options[firstCurrenty.selectedIndex].value == 'EUR'){
        firstValue = 'EUR'
    }
    else if(firstCurrenty.options[firstCurrenty.selectedIndex].value == 'USD'){
        firstValue = 'USD'
    }
})

secondCurrenty.addEventListener('change', () => {
    if(secondCurrenty.options[secondCurrenty.selectedIndex].value == 'BRL'){
        secondValue = 'BRL'
    }
    else if(secondCurrenty.options[secondCurrenty.selectedIndex].value == 'EUR'){
        secondValue = 'EUR'
    }
    else if(secondCurrenty.options[secondCurrenty.selectedIndex].value == 'USD'){
        secondValue = 'USD'
    }
})

function convertMyCurrenty(e){
    const currentyNumber = Number(currenty.value)
    e.preventDefault()


    if(firstValue == 'BRL' && secondValue == 'EUR'){ 
        calc = currentyNumber * (0.19)
    }
    else if(firstValue == 'BRL' && secondValue == 'USD'){
        calc = currentyNumber * (0.19)
    }
    else if(firstValue == 'EUR' && secondValue == 'BRL'){
        calc = currentyNumber * (5.36)
    }
    else if(firstValue == 'EUR' && secondValue == 'USD'){
        calc = currentyNumber * (1.02)
    }
    else if(firstValue == 'USD' && secondValue == 'BRL'){
        calc = currentyNumber * (5.28)
    }
    else if(firstValue == 'USD' && secondValue == 'EUR'){
        calc = currentyNumber * (0.98)
    }

    calcFixed = calc.toFixed(2)
    display.value = calcFixed

}

convert.addEventListener('click', convertMyCurrenty) 






/*
 * ouvir o segundo select
 *  adicionar o valor ouvido na variável do primeiro valor
 * 
 */






