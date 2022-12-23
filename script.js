console.log('Exercise 5 Solution');

let a = [
    "Initializing Hack Tool...",
    "Searching for device please wait....",
    "Connecting to server0.023",
    "Connection failed. Retrying....",
    "Connection established",
    "fetched username please wait....",
    "Trying Brute Force",
    "213K Password tried....",
    "Match not found",
    "384K Password tried...",
    "Match not found",
    "Match found in 423K",
    "Accessing Account detalis",
    "Hack Successful",
    "Do not fear, just close the tab Now",
    "You are responsible for all this",
    "Haaaaa Haaaa Haaa",
    "Kesa laga mera Mazaak",
    "But, doesn't mean that's not true",
]
let c = "Alert Close the tab Within  Seconds, before the setup is complete;;; code:<000:453/588:300.434/>";

let b = "To the 'World of Hecking'<br>";


const secondWarn = async ()=>{
    setTimeout(() => {
        // tab.innerHTML = tab.innerHTML + c
        alert(c)
    },7000 );
}
secondWarn();

const warn =()=>{
  
    // alrt.innerHTML = alrt.innerHTML + b
    setTimeout(() => {
        alrt.innerHTML = alrt.innerHTML + b
    }, 2000);
}
warn();

const sleep = async (seconds)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(true)
        }, seconds*4000);
    })
}

const showHack = async (message)=>{
    await sleep(2)
    console.log(message);
    tex.innerHTML = tex.innerHTML + message + "<br>"
}

(async ()=>{
    for(let i=0; i<a.length; i++){
      await showHack(a[i])
    }
    
})()
