let personalInfo;

document.getElementById("cvForm").addEventListener('submit', function(){
    event.preventDefault();
});

document.getElementById("submit").addEventListener('click', function(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let emailAddress = document.getElementById("emailAddress").value;
    personalInfo = {firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    emailAddress: emailAddress};

    console.log(personalInfo);
});

function createCV(){
    
}



console.log(firstName);