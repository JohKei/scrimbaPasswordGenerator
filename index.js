
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let characterCount=15
function generatePassword(){
    let passwordOne=""
    let passwordTwo=""
    let character= characters[Math.floor(Math.random()*characters.length)]
    for (i=0; i<characterCount; i++){        
        passwordOne += characters[Math.floor(Math.random()*characters.length)]
    }
    for (i=0; i<characterCount; i++){        
        passwordTwo += characters[Math.floor(Math.random()*characters.length)]
    }
    document.getElementById("passwordOne").textContent=passwordOne
    document.getElementById("passwordTwo").textContent=passwordTwo
}

