import $ from 'jquery';

class Appointments {
  constructor() {
    this.add_appointments = $("#add-appointments");
    this.counter = 0;

  }
  addAppointments(){
    let counter = this.counter
    let module_column_header = '<div class="module-column__header">Appointments</div>';
    let module_column_class = "module_column_appointments";
    let module_column_content_text = '<p><h4 class="appointments__input-title">Topic:</h4><textarea class="appointments--textarea" rows="2" cols="50"></textarea></p>';
    let module_column_content_time = '<p><h4 class="appointments__input-title">Time:</h4><input type="time" class="appointments--input"></p>';
    let module_column_content_date = '<p><h4 class="appointments__input-title">Date:</h4><input type="date" class="appointments--input"></p>';
    let module_column_content_input = module_column_content_date + module_column_content_time + module_column_content_text;
    let module_column_content = '<div class="module-column__content ' + module_column_class + '">'+ module_column_content_input +'</div>';
    this.add_appointments.click(function(){
      console.log("Appointments");
      if (counter <= 0) {
        $("#content-port__right").append('<div class="module-column module-column--small" id="mod_appointments">'+ module_column_header + module_column_content +'</div>');
        $("#add-appointments").addClass("edit-dropdown--li--active");
        $(".module_column_appointments").toggleClass("module-column--appear");
        counter++;
      }else {
        $("div").remove("#mod_appointments");
        $("#add-appointments").removeClass("edit-dropdown--li--active");
        counter--;
      }
      console.log(counter);
    });
  }
}

export default Appointments;
