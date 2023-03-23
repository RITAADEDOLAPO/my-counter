let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el") 

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    if (count > 0){count--}
    countEl.textContent = count
}

function save() {
    let saveCount = count + " - "
    saveEl.textContent += saveCount
    console.log(count)
}

function reset() {
    count = 0;
    countEl.textContent = count
}


