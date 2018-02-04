import $ from 'jquery';

class AddAPI {
  constructor() {

    this.add_facebook = $("#add-facebook");
    this.add_twitter = $("#add-twitter");
    this.add_soundcloud = $("#add-soundcloud");


    this.module_column = '<div class="module-column" id="module"><div class="module-column__header">';
    this.column_close_icon = '<i class="fa fa-bars column__close-icon" aria-hidden="true" id="close-column"></i></div>';
    this.end_column = '</div>';


  }
  append(){


    let column_close_icon = this.column_close_icon;
    let end_column = this.end_column;
    let sm_module = this.sm_module;
    let module_column = this.module_column;

    let counter = 0;
    let IDCounter = 0;


    this.add_facebook.click(function(){
      if (counter >= 1) {
        console.log("STOP");
      }else{
        IDCounter++;
        $("#content-port").append('<div class="module-column" id="module'+ IDCounter +'"><div class="module-column__header">' + column_close_icon + end_column);
        console.log(counter);

      }
    });

    this.add_twitter.click(function(){
      if (counter >= 1) {
        console.log("STOP");
      }else{
        IDCounter++;
        $("#content-port").append('<div class="module-column" id="module'+ IDCounter +'"><div class="module-column__header">' + column_close_icon + end_column);
        console.log(counter);

      }
    });

    this.add_soundcloud.click(function(){
      if (counter >= 1) {
        console.log("STOP");
      }else{
        IDCounter++;
        $("#content-port").append('<div class="module-column" id="module'+ IDCounter +'"><div class="module-column__header">' + column_close_icon + end_column);
        console.log(counter);

      }
    });

  }
  remove(){
    $("#close_fb").click(function(){
      console.log("Remove");
      $(".module-column").remove;
    });
  }


}

export default AddAPI;
