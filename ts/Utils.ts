class Utils {
    constructor() {

    }

    public getById(id: string) {
        let elem = document.getElementById(id);
        if (elem == null)
            console.log(`Element with id ${id} is null.`);
        return elem;
    }

    public debug(str:any){
        console.log(str);
    }
}