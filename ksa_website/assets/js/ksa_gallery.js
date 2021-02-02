$(document).ready(function () {
  
    var popup = $("#s_popup"),
        doc = $(document),
        popClass = "s_popup",
        showPopup = function (event) {
          console.log("clicked");
          popup.fadeIn(200);
          event.preventDefault();
        },
        hidePopup = function (event) {
          popup.hide();
          event.preventDefault();
        };
    

    
    doc.keypress(function (event) {
      if (event.keyCode === 27) { // esc key
        hidePopup();
      }
    });
    
  });