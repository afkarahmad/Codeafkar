
//responsive loading 
var loader = document.getElementById("loader");

window.addEventListener("load", function(){
    loader.style.display="none"
}); 









//open popup screen

function popupScreen(){
    document.getElementById('id01').style.display='block';
}
//when user clicks in close button, the popup screen will be closed

function popupClose(){
    document.getElementById('id01').style.display='none';
}


var popup = document.getElementById('id01');

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}





//responsive search

 function searchList() {
   var input, filter, ul, li, i, txtValue;
   input = document.getElementById('search');
   filter = input.value.toUpperCase();
   ul = document.getElementById('list');
   li = ul.getElementsByTagName('li');

   for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
     li[i].style.display = "";
    } else {
     li[i].style.display = "none";
    }
   }
  }







function scrollToText(text) {
  var content = document.getElementById('page');
  var elements = content.getElementsByTagName('h3');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent.includes(text)) {
      elements[i].scrollIntoView({behavior: 'smooth'});
      break;
    }
  }
}



     // Check if the user has already cwStoragetorage the "Get started" button
        const wStoragetorage = localStorage.getItem('wStoragetorage');

        // Function to hide the welcome message and set the flag in localStorage
        function hideWelcomeMessage() {
            const welcomeMessage = document.getElementById('welcome-message');
            welcomeMessage.style.display = 'none';
            localStorage.setItem('wStoragetorage', 'true');
        }

        // If the user has not cwStoragetorage, show the welcome message and attach the click event
        if (!wStoragetorage) {
            const getStartedButton = document.getElementById('get-started-button');
            getStartedButton.addEventListener('click', hideWelcomeMessage);
        } else {
            // If the user has already cwStoragetorage, hide the welcome message
            hideWelcomeMessage();
        }

