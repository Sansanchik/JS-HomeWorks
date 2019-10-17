function createNewUser() {
    let newUser,
        name = prompt('Enter you name', ''),
        surname = prompt('Enter your surname', '');
    birthday = birthDay();

    newUser = {
        name,
        surname,
        birthday,
        getLogin() {
            return name.substr(0, 1).toLowerCase() + surname.toLowerCase();
        },
        getAge() {
            let now = new Date().getFullYear();
            let born = new Date(birthday).getFullYear();
            let monthBorn = new Date(birthday).getMonth();
            let monthNow = new Date().getMonth();

            if (monthBorn > monthNow) {
                born++
            }
            return now - born;
        },
        getPassword() {
            return name.substr(0, 1).toUpperCase() + surname.toLowerCase() + birthday.getFullYear()
        }
    };
    return newUser;
}

function birthDay() {
    let bday = prompt('Enter your birthday dd.mm.yyyy', '  .  .    ').split(".");

    return new Date(bday[2], bday[1] - 1, bday[0]);
}

console.log(createNewUser().getPassword());
// console.log(createNewUser().getAge());
