var $ = require('jquery');
import Person from './modules/Person'

class Adult extends Person {
    payTaxes(){
        console.log(this.name + ' now owes $0 in taxes.');
        
    }
}
var john = new Person("John Davis", "green");
john.greet();

var angel = new Adult("Angel Mendez", "green");
angel.greet();

angel.payTaxes();

$("h1").remove();
