function calculator() {


    return {

        init(selector1, selector2, resultSelector) {
            this.selector1 = document.querySelector(selector1);
            this.selector2 = document.querySelector(selector2);
            this.result = document.querySelector(resultSelector);
        },

        add() {
            this.result.value = Number(this.selector1.value) + Number(this.selector2.value);
            this.clean();
        },

        subtract() {
            this.result.value = Number(this.selector1.value) - Number(this.selector2.value);
            this.clean();
        },

        clean() {
            this.selector1.value = "";
            this.selector2.value = "";
        }
    }

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
