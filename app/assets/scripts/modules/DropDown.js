import $ from 'jquery';

class DropDown {
  constructor() {
    $("#edit-open").click( function(){
      console.log("open");
      $("#side-bar").addClass("show");
    });
    $("#edit-close").click( function(){
      console.log("close");
      $("#side-bar").removeClass("show");
    });
  }
}

export default DropDown;
