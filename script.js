// Welcome Message
window.onload = function () {

    window.alert("Welcome to Richelle Fabillon Servando's Portfolio!");

    // Change heading text
    document.getElementById("title").innerText =
    "Welcome to My Portfolio";

    // Change heading style
    document.getElementById("title").style.color = "yellow";
    document.getElementById("title").style.fontSize = "50px";

    console.log("Portfolio Loaded Successfully!");

};

// Reusable Function
function changeTheme(){

    document.body.classList.toggle("dark-mode");

    console.log("Theme Changed");

}

// Reusable Function
function showInfo(){

    alert(
        "Name: Richelle Fabillon Servando\n\n" +
        "Course: Bachelor of Science in Information Technology\n\n" +
        "School: Holy Child Central Colleges, Inc.\n\n" +
        "Career Goal: Future Software Developer\n\n" +
        "Email: servando@gmail.com\n\n" +
        "Phone: +63 900 000 0044"
    );

    console.log("Personal Information Displayed");

}