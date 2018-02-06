import $ from 'jquery';

class AddAPI {
  constructor() {
    this.add_facebook = $("#add-facebook");
    this.add_twitter = $("#add-twitter");
    this.add_soundcloud = $("#add-soundcloud");


    this.module_column_content = '<div class="module-column__content ' + this.module_column_class + '">FACEBOOK</div>';
    this.module_column_header = '<div class="module-column__header">HEADER</div>';

    this.module_column = '<div class="module-column" id="' + this.module_column_id +'">' + this.module_column_header + this.module_column_content + '</div>';
  }
  facebook(module_column_id, module_column_class){

    this.module_column_id = module_column_id;
    this.module_column_class = module_column_class;

    console.log(module_column_id);

    let module_column = this.module_column;

    let counter_fb = 0;
    this.add_facebook.click(function(){
      if (counter_fb <= 0) {
        $("#content-port").append(module_column);
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
    let counter_tw = 0;
    this.add_twitter.click(function(){
      if (counter_tw <= 0) {
        $("#content-port").append('<div class="module-column" id="mod_tw">Twitter</div>');
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
    let counter_sc = 0;
    this.add_soundcloud.click(function(){
      if (counter_sc <= 0) {
        $("#content-port").append('<div class="module-column" id="mod_sc">Soundcloud</div>');
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
