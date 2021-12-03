export default class DonateList {
    #donatesArray
    #donateListContainer
    constructor(array) {
        this.#donateListContainer = document.createElement('div')
        this.#donateListContainer.classList.add('donates-container')
        this.#donatesArray = array
    }
    #createDonateItem(item){
        return `<div class="donate-item">${item.date} - <b>${item.amount}</b></div>`
    }
    render() {
        const donateListTitle = document.createElement('div')
        donateListTitle.classList.add('donates-container__title')
        donateListTitle.innerText ='Список донатов'
        const donateListItems = document.createElement('div')
            donateListItems.classList.add('donates-container__donates')
            this.#donatesArray.map( item => {
                console.log(this.#createDonateItem(item))
                donateListItems.innerHTML += this.#createDonateItem(item)
            } )
        this.#donateListContainer.append(donateListTitle, donateListItems)
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