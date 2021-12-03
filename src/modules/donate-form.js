export default class DonateForm {
    #form
    constructor() {
        this.#form = document.createElement('form')
            this.#form.classList.add('donate-form')
    }
    render() {
        const donateTotalAmount = document.createElement('h1')
            donateTotalAmount.setAttribute('id', 'total-amount')
            donateTotalAmount.innerText = '28$'
        const donateFormInputLabel = document.createElement('label')
            donateFormInputLabel.classList.add('donate-form__input-label')
            donateFormInputLabel.innerText = 'Введите сумму в $'
        const donateFormInput = document.createElement('input')
            donateFormInput.classList.add('donate-form__input-input')
            donateFormInput.name = 'amount'
            donateFormInput.type = 'number'
            donateFormInput.max = '100'
            donateFormInput.min = '1'
            donateFormInput.required = ''
        const donateFormButton = document.createElement('button')
            donateFormButton.classList.add('donate-form__submit-button')
            donateFormButton.type = 'submit'
            donateFormButton.innerText = 'Задонатить'

        donateFormInputLabel.append(donateFormInput)

        this.#form.append(donateTotalAmount, donateFormInputLabel, donateFormButton)

        return this.#form
    }
}