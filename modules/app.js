//import method index dan store
const {index, store} = require("./fruitsController.js");

const main = () => {
    index();
    store("Anggur");
};

main();