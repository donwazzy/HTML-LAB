// get the day and year on the footer
const footer = document.getElementById("gettingdate");
const today = new Date();
const fullDate = today.toLocaleDateString('en-US', {
    weekday: 'long',   
    year: 'numeric',   
    month: 'long',     
    day: 'numeric'     
});
footer.innerHTML = `(c) Divine Okpala, ${today.getFullYear()} - Today's date is ${fullDate}`;
console.log("Today's Date: " + fullDate);





// Show greetings base on time
const showGreeting = document.getElementById("greeting");
const day = new Date().getHours();
if (day < 12) {
    showGreeting.innerHTML = "Good morning!";
    showGreeting.classList.add("morning");
} else if (day < 17) {
    showGreeting.innerHTML = "Good afternoon!";
    showGreeting.classList.add("afternoon");
} else {
    showGreeting.innerHTML = "Good evening!";
    showGreeting.classList.add("evening");
}




// show alert
document.getElementById("btn-alert").addEventListener("click", function() {
    alert("Hello world!");
});

// change text when hovered
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("mouseover", function() {
    alertButton.innerText = "I knew you were about to click me!";
});
alertButton.addEventListener("mouseout", function() {
    alertButton.innerText = "Alert Button";
});




// creating ordered list
const orderedList = document.getElementById("numbers");
for (let i = 1; i <= 12; i++) {
    const list = document.createElement("li");
    if (i % 2 === 0) {
        list.textContent = "Even";
    } else {
        list.textContent = "Odd";
    }
    orderedList.appendChild(list);
}




