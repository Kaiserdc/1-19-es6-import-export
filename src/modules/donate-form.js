import {Settings as setts} from '../core/constants/settings'

export default class DonateForm {
    #form
    #donateTotalAmount
    #donateFormInputLabel
    #donateFormInput
    #donateFormButton

    constructor(totalAmount, createNewDonate) {
        this.totalAmount = totalAmount
        this.createNewDonate = createNewDonate
        this.#form = document.createElement('form')
        this.#donateTotalAmount = document.createElement('h1')
        this.#donateFormInputLabel = document.createElement('label')
        this.#donateFormInput = document.createElement('input')
        this.#donateFormButton = document.createElement('button')

        this.#form.addEventListener('submit', event => {
            event.preventDefault()
            if (this.#donateFormInput.value && this.#donateFormInput.value > 0) {
                let amount = this.#donateFormInput.value
                let date = new Date()
                this.createNewDonate(amount, date)
                this.#donateFormInput.value = ''
            }
        })
    }

    updateTotalAmount(newAmount) {
        return this.#donateTotalAmount.innerHTML = `${newAmount}${setts.currency}`
    }

    render() {

        // Form Proprites
        this.#form.className = 'donate-form'

        // Title
        this.#donateTotalAmount.id = 'total-amount'

        // Input Proprites
        this.#donateFormInput.className = 'donate-form__input-input'
        this.#donateFormInput.name = 'amount'
        this.#donateFormInput.type = 'number'
        this.#donateFormInput.max = '100'
        this.#donateFormInput.min = '1'
        this.#donateFormInput.required = ''

        // Label Proprites
        this.#donateFormInputLabel.className = 'donate-form__input-label'
        this.#donateFormInputLabel.innerText = `Введите сумму в ${setts.currency}`
        this.#donateFormInputLabel.append(this.#donateFormInput)

        // Button Proprites
        this.#donateFormButton.className = 'donate-form__submit-button'
        this.#donateFormButton.type = 'submit'
        this.#donateFormButton.innerText = 'Задонатить'

        //Render
        this.updateTotalAmount(this.totalAmount)
        this.#form.append(this.#donateTotalAmount, this.#donateFormInputLabel, this.#donateFormButton)
        return this.#form
    }

}
