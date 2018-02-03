import $ from 'jquery';

class AddAPI {
  constructor() {
  }
  facebook(){
    console.log("Add API");
    $("#add-facebook").click(function(){
      $("#content-port").append('<div class="module-column module-facebook"></div>')
    });
  }
  twitter(){
    console.log("Add API");
    $("#add-twitter").click(function(){
      $("#content-port").append('<div class="module-column module-twitter"></div>')
    });
  }
  soundcloud(){
    console.log("Add API");
    $("#add-soundcloud").click(function(){
      $("#content-port").append('<div class="module-column module-soundcloud"></div>')
    });
  }
}

export default AddAPI;
