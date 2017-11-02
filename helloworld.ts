/* helloworld.ts */
class Greeter {
    constructor(public message: string) { }
    sayHi() {
        return "<h2>" + this.message + "</h2>";
    }
}

let greeter = new Greeter("Hello, world!");

document.body.innerHTML = greeter.sayHi();
