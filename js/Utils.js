"use strict";
class Utils {
    constructor() {
    }
    getById(id) {
        let elem = document.getElementById(id);
        if (elem == null)
            console.log(`Element with id ${id} is null.`);
        return elem;
    }
    debug(str) {
        console.log(str);
    }
}
//# sourceMappingURL=Utils.js.map