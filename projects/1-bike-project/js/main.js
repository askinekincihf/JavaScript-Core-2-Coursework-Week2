// Part - 1
const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
const greenBtn = document.querySelector("#greenBtn");

const jumbotron = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".buttons a");
const volunteerBtn = document.querySelector(".btn-secondary");

blueBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
});

orangeBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
});

greenBtn.addEventListener("click", () => {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
});


// Part - 2

const submitBtn = document.querySelector("form button");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    submitFlag = true;
    const nameInput = document.querySelector("#example-text-input");
    const email = document.querySelector("#exampleInputEmail1");
    let emailValue = email.value;
    const describe = document.querySelector("#exampleTextarea");
    
    if(!nameInput.value) {
        nameInput.style.backgroundColor = "red";
        submitFlag = false;
    } else {
        nameInput.style.backgroundColor = "transparent";
    }

    if(!emailValue.includes("@")) {
        email.style.backgroundColor = "red";
        submitFlag = false
    }else {
        email.style.backgroundColor = "transparent";
    }

    if(!describe.value) {
        describe.style.backgroundColor = "red";
        submitFlag = false
    } else {
        describe.style.backgroundColor = "transparent";
    }

    if(submitFlag) {
        alert("Thank you for filling out the form.")
        nameInput.value = " ";
        email.value = " ";
        describe.value = " ";
        nameInput.style.backgroundColor = "transparent";
        email.style.backgroundColor = "transparent";
        describe.style.backgroundColor = "transparent";
    }

})
