function printPdf() {
  var content = document.getElementById("resume");

  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach(button => {
      button.classList.add("none");
  });
  const printButton = document.querySelector("#cmd");
  printButton.classList.add("none")

  html2pdf(content, {
      html2canvas: { scale: 1, logging: true, dpi: 500 }
  });

   printButton.classList.remove("none")
  allButtons.forEach(button => {
    button.classList.remove("none");
  })
}

function addEducation() {
  const head = document.createElement('div');
  document.getElementById("education").appendChild(head);
  head.innerHTML = ('<div class="edublock"><span class="education-head" contenteditable="true">YOUR DEGREE</span><div ><span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span></div></div>');
  saveResume();
}
function removeEducation(event) {
  const allEducation = event.target.parentElement.getElementsByClassName("edublock");
  const array = Array.from(allEducation);
  if (array.length === 0) {
      alert("No fields are present to be deleted!")
  }
  else {
      array[array.length - 1].remove()
  }
  saveResume();
}


function addSkill() {
  const head = document.createElement('div');
  document.getElementById("skills").appendChild(head);
  head.innerHTML = ('<div class="skill"><span contenteditable="true">Your skill</span></div>');
  saveResume();
}

function removeSkill(event) {
  const allSkills = event.target.parentElement.getElementsByClassName("skill");
  const array = Array.from(allSkills);
  if (array.length === 0) {
      alert("No fields are present to be deleted!")
  }
  else {
      array[array.length - 1].remove()
  }
  saveResume();
}


function addLang() {
  const head = document.createElement('div');
  document.getElementById("languages").appendChild(head);
  head.innerHTML = ('<div class="language"><span contenteditable="true">Language</span> - <span contenteditable="true">efficiency level</span></div>');
  saveResume();
}
function remLang(event) {
  const allLanguages = event.target.parentElement.getElementsByClassName("language");
  const array = Array.from(allLanguages);
  if (array.length === 0) {
      alert("No fields are present to be deleted!")
  }
  else {
      array[array.length - 1].remove()
  }
  saveResume();
}


function addInterest() {
  const head = document.createElement('div');
  document.getElementById("interests").appendChild(head);
  head.innerHTML = ('<div class="interest" ><span contenteditable="true">Your interest</span></div>');
  saveResume();
}
function removeInterest(event) {
  const allInterests = event.target.parentElement.getElementsByClassName("interest");
  const array = Array.from(allInterests);
  if (array.length === 0) {
      alert("No fields are present to be deleted!")
  }
  else {
     array[array.length - 1].remove()
  }
  saveResume();
}

function saveResume() {
  var sec = document.getElementById("print");
  value1 = sec.innerHTML;
}