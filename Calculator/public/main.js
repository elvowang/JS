'use strict';

class Calculator {
    constructor(num1, num2, symbol) {
        this.num1 = num1;
        this.num2 = num2;
        this.symbol = symbol;
    }

    plus(){
        console.log(this.num1 + this.num2);
    }

    minus(){
        console.log(this.num1 - this.num2);
    }

    multiple(){
        console.log(this.num1 * this.num2);
    }

    divide(){
        console.log(this.num1 / this.num2);
    }

    command(param) {
        console.log(param);
    }

    calculate() {
        switch (this.symbol) {
            case "+":
                this.plus()
                break;
            case "-":
                this.minus();
                break;
            case "*":
                this.times();
                break;
            case "/":
                this.divide();
                break;
            default:
                console.log("!Error");
        }
    }
/*    plus(...values){
        let sum = 0;

        for (var val of values) {
            sum += val;
        }
        return sum;
    }*/
}


var calculator = new Calculator(2, 1, "-");
calculator.calculate();

