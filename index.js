function validate() {
           var username = document.getElementById("uname").value;
           var password = document.getElementById("pass").value;

           if (username.trim() == "" || password.trim() == "") {
               alert("Field should not be empty");
               return false;
           }

           else {
               alert("username or password is incorrect");
               return false;
           }
       }
