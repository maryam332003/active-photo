var panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', function(){
    removeActiveClasses();
    panel.classList.add('active');
});
});


function removeActiveClasses() {
  panels.forEach( function(panel){
    panel.classList.remove('active');
  });
}