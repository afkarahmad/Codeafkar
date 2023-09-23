function shwNav(){
    var menu = document.getElementById("menu");
    
           menu.style.left="0";
         
}

function closeNav(){
    var menu = document.getElementById("menu");
    
           menu.style.left="-76%";
         
}


function shwSrch(){
    
    var searchbar = document.getElementById("search");
    
    var logo = document.getElementById("logo");
    
   if(logo.style.display == "none"){
    
    searchbar.style.display="none";
    logo.style.display="block";
    }
  else{
    
    searchbar.style.display="block";
    logo.style.display="none";
      
  }
    
    
}






