import './add_skills'
import './change_themes'

document.addEventListener("DOMContentLoaded", function () {
    const change = document.querySelector('#skill-button');
    change.addEventListener('submit',(e) => {
        e.preventDefault();
        changeTheme();
    });

    const button = document.querySelector('#skill-button');
    button.addEventListener('submit', (e) => {
        e.preventDefault();
        addSkill();
    });
});
