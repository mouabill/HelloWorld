var HelloWorld = (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello world! ' + 'My name is ' + this.firstName + ' ' + this.lastName);
    };
    return HelloWorld;
})();
var myhelloClassInstance = new HelloWorld('Billy', 'Moua');
myhelloClassInstance.sayHello();
