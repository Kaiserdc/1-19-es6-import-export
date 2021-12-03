import DonateForm from "./donate-form"

export default class App {
    #DonateForm
    constructor(text) {
        this.text= text
        this.#DonateForm = new DonateForm()
    }
    run() {
      document.body.append(this.#DonateForm.render())
    }
}