import $ from 'jquery';

class AddAPI {
  constructor() {
    this.add_calendar = $("#add-calendar");
    this.add_facebook = $("#add-facebook");
    this.add_twitter = $("#add-twitter");
    this.add_soundcloud = $("#add-soundcloud");

    //
    // let module_column_header = '<div class="module-column__header">HEADER</div>';

  }
  calendar(){
    let module_column_header = '<div class="module-column__header">Calendar</div>';
    let module_column_id = "mod_cal";
    let module_column_class = "module_column_calendar";
    let google_calendar_api = '<iframe src="https://calendar.google.com/calendar/embed?src=tris_hecki%40web.de&ctz=Europe%2FAmsterdam" style="border: 0" width="100%" height="300" frameborder="0" scrolling="no"></iframe>';

    let module_column_content = '<div class="module-column__content ' + module_column_class + '">'+ google_calendar_api +'</div>';
    let module_column = '<div class="module-column module-column--small" id="' + module_column_id +'">' + module_column_header + module_column_content + '</div>';

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
    let module_column_header = '<div class="module-column__header">Facebook</div>';
    let module_column_id = "mod_fb";
    let module_column_class = "module_column_facebook";
    let facebook_api_link = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D924777877679452%26id%3D906234006200506&width=790&show_text=true&height=299&appId" width="100%" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>';

    let module_column_content = '<div class="module-column__content ' + module_column_class + '">'+ facebook_api_link +'</div>';
    let module_column = '<div class="module-column module-column--wide ui-widget-content" id="' + module_column_id +'">' + module_column_header + module_column_content + '</div>';

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
    let module_column_header = '<div class="module-column__header">Twitter</div>';
    let module_column_id = "mod_tw";
    let module_column_class = "module_column_twitter";
    let twitter_api_link = '<a class="twitter-timeline" data-width="100%" data-height="500" href="https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw">A Twitter List by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'

    let module_column_content = '<div class="module-column__content ' + module_column_class + '">'+ twitter_api_link +'</div>';
    let module_column = '<div class="module-column module-column--wide" id="' + module_column_id +'">' + module_column_header + module_column_content + '</div>';

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
    let module_column_header = '<div class="module-column__header">Soundcloud</div>';
    let module_column_id = "mod_sc";
    let module_column_class = "module_column_soundcloud";
    let soundcloud_api_link = '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/84909211&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>'

    let module_column_content = '<div class="module-column__content ' + module_column_class + '">'+ soundcloud_api_link +'</div>';
    let module_column = '<div class="module-column module-column--wide" id="' + module_column_id +'">' + module_column_header + module_column_content + '</div>';


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
