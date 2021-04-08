
function generate() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birth;
};

generate()

document.getElementById('generateBtn').addEventListener('click', generate);

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('firstNameOutput').innerText = '*****';
    document.getElementById('surnameOutput').innerText = '*****';
    document.getElementById('fatherNameOutput').innerText = '*****';
    document.getElementById('professionOutput').innerText = '*****';
    document.getElementById('genderOutput').innerText = '***';
    document.getElementById('birthYearOutput').innerText = '***';
})



