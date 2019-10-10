document.getElementById('clickMe').onclick = function() {


    function createNewUser() {
        this.userName = prompt('Enter you name: ','');
        while (this.userName === '' || typeof this.userName === "Number") {
            this.userName = prompt('Enter you name AGAIN: ','');
        }

        this.userSecondName = prompt('Enter you second name','');
        while (this.userSecondName === ''){
            this.userSecondName = prompt('Enter you second name AGAIN: ','');
        }

        this.getLogin = function(){
            let newLogin = this.userName.charAt(0).toLowerCase() + this.userSecondName.toLowerCase();
            return newLogin;
        }
    }

    let newUserObj = new createNewUser();
    alert(`Your login is: ${newUserObj.getLogin()}`);

};


