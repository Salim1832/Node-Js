function formatName (nama) {
    const result = nama.toUpperCase();
    return result;
}

function getName(nama, callFormatName) {
    const result = callFormatName(nama);
    console.log(result);
}

getName("salim fawwaz ", formatName);

// Arrow Function
// const formatName = (name) => name.toUpperCase();


// const getName = (name, callFormatName) => console.log(callFormatName(name));


// getName("salim fawwaz ", formatName);