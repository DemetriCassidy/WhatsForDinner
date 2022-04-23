$(function () { // automatically opens first tab
    document.getElementById("initialTab").click();
});

function tabshift(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // hides unused tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // De-highlights unused tabs"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Displays tab, hilights active tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    return true
  }

 // module.exports = tabshift
  