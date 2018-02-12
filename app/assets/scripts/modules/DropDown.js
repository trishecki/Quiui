import $ from 'jquery';

class DropDown {
  constructor() {
    $("#edit-open").click( function(){
      console.log("open");
      $("#side-bar").toggleClass("show");
    });
    $("#edit-close").click( function(){
      console.log("close");
      $("#side-bar").removeClass("show");

    });
    $(".dashboard__content").click( function(){
      console.log("close");
      $("#side-bar").removeClass("show");
    });
  }
}

export default DropDown;
