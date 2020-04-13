import { Simulator } from './simulator.js';

let simulator = new Simulator;

// setup our on-screen buttons

document.getElementById ("displaySim").addEventListener ("click", function(){
        simulator.getSimulationOutput;
}, false);

document.getElementById ("exportJSON").addEventListener ("click", function(){
        simulator.exportSimAsJSON(this);
}, false);

document.getElementById ("importJSON").addEventListener ("change", function(event) {
        simulator.importSimAsJSON(event);
});
