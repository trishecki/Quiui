import $ from 'jquery';

class Draggable {
  constructor() {
  }
  drag(){
    $( function() {
      $( "#draggable" ).draggable();
    });
  }
}
export default Draggable;
