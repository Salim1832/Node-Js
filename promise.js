function download(){
    return new Promise(function(resolve, reject) {
        const status = true;
    
        setTimeout(() => {
            
        if (status) {
            resolve("Download Selesai");
        }else{
            reject("Download Gagal");
        }
        }, 5000);
    });

}

download()
.then(function(result) {
    console.log(result);
})
.catch(function(result){
    console.log(result);
});