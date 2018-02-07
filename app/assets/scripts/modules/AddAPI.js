import $ from 'jquery';

class AddAPI {
  constructor() {
    this.add_calendar = $("#add-calendar");
    this.add_facebook = $("#add-facebook");
    this.add_twitter = $("#add-twitter");
    this.add_soundcloud = $("#add-soundcloud");


    this.module_column_header = '<div class="module-column__header">HEADER</div>';

  }
  calendar(){

    let module_column_id = "mod_cal";
    let module_column_class = "module_column_calendar";

    let module_column_content = '<div class="module-column__content ' + module_column_class + '">Calendar</div>';
    let module_column = '<div class="module-column module-column--small" id="' + module_column_id +'">' + this.module_column_header + module_column_content + '</div>';

    let counter_fb = 0;

    this.add_calendar.click(function(){
      console.log(module_column_id);
      if (counter_fb <= 0) {
        $("#content-port__right").append(module_column);
        $("#add-calendar").addClass("edit-dropdown--li--active");
        counter_fb++;
      }else {
        $("div").remove("#mod_cal");
        $("#add-calendar").removeClass("edit-dropdown--li--active");
        counter_fb--;
      }
      console.log(counter_fb);
    });
  }
  facebook(){
    let module_column_id = "mod_fb";
    let module_column_class = "module_column_facebook";

    let module_column_content = '<div class="module-column__content ' + module_column_class + '">Facebook</div>';
    let module_column = '<div class="module-column module-column--wide ui-widget-content" id="' + module_column_id +'">' + this.module_column_header + module_column_content + '</div>';

    let counter_fb = 0;

    this.add_facebook.click(function(){
      console.log(module_column_id);
      if (counter_fb <= 0) {
        $("#sortable").append(module_column);
        $("#add-facebook").addClass("edit-dropdown--li--active");
        counter_fb++;
      }else {
        $("div").remove("#mod_fb");
        $("#add-facebook").removeClass("edit-dropdown--li--active");
        counter_fb--;
      }
      console.log(counter_fb);
    });
  }
  twitter(){
    let module_column_id = "mod_tw";
    let module_column_class = "module_column_twitter";

    let module_column_content = '<div class="module-column__content ' + module_column_class + '">Twitter</div>';
    let module_column = '<div class="module-column module-column--wide" id="' + module_column_id +'">' + this.module_column_header + module_column_content + '</div>';

    let counter_tw = 0;
    this.add_twitter.click(function(){
      if (counter_tw <= 0) {
        $("#sortable").append(module_column);
        $("#add-twitter").addClass("edit-dropdown--li--active");
        counter_tw++;
      }else {
        $("div").remove("#mod_tw");
        $("#add-twitter").removeClass("edit-dropdown--li--active");
        counter_tw--;
      }
      console.log(counter_tw);
    });
  }
  soundcloud(){
    let module_column_id = "mod_sc";
    let module_column_class = "module_column_soundcloud";

    let module_column_content = '<div class="module-column__content ' + module_column_class + '">Soundcloud</div>';
    let module_column = '<div class="module-column module-column--wide" id="' + module_column_id +'">' + this.module_column_header + module_column_content + '</div>';


    let counter_sc = 0;
    this.add_soundcloud.click(function(){
      if (counter_sc <= 0) {
        $("#sortable").append(module_column);
        $("#add-soundcloud").addClass("edit-dropdown--li--active");
        counter_sc++;
      }else {
        $("div").remove("#mod_sc");
        $("#add-soundcloud").removeClass("edit-dropdown--li--active");
        counter_sc--;
      }
      console.log(counter_sc);
    });
  }
}

export default AddAPI;
