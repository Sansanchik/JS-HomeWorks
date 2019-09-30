function acheck() {
    const name = prompt('What is your name?');
    const age = +prompt('How old are you?');

    if (age < 18) {
        alert('You are not allowed to visit this website!')
    }
    else if (age >= 18 && age < 21) {
        let conf = confirm('Are you sure you want to continue?');
        if (conf) {
            alert('Welcome, ' + name + '!')
        } else {
            alert('You are not allowed to visit this website!')
        }
    }
    else {
        alert('Welcome, ' + name + '!')
    }
}

