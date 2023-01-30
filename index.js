
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
]
const numbers = [ "0", "1", "2", "3", "4",
"5", "6", "7", "8", "9",]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let addNumbers =document.getElementById('add-numbers')
let addSymbols =document.getElementById('add-symbols')




function generatePassword(){
    let passwordOne=""
    let passwordTwo=""
    let merged=characters
    let characterCount=document.getElementById("number-input").value
    if (characterCount<8){
        characterCount=8
    }else if (characterCount>20){
        characterCount=20
    }
    if (addNumbers.checked){
        merged = characters.concat(numbers)
    }  
    if (addSymbols.checked){
        merged = merged.concat(symbols)
    }
    let character= merged[Math.floor(Math.random()*merged.length)]
    for (i=0; i<characterCount; i++){        
        passwordOne += merged[Math.floor(Math.random()*merged.length)]
    }
    for (i=0; i<characterCount; i++){        
        passwordTwo += merged[Math.floor(Math.random()*merged.length)]
    }
    document.getElementById("passwordOne").textContent=passwordOne
    document.getElementById("passwordTwo").textContent=passwordTwo
}

