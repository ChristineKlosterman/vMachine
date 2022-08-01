

export class snacks {

    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
    }



    get Template() {
        return `<div class="col-6">
        <div id="app" class=" bg-warning m-2 bg-secondary" style="width: 15em;"><img class=" card-img-top"
        style="height: 20em; width: 15em;"
        src="${this.img}">
        <div class="card-body">
        <p class="card-text">${this.name}, ${this.price}</p>
        </div>`
    }

    get BuyTemplate() {
        return
        `<div> class="col-6"
        <div class="bg-light" m-2">Total</div></div> >`
    }

}