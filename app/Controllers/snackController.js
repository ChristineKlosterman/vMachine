import { ProxyState } from "../AppState.js";
import { snacks } from "../Models/Snack.js";
import { snackService } from "../Services/snackService.js";

// private parts

function _drawSnacks() {
    let snacks = ProxyState.snacks;
    console.log('drawing snacks', snacks);
    let template = ''
    snacks.forEach(s => template += s.Template)

    document.getElementById('snaccc').innerHTML = template

}

function _drawTotal() {
    // let total = ProxyState.snacks;
    document.getElementById('total').innerHTML = ProxyState.total
    // snacks.find(snacks.price)
}



export class snackController {
    constructor() {
        _drawSnacks()
    }
    // public 

    addQuarter() {
        snackService.acceptCoin()
        _drawTotal()
    }
}