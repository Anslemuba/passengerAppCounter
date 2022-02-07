let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
count = 0;
// saveEl.textContent = ""

function increase() {
    count += 5
    countEl.innerText = count
}
function save() {

    // saveEl.textContent += count + ",";
    let record = count + ","
    saveEl.textContent += record
    countEl.textContent = 0
    count = 0
}

console.log(countEl.textContent)

let btn = "tem";
console.log(btn)