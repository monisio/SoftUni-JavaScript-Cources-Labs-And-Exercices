function extensibleObject() {

    let object = {};

    object.extend = function (template) {
        for (const templateKey in template) {
             if(typeof template[templateKey]!== "function"){
                 this[templateKey]=template[templateKey];
             }else{
                 Object.getPrototypeOf(object)[templateKey] = template[templateKey];
                 //alternative way -->  this.__proto__[templateKey]=template[templateKey];
             }

        }
    }

    return object;
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
}
myObj.extend(template);
