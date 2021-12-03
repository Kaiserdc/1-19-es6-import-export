export default class App {
    constructor(text) {
        this.text= text
    }
    run() {

      document.body.append(this.text)
    }
}