import DropDown from './modules/DropDown.js';
import AddAPI from './modules/AddAPI.js';
import RemoveAPI from './modules/RemoveAPI.js';
import Notes from './modules/Notes.js'



var dropwdown = new DropDown();
var addapi = new AddAPI();
var removeapi = new RemoveAPI();
var notes = new Notes();



notes.addNotes();
addapi.calendar();


addapi.facebook();
addapi.twitter();
addapi.soundcloud();
