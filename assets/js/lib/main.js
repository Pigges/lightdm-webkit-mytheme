import {init} from './init.js'
import {draw} from './draw.js'
import {keyboard, mouse} from './eventHandler.js'
import {clock} from './clock.js'

window.defaultFont = "arial";

let turea = {init, draw, keyboard, mouse, clock};



if (window) window.turea = turea