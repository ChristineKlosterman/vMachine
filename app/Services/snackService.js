import { ProxyState } from "../AppState.js";

class SnackService {
    acceptCoin() {
        // it always accepts every is always a quarter
        ProxyState.total += .25
    }
}

export const snackService = new SnackService()