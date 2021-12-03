import {Settings} from '../core/constants/settings'

export default class DonateList {
    #donatesArray
    #donateListContainer
    #donateListTitle
    #donateListItems

    constructor(array) {
        this.#donateListContainer = document.createElement('div')
        this.#donateListContainer.classList.add('donates-container')
        this.#donateListTitle = document.createElement('div')
        this.#donateListTitle.classList.add('donates-container__title')
        this.#donateListItems = document.createElement('div')
        this.#donateListItems.classList.add('donates-container__donates')

        this.#donatesArray = array
    }

    #createDonateItemList(array, selector) {
        array.map(item => selector.innerHTML += `<div class="donate-item">${item.date} - <b>${item.amount}${Settings.currency}</b></div>`)
    }

    updateDonates(updatedDonates) {
        this.#donateListItems.innerHTML = ''
        this.#createDonateItemList(updatedDonates, this.#donateListItems)
    }

    render() {
        this.#donateListTitle.innerText = 'Список донатов'
        this.#createDonateItemList(this.#donatesArray, this.#donateListItems)
        this.#donateListContainer.append(this.#donateListTitle, this.#donateListItems)
        return this.#donateListContainer
    }

}
//
// <div class="donates-container">
//     <h2 class="donates-container__title">Список донатов</h2>
//     <div class="donates-container__donates">
//         <div class="donate-item">July 6th 2021, 10:28:49 am - <b>4$</b></div>
//         <div class="donate-item">July 6th 2021, 10:28:49 am - <b>20$</b></div>
//         <div class="donate-item">July 6th 2021, 10:28:49 am - <b>3$</b></div>
//         <div class="donate-item">July 6th 2021, 10:28:49 am - <b>1$</b></div>
//     </div>
// </div>