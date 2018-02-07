import $ from 'jquery';

class Notes {
  constructor() {
    this.add_notes = $("#add-notes");
    this.counter = 0;

  }
  addNotes(){
    let counter = this.counter
    let module_column_header = '<div class="module-column__header">Notes</div>';
    let module_column_class = "module_column_notes";
    let module_column_content_input = '<textarea class="notes--textarea" rows="4" cols="50"></textarea>';
    let module_column_content = '<div class="module-column__content ' + module_column_class + '">'+ module_column_content_input +'</div>';
    this.add_notes.click(function(){
      console.log("Notes");
      if (counter <= 0) {
        $("#content-port__right").append('<div class="module-column module-column--small" id="mod_notes">'+ module_column_header + module_column_content +'</div>');
        $("#add-notes").addClass("edit-dropdown--li--active");
        counter++;
      }else {
        $("div").remove("#mod_notes");
        $("#add-notes").removeClass("edit-dropdown--li--active");
        counter--;
      }
      console.log(counter);
    });
  }
}

export default Notes;
