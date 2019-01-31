class HelloWorld {

    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName; 
        this.lastName =  lastName; 

    }


    sayHello() {
            console.log('Hello world! ' + 'My name is ' + this.firstName + ' ' + this.lastName);
    }
}

const myhelloClassInstance = new HelloWorld ('Billy', 'Moua'); 
myhelloClassInstance.sayHello(); 