function Validation()
{
    var form = document.getElementById("form");
    var email = document.getElementById("exampleFormControlInput1").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Your Email Id is valid";
        text.style.color = "#00ff00" 
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML="Please enter valid Email Id";
        text.style.color = "red" 
    }
    if(email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");   
        text.innerHTML = "";
        text.style.color = "#00ff00" 

    }
}