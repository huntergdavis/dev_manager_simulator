import { Simulator } from './simulator.js';

let simulator = new Simulator;

// setup our on-screen buttons

document.getElementById ("displaySim").addEventListener ("click", function(){
        simulator.getSimulationOutput;
});

document.getElementById ("exportJSON").addEventListener ("click", function(){
        simulator.exportSimAsJSON(this);
});

document.getElementById ("importJSON").addEventListener ("change", function(event) {
        simulator.importSimAsJSON(event);
});
