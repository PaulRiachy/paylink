// all the js code are taken from bootstrap
// heda script lal navbar menu for mobile devices
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// heda script to close l navbar when you click outside of it
document.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav-links');
    const menuButton = document.querySelector('.menu-toggle');

    // eza click outside l navbar
    // navbar will close
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// heda script lal scroll arrow bel home page
function scrollToContent() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

// heda script to clear l input filed lma y3mlo refresh l page w tkoun l checkbox unchecked
document.addEventListener("DOMContentLoaded", function () {
    // Clear all input fields when the page loads
    document.querySelectorAll("input").forEach(input => {
        if (input.type !== "checkbox") {
            input.value = "";
        } else {
            input.checked = false; // tkoun l checkbox unchecked
        }
    });
});

// heda script lal toggle password visibility bel signup.html
function togglePassword(id) {
    let passwordField = document.getElementById(id);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// heda script lal signup.html (show sign in form)
function showSignIn() {
    document.getElementById("sign-up-form").classList.add("hidden");
    document.getElementById("sign-in-form").classList.remove("hidden");
    document.querySelector(".toggle-btn.active").classList.remove("active");
    document.querySelectorAll(".toggle-btn")[1].classList.add("active");
    clearMessages();
}

// heda script lal signup.html (show sign up form)
function showSignUp() {
    document.getElementById("sign-in-form").classList.add("hidden");
    document.getElementById("sign-up-form").classList.remove("hidden");
    document.querySelector(".toggle-btn.active").classList.remove("active");
    document.querySelectorAll(".toggle-btn")[0].classList.add("active");
    clearMessages();
}

// heda examples users
let users = [
    { username: "Joe", email: "me@joe50097.is-a.dev", password: "admin" },
    { username: "Paul", email: "riachypaul@gmail.com", password: "admin" }
];

// hayde signup function
function signUp() {
    let username = document.getElementById("signup-username").value.trim();
    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value.trim();
    let errorMsg = document.getElementById("signup-error");

    if (!username || !email || !password) {
        errorMsg.textContent = "All fields are required!";
        errorMsg.style.color = "red";
        setTimeout(() => errorMsg.textContent = "", 5000); // heda to clear l message ba3ed 5 seconds
        return;
    }

    // validation lal username
    if (users.some(user => user.username === username)) {
        errorMsg.textContent = "Username already taken! Please choose another.";
        errorMsg.style.color = "red";
        setTimeout(() => errorMsg.textContent = "", 5000); // heda to clear l message ba3ed 5 seconds
        return;
    }

    // validation lal email
    if (users.some(user => user.email === email)) {
        errorMsg.textContent = "Email already used! Please use another.";
        errorMsg.style.color = "red";
        setTimeout(() => errorMsg.textContent = "", 5000); // heda to clear l message ba3ed 5 seconds
        return;
    }

    // notify the user if they already have an account
    if (users.some(user => user.username === username && user.email === email)) {
        errorMsg.textContent = "You already have an account. Please sign in!";
        errorMsg.style.color = "red";
        setTimeout(() => errorMsg.textContent = "", 5000); // heda to clear l message ba3ed 5 seconds
        return;
    }

    // heda allow l user ta ya3moul sign up
    users.push({ username, email, password });
    errorMsg.textContent = "Sign-up successful! Please sign in.";
    errorMsg.style.color = "green";
    setTimeout(() => errorMsg.textContent = "", 5000); // heda to clear l message ba3ed 5 seconds
    return;
}

// hayde signin function
function signIn() {
    let username = document.getElementById("signin-username").value.trim();
    let email = document.getElementById("signin-email").value.trim();
    let password = document.getElementById("signin-password").value.trim();
    let errorMsg = document.getElementById("signin-error");

    if (!username || !email || !password) {
        errorMsg.textContent = "All fields are required!";
        errorMsg.style.color = "red";
        setTimeout(() => errorMsg.textContent = "", 5000); // heda to clear l message ba3ed 5 seconds
        return;
    }

    // Check if credentials are correct
    let validUser = users.find(user => user.username === username && user.email === email && user.password === password);

    if (validUser) {
        window.location.href = "thank-you.html";
    } else {
        errorMsg.textContent = "Incorrect username, email, or password.";
        errorMsg.style.color = "red";
        setTimeout(() => errorMsg.textContent = "", 5000); // heda to clear l message ba3ed 5 seconds
        return;
    }
}

// hayde function lal clear l error messages
function clearMessages() {
    document.getElementById("signup-error").textContent = "";
    document.getElementById("signin-error").textContent = "";
}

// heda script lal index.html to handle open popup and close popup
// heda to open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// heda to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// heda to close the popup when you click outside of it
window.onclick = function (event) {
    if (event.target == document.getElementById('popup')) {
        closePopup();
    }
}

// heda script lal faq.html
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq");
    const searchInput = document.querySelector(".input");

    // hayde function to calculate similarity between two strings
    function getSimilarity(str1, str2) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        let longer = str1.length > str2.length ? str1 : str2;
        let shorter = str1.length > str2.length ? str2 : str1;

        let matchCount = 0;
        for (let word of shorter.split(" ")) {
            if (longer.includes(word)) matchCount++;
        }

        return matchCount / shorter.split(" ").length; // similarity percentage
    }

    // heda for the clicks on the faq.html page
    faqItems.forEach((faq) => {
        faq.addEventListener("click", function () {
            // heda to close all other FAQs when one is clicked
            faqItems.forEach((item) => {
                if (item !== this) {
                    item.classList.remove("open");
                    item.querySelector(".answer-box").style.display = "none";
                }
            });

            // heda to open the clicked FAQ
            this.classList.toggle("open");

            let answer = this.querySelector(".answer-box");
            answer.style.display = this.classList.contains("open") ? "block" : "none";
        });
    });

    // heda l search functionality
    const formBox = document.querySelector(".form-box");
    if (formBox) {
        formBox.addEventListener("submit", function (event) {
        event.preventDefault();
        let query = searchInput.value.trim().toLowerCase();
        let bestMatch = null;
        let highestSimilarity = 0.5; // heda l minimum similarity (50%)

        faqItems.forEach((faq) => {
            let questionText = faq.querySelector(".faq-questions").textContent.toLowerCase();
            let answerText = faq.querySelector(".faq-answer").textContent.toLowerCase();

            // heda to calculate similarity score for both question & answer
            let questionSimilarity = getSimilarity(query, questionText);
            let answerSimilarity = getSimilarity(query, answerText);

            // heda to pick the highest similarity score
            let similarityScore = Math.max(questionSimilarity, answerSimilarity);

            if (similarityScore > highestSimilarity) {
                highestSimilarity = similarityScore;
                bestMatch = faq;
            }
        });

        if (bestMatch) {
            // heda to close all other FAQs
            faqItems.forEach((item) => {
                item.classList.remove("open");
                item.querySelector(".answer-box").style.display = "none";
            });

            // heda to open the best match
            bestMatch.classList.add("open");
            bestMatch.querySelector(".answer-box").style.display = "block";

            // heda to scroll to the best match
            bestMatch.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            alert("No matching question or answer found. Please try again.");
        }
        });
    }
});