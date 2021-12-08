//import fruits

const fruits = require("./data.js");

const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
    index();
};

const update = (position, name) => {
    fruits[position] = name;
    index();
};

const destroy = (position) => {
    fruits.splice([position], 0);
    index();
};


module.exports = {index, store, update, destroy};




