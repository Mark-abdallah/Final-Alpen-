document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
      
      element.addEventListener('click', function (e) {
  
        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;	
  
          if(nextEl) {
              e.preventDefault();	
              let mycollapse = new bootstrap.Collapse(nextEl);
              
              if(nextEl.classList.contains('show')){
                mycollapse.hide();
              } else {
                  mycollapse.show();
                  // find other submenus with class=show
                  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                  // if it exists, then close all of them
                  if(opened_submenu){
                    new bootstrap.Collapse(opened_submenu);
                  }
              }
          }
      }); // addEventListener
    }) // forEach
  }); 
  // DOMContentLoaded  end
  function next(){
    var fPage= parseInt( document.getElementById("currentPage").innerText)
    var tPage= parseInt( document.getElementById("totalPages").innerText)
    if(fPage==tPage){
        document.getElementById("nextBtn").classList.remove("text-dark")
        document.getElementById("nextBtn").classList.add("text-light")
        document.getElementById("nextBtn").removeAttribute("data-bs-slide")

    }else{
        document.getElementById("nextBtn").setAttribute("data-bs-slide","next")
        document.getElementById("prevBtn").classList.remove("text-light")
        document.getElementById("prevBtn").classList.add("text-dark")
        fPage++
        document.getElementById("currentPage").innerText=fPage
    }
    
  }
  function prev(){
    var fPage= parseInt( document.getElementById("currentPage").innerText)
if(fPage==1){
    document.getElementById("prevBtn").classList.remove("text-dark")
    document.getElementById("prevBtn").classList.add("text-light")
    document.getElementById("prevBtn").removeAttribute("data-bs-slide")
}else{
    document.getElementById("nextBtn").classList.remove("text-light")
        document.getElementById("nextBtn").classList.add("text-dark")
        document.getElementById("prevBtn").setAttribute("data-bs-slide","prev")
    fPage-- 
    document.getElementById("currentPage").innerText=fPage
}
    
  }
 function  clearAll(){
    document.querySelectorAll(".checkbox").forEach(c => c.checked=false)
  }

  