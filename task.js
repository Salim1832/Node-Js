function showDownload(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("Dowload Selesai");
        }, 3000);
    })
}

function download(result) {
    return new Promise(function(resolve, reject){
        console.log("Hasil Download: " + result);
    })
}

async function main(){
    console.log(await showDownload());
    console.log(await download("windows-10.exe"));
}

main();