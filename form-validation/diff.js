let valMsg = document.querySelector('.message-validation');
valMsg.style.display = 'none';
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('male').checked ? document.getElementById('male').value : document.getElementById('female').value;
    let language = document.getElementsByName('lang[]');
    let lang = [];

    let country = document.getElementById('country').value;
    for (let index = 0; index < language.length; index++) {
        if (language[index].checked) {
            lang.push(language[index].value);
        }
    }
    if (name.length === 0) {
        valMsg.style.display = 'block';
        valMsg.innerHTML = `<p>Name cannot be left blank</p>`;
    } else if (email.length === 0) {
        valMsg.style.display = 'block';
        valMsg.innerHTML = `<p>Email cannot be left blank</p>`;
    } else if (lang.length === 0) {
        valMsg.style.display = 'block';
        valMsg.innerHTML = `<p>Language must be selected</p>`;
    } else {
        valMsg.classList.remove('alert-danger');
        valMsg.classList.add('alert-success');
        valMsg.innerHTML = `<p>Your data has been successfully printed</p>`;
        document.querySelector('.data-show').innerHTML = `
        <h1>Your Info</h1>
        <p>Your name is ${name} from ${country}. You can be reached at ${email}.</p>
        <p>You are a ${gender} and you speak ${lang.join(', ')} language.</p>
    `;
    }

});