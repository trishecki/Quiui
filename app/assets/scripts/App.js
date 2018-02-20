import DropDown from './modules/DropDown.js';
import AddAPI from './modules/AddAPI.js';
import RemoveAPI from './modules/RemoveAPI.js';
import Notes from './modules/Notes.js'
import Appointments from './modules/Appointments.js';
import Lightbox from './modules/Lightbox.js';


var dropwdown = new DropDown();
var addapi = new AddAPI();
var removeapi = new RemoveAPI();
var notes = new Notes();
var appointments = new Appointments();
var lightbox = new Lightbox();


notes.addNotes();
addapi.calendar();
appointments.addAppointments();

addapi.facebook();
addapi.twitter();
addapi.soundcloud();

lightbox.navigate();
