let result = document.querySelector("#result");
let btn = document.querySelector("#btn");

function generateLovePercentage(yourName, partnerName) {
    let combinedNames = yourName.toLowerCase() + partnerName.toLowerCase();
    let hash = 0;
    for (let i = 0; i < combinedNames.length; i++) {
        hash = combinedNames.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    let randomNumber = hash % 101; 
    return randomNumber;
}

btn.addEventListener("click", () => {
    let yourName = document.querySelector("#your-name").value;
    let partnerName = document.querySelector("#partner-name").value;

    if (yourName === "") {
        alert("Please enter Your Name");
    } else if (partnerName === "") {
        alert("Please enter Partner's Name");
    } else {
        let lovePercentage = generateLovePercentage(yourName, partnerName);
        result.innerHTML = `${yourName} and ${partnerName} Love Percentage Is: ${lovePercentage}%`;
    }
});
