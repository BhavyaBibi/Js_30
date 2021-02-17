function abc() {
    console.log("inside the  functioin")
}
console.log("console1")
let x = 10;
let y = 20;
console.log("console 2")
setTimeout(() => {
    console.log("set timeout 1")
}0);
console.log("onsole 3")

setTimeout(() => {
    console.log("set timeout 2")
}0);


new Promise((resolve, reject) => {
    resolve();

}).then(() => {
    console.log("inside promise")
})

abc();