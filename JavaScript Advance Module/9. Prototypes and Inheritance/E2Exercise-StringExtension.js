(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        } else {
            return str + this;
        }
    }
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        } else {
            return this + str;
        }
    }

    String.prototype.isEmpty = function () {
        return this === "";
    }

    String.prototype.truncate = function (n) {
        let result = "";
        if (n < 4) {
            for (let i = 0; i < n; i++) {
                result = result + ".";
            }
        } else if (n > this.length) {
            result = this.toString();
        } else if (n < this.length) {
            let indexOfLastSpace = this.lastIndexOf(" ");
            if(indexOfLastSpace<0){
                for (let i = 0; i < n-3; i++) {
                    result += this.charAt(i);
                }
                result+= "..."
            }else {
                result = this.substr(0,indexOfLastSpace ) + "...";
                result = result.substr(0,n<=result.length? n:result.length);
            }
        } else {
            result = this.substr(0, n) + "..."

        }
        return result;
    }

    String.format = function (string, ...params) {
        let result = string.match(/\d/g);
        result.forEach(num => string = string.replace(`{${num}}`, params[num] ? params[num] : `{${num}}`));
        return string;

    }
})();


/*•	ensureStart(str) – the current string doesn't start with str, returns a new string with str appended  to the begining, otherwise returns the original string
•	ensureEnd(str) - the current string doesn't end with str, returns a new string with str appended  to the begining, otherwise returns the original string
•	isEmpty() - return true if the string is empty, false otherwise
•	truncate(n) – returns the string truncated to n characters
by removing words and appends an ellipsis (three periods) to the end.
If a string is less than n characters long, return the same string.
If it is longer, split the string where a space occurs and append an ellipsis to it
so that the total length is less than or equal to n. If no space occurs anywhere in the string,
return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.
•	format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods are attached to the String object instead of it’s prototype. See the examples for more info.
*/


let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)

str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);