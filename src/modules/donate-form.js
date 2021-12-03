export default class DonateForm {
    constructor() {
    }

    render() {
        const donateForm = document.createElement('form')
        donateForm.classList.add('donate-form')
        const donateTotalAmount = document.createElement('h1')
        donateForm.setAttribute('id', 'total-amount')
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
        donateForm.append(donateTotalAmount, donateFormInputLabel, donateFormButton)

        return  donateForm
    }
}