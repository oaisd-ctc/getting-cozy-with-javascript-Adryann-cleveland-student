function collapse() {
    document.getElementById("para2").style.display = 'none';
}
function show() {
    document.getElementById("para2").style.display = 'block';

}

function Color() {
    document.getElementById("change").style.color = "blue";
    document.getElementById("demo").style.color = "red";
    document.getElementById("txt-color").style.backgroundColor = "orange";

}

function greeting() {
    let text;
    let person = prompt("Please enter your name: ");
    if (person == null || person == " ") {
        text = "Cancelled prompt";
    } else {
        text = "Weclome Scientist " + person + ".";
    }
    document.getElementById("demo").innerHTML = text;

}

function changeColor() {
    let color = document.getElementById('colorInputText').value;

    document.getElementById('para3').style.backgroundColor = color;

}

function colorwheel() {
    let colorWheel = document.getElementById('colorInputColor').value;
    document.body.style.backgroundColor = colorWheel;
}

const shapeChange = () => {
    const userPicked = document.getElementById('shapes').value;
    const div = document.getElementById('danger');


    div.className = '';


    if (userPicked === 'Square') {
        div.classList.add('square');
    } else if (userPicked === 'Circle') {
        div.classList.add('circle');
    } else if (userPicked === 'Triangle') {
        div.classList.add('triangle');
    }
}


function myMove() {
    var id = null;

    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 90) {
            clearInteral(id);
        } else {
            pos++;

            elem.style.left = pos + 'px';
        }
    }
}

function myMoveLeft() {
    var id = null;

    var elem = document.getElementById("myAnimation");
    var pos = 90;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 0) {
            clearInteral(id);
        } else {
            pos--;
            elem.style.left = pos + 'px';
        }
    }
}

function toggleDiv() {
    var element = document.getElementById("myDIV");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}



function formValadation() {
    const name = document.getElementById("name").value;
    const gmail = document.getElementById("email").value;
    const age = document.getElementById("ageLimit").value;

    const ageError = document.getElementById("age-error");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");


    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";

    let isValid = true;
    if (name.length < 3 || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }
    if (gmail === "" || !gmail.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;

        if (age === " " || age < 10) {
            ageError.textContent = "Please enter your age (must be 10 or older)"
            isValid = false;
        }
    }
    return isValid;
}

