let count = 0;
let total = 0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") 
let totalCount = document.getElementById("number-el")

function increment() {
    count += 1;
    total += 1;
    countEl.innerText = count;
    totalCount.innerText = total;
};

function save() {
    let equation = count + " + ";
    saveEl.textContent += equation;
    countEl.textContent = 0;
    count = 0
}

console.log("Let's count people on the subway!");