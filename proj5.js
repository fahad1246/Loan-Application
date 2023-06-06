//Fahad Mohammed
// 03/04/21
// Project 5

function validateForm(e) {
    var x = document.form1.Fullname.value;
    if (x == "") {
        alert("Name is a required field.");

        // Calling the preventDefault method
        // prevents the default behavior of
        // the submitting the form when the 
        // submit button is clicked.
        e.preventDefault( );
    }
}
//this is for the submit button and if the field is not valid it will show the error
function init( ) {
    var f = document.getElementsByName("form1");
    f[0].addEventListener("submit", validateForm); 
   // document.getElementById("btn2").onclick=myFunction;
}
//This is for hidind the co-applicant area if the user dosent have 
//he wont see it
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none'; 
      }
    }

   
   //loads the page 
window.onload = init;
