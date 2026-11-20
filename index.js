let textarea = document.getElementById("textarea");
let totalcounter = document.getElementById("total-counter");
let remainingcounter = document.getElementById("remaining-counter");

textarea.addEventListener("input", function() {
    let total = textarea.value.length;
    totalcounter.textContent = "total count: " + total;
    remainingcounter.textContent = "Remaining count: " + (100 - total);
});