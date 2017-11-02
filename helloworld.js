var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h2>" + this.message + "</h2>";
    };
    return Greeter;
}());
var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.sayHi();
