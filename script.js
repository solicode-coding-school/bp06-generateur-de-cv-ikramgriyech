
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const birthdayInput = document.getElementById("birthday");
const contactInput = document.getElementById("contact");
const emailInput = document.getElementById("gm");
const jobInput = document.getElementById("job");
const addressInput = document.getElementById("address");
const educationStartInput = document.getElementById('education');
const educationEndInput = document.getElementById('education-end');
const universityInput = document.getElementById('university');
const certificateInput = document.getElementById('certificate');
const langInput = document.getElementById('lang');
const experienceInput = document.getElementById('experience');
const skillsInput = document.getElementById('skills');
const generateCvButton = document.getElementById('télécharger');


let educationEntries = [];
let languageEntries = [];
let experienceEntries = [];
let skillsEntries = [];

// Function to add education entry

let btn = document.querySelector("#add-button")
let educationContainer = document.querySelector(".education-container")
btn.addEventListener("click", () => {
    let mewEducation = document.createElement("div")
    mewEducation.classList.add("education")
    mewEducation.innerHTML = `
    <label for="education-start">START</label>
                    <input type="text" id="education-start" required>

                    <label for="education-end">END</label>
                    <input type="text" id="education-end" required>

                    <label for="university">UNIVERSITY NAME</label>
                    <input type="text" id="university" required>

                    <label for="certificate">CERTIFICATE</label>
                    <input type="text" id="certificate" required>
    `
    educationContainer.appendChild(mewEducation)
})

let addLangBtn = document.querySelector("#addlang");
let languageContainer = document.querySelector(".language-container"); 
    let newLanguage = document.createElement("div");
    newLanguage.classList.add("language");
    newLanguage.innerHTML = `
        <label for="lang">LANGUAGE</label>
        <input type="text" id="lang" required>
    `;
    languageContainer.appendChild(newLanguage);
});

