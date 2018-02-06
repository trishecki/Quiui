import DropDown from './modules/DropDown.js';
import AddAPI from './modules/AddAPI.js';
import RemoveAPI from './modules/RemoveAPI.js';


var dropwdown = new DropDown();
var addapi = new AddAPI();
var removeapi = new RemoveAPI();


// addapi.create();
addapi.facebook("mod_fb", "module_column_facebook");
addapi.twitter();
addapi.soundcloud();
