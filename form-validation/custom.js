let st = { name: '', email: '', gender: 'male', language: [], country: '' };

let valMsg = document.querySelector('.message-validation');
valMsg.style.display = 'none';

document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    console.log(st);
    if (st.name.length === 0 || st.email.length === 0 || st.language.length === 0 || st.country.length === 0) {
        valMsg.style.display = 'block';
        valMsg.innerHTML = `<p>Fields cannot be left blank</p>`;
    } else {
        valMsg.classList.remove('alert-danger');
        valMsg.classList.add('alert-success');
        valMsg.innerHTML = `<p>Your data has been successfully printed</p>`;
        document.querySelector('.data-show').innerHTML = `
        <h1>Your Info</h1>
        <p>Your name is ${st.name} from ${st.country}. You can be reached at ${st.email}.</p>
        <p>You are a ${st.gender} and you speak ${st.language.join(', ')} language.</p>
    `;
    }
});

//name
document.getElementById('name').addEventListener('change', (e) => {
    st.name = e.target.value;
    const regEx = /^[a-zA-Z ]+$/;
    // let regEx = new RegExp('/^[a-zA-Z]+$/');
    if (regEx.test(st.name)) {
        document.querySelector('.nameerr').style.display = 'none'
    } else {
        document.querySelector('.nameerr').style.display = 'block';
        document.querySelector('.nameerr').innerText = 'Name format not correct';
    }

});
// gender
document.querySelectorAll('.gender').forEach(gender => {
    gender.addEventListener('click', (e) => {
        if (e.target.checked) st.gender = e.target.value;
    });
});


//email
document.getElementById('email').addEventListener('change', (e) => {
    st.email = e.target.value;
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let regEx = new RegExp('/^[a-zA-Z]+$/');
    // regEx.test(st.email) ? '' : document.querySelector('.emailerr').innerText = 'Email format not correct';
    if (regEx.test(st.email)) {
        document.querySelector('.emailerr').style.display = 'none'
    } else {
        document.querySelector('.emailerr').style.display = 'block';
        document.querySelector('.emailerr').innerText = 'Email format not correct';
    }

});

//language
let language = document.getElementsByName('lang[]');
for (let index = 0; index < language.length; index++) {
    language[index].addEventListener('click', (e) => {
        if (e.target.checked) {
            st.language.push(language[index].value);
        } else {
            let ind = st.language.indexOf(language[index].value);
            st.language.splice(ind, 1);
        }
    });
}
//country
document.getElementById('country').addEventListener('change', (e) => st.country = e.target.value);


// setInterval(() => console.log(st), 10000);









