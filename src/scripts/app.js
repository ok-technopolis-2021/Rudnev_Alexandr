let counter = 0;

function changeTheme() {
    let bodyCardClassList = document.querySelector("body").classList;
    bodyCardClassList.toggle("dark-theme");
    bodyCardClassList.toggle("light-theme");
}

document.addEventListener("DOMContentLoaded", function () {
    const classname = document.querySelector('#switch-theme-button');
    classname.addEventListener('click', changeTheme);
    const button = document.querySelector('#skill-button');
    button.addEventListener('click', () => {addSkill();});
});

function addSkill() {
    if (counter > 9) {
        alert("All positions are busy, if you need to add skill, please delete another skill");
        return;
    }
    let name = document.getElementById("nameOfSkill").value;
    let level = document.getElementById("valueOfSkill").value;
    if (name === "" || level === "" || name.length > 16 || level < 0 || level > 100) {
        alert("Please check your input and correct this (0<=level<=100)");
        return;
    }
    name.replaceAll(name, '>', '&gt');
    name.replaceAll(name, '<', '&lt');
    const sname = checkSizeName(name);
    counter++;
    createSkill(sname, level);
}

function checkSizeName(name) {
    let nameWithSpace = name;
    for (let i = nameWithSpace.length; i <= 16; ++i) {
        nameWithSpace = nameWithSpace + '\t';
    }
    return nameWithSpace;
}

function createSkill(nameOfSkill, valueOfSkill) {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill__about');
    skillDiv.innerHTML = `<div class="skill__name" style="white-space:pre;">${nameOfSkill}</div>
                          <div class="skill__bar"><div class="skill__level" style="width: ${valueOfSkill}%;"></div></div>
                          <div class="skill__delete"><button class="skill__delete-button" id="skill-delete-button">Delete</button></div>`
    const buttonDelete = skillDiv.querySelector('#skill-delete-button');
    buttonDelete.addEventListener('click', () => {skillDiv.remove(); counter--;})
    document.getElementsByClassName("skills__list").item(0).appendChild(skillDiv);
}
