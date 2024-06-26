 // form validation 
 function val1() {
    var fName = document.querySelector(".firstName")
        var fName = document.querySelector(".firstName").value  


        if(fName.length < 5 ) {
            var toggleButton = document.querySelector(".toggle-button1")
            toggleButton.classList.add('active')
            var submit = document.getElementById("submit")
            submit.disabled = true
        }
        else if (fName.length > 5 ) {
            var toggleButton = document.querySelector(".toggle-button1")
            toggleButton.classList.remove('active')
            var submit = document.getElementById("submit")
            submit.disabled = false
        }   
       window.location = "/profile/profile.html"
    }

   
     
     function show() {
         var one = document.querySelector(".one")
         var two = document.querySelector(".two")
         var three = document.querySelector(".three")
         document.getElementById("side-nav").classList.toggle('active')    
     
         one.classList.toggle('active')
         two.classList.toggle('active')
         three.classList.toggle('active')
     }
     

    var sendData = document.getElementById("sendData")
   var form = document.getElementById("form")
   form.addEventListener("click", (e) =>{
    e.preventDefault()
        var fName = document.getElementById("fName").value
        localStorage.setItem("fName", fName)

        var lName = document.getElementById("lName").value
        localStorage.setItem("lName", lName)

        var email = document.getElementById("email").value
        localStorage.setItem("email", email)

        var pass = document.getElementById("pass").value
        localStorage.setItem("pass", pass)

        var secondPass = document.getElementById("secondPass").value
        
        // If the values are empty run this !
        if (fName == "" || lName == "" || email == "" || pass == "" || secondPass == "") {
            form.style.backgroundColor = "red"
            e.disabled = true
            return false;
        }
        else {
            alert("registered successfully!")
            window.location = "profile.html"
            return true
        }
        
        if (!validateEmail(email)) {
        form.style.backgroundColor = "red"
        return false;
        }
        // validating email 
         function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }
    })