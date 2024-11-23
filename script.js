
// Sélection des éléments du DOM
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const birthdayInput = document.getElementById("birthday");
const contactInput = document.getElementById("contact");
const emailInput = document.getElementById("gm");
const jobInput = document.getElementById("job");
const addressInput = document.getElementById("address");
const educationStartInput = document.getElementById("education-start");
const educationEndInput = document.getElementById("education-end");
const universityInput = document.getElementById("university");
const certificateInput = document.getElementById("certificate");
const langInput = document.getElementById("lang");
const experienceInput = document.getElementById("experience");
const skillsInput = document.getElementById("skills");
const generateCvButton = document.getElementById("generate-cv");

// Ajout d'une nouvelle section Éducation
const addEducationButton = document.querySelector("#add-button");
const educationContainer = document.querySelector(".education-container");

addEducationButton.addEventListener("click", () => {
    const newEducation = document.createElement("div");
    newEducation.classList.add("education");
    newEducation.innerHTML = `
        <label for="education-start">START</label>
        <input type="text" class="education-start" required>
        
        <label for="education-end">END</label>
        <input type="text" class="education-end" required>
        
        <label for="university">UNIVERSITY NAME</label>
        <input type="text" class="university" required>
        
        <label for="certificate">CERTIFICATE</label>
        <input type="text" class="certificate" required>
    `;
    educationContainer.appendChild(newEducation);
});

// Ajout d'une nouvelle section Langues
const addLangButton = document.querySelector("#addlang");
const languageContainer = document.querySelector(".language-container");

addLangButton.addEventListener("click", () => {
    const newLanguage = document.createElement("div");
    newLanguage.classList.add("language");
    newLanguage.innerHTML = `
        <label for="lang">LANGUAGE</label>
        <input type="text" class="lang" required>
    `;
    languageContainer.appendChild(newLanguage);
});

// Ajout d'une nouvelle section Expériences
const addExperienceButton = document.querySelector("#addex");
const experienceContainer = document.querySelector(".experience-container");

addExperienceButton.addEventListener("click", () => {
    const newExperience = document.createElement("div");
    newExperience.classList.add("experience");
    newExperience.innerHTML = `
        <label for="experience">YOUR EXPERIENCE</label>
        <input type="text" class="experience" required>
    `;
    experienceContainer.appendChild(newExperience);
});

// Ajout d'une nouvelle section Compétences
const addSkillButton = document.querySelector("#addskills");
const skillsContainer = document.querySelector(".skills-container");

addSkillButton.addEventListener("click", () => {
    const newSkill = document.createElement("div");
    newSkill.classList.add("skill");
    newSkill.innerHTML = `
        <label for="skills">PROFESSIONAL SKILLS</label>
        <input type="text" class="skills" required>
    `;
    skillsContainer.appendChild(newSkill);
});

// Génération du CV
generateCvButton.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des données
    const name = nameInput.value;
    const birthday = birthdayInput.value;
    const contact = contactInput.value;
    const email = emailInput.value;
    const job = jobInput.value;
    const address = addressInput.value;
    const educationStart = educationStartInput.value;
    const educationEnd = educationEndInput.value;
    const university = universityInput.value;
    const certificate = certificateInput.value;
    const languages = langInput.value;
    const experience = experienceInput.value;
    const skills = skillsInput.value;

    // Mise à jour des informations dans le CV
    document.getElementById("nametitle").textContent = name;
    document.querySelector("#contact ul").innerHTML = `
        <li>Birthday: ${birthday}</li>
        <li>Contact: ${contact}</li>
        <li>Email: ${email}</li>
        <li>Job: ${job}</li>
        <li>Address: ${address}</li>
    `;
    document.querySelector("#education ul").innerHTML = `
        <li>Start: ${educationStart}</li>
        <li>End: ${educationEnd}</li>
        <li>University Name: ${university}</li>
        <li>Certificate: ${certificate}</li>
    `;
    document.querySelector("#lang ul").innerHTML = `
        <li>${languages}</li>
    `;
    document.querySelector("#experience ul").innerHTML = `
        <li>${experience}</li>
    `;
    document.querySelector("#skills ul").innerHTML = `
        <li>${skills}</li>
    `;

    // Afficher la section CV
    document.querySelector(".cv").style.display = "block";
});

// Fonction pour télécharger le CV en PDF
document.getElementById("telecherger").addEventListener("click", async function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Importation des fonctionnalités jsPDF
    const { jsPDF } = window.jspdf;

    // Initialisation de jsPDF
    const doc = new jsPDF();

    // Sélectionner la section CV
    const cvElement = document.querySelector(".cv");

    // Convertir l'élément en image pour le PDF
    await html2canvas(cvElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 190; // Largeur en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Ajouter l'image au PDF
        doc.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    });

    // Télécharger le PDF
    doc.save("mon_cv.pdf");
});