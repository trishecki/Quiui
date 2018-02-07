import DropDown from './modules/DropDown.js';
import AddAPI from './modules/AddAPI.js';
import RemoveAPI from './modules/RemoveAPI.js';
import Draggable from './modules/Draggable.js'


var draggable = new Draggable();
var dropwdown = new DropDown();
var addapi = new AddAPI();
var removeapi = new RemoveAPI();





addapi.calendar();


addapi.facebook();
addapi.twitter();
addapi.soundcloud();
draggable.drag();
