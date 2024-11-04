const charactersLimit = 150;
let message = prompt("Enter Your Message");
let characterswritten = message.length;
let charactersremaining = charactersLimit - characterswritten;
document.write(`<b>Characters Limit:150<br>Characters written: ${characterswritten} <br> Characters remaining: ${charactersremaining}`);
