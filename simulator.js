import { SimulationState } from './objects/simstate.js';

// these are the functions that work on the simulation state

export class Simulator {
    constructor() {
        // data states only, safe for JSON
        this.simState = new SimulationState;
    }

    get getSimulationOutput(){
        document.getElementById("simulationOutput").innerHTML = simulator.simState.employee1.emotionalStability;
    }

    get exportSimAsJSON(buttonRef){
            var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(simState));
            buttonRef.setAttribute("href", "data:"+data);
            buttonRef.setAttribute("download", "data.json");
    }

    get importSimAsJSON(event){
        var reader = new FileReader();

        reader.onload = function(event) {
            simState = JSON.parse(event.target.result);
            alert(simState.employee1.emotionalStability);
        }

        reader.readAsText(event.target.files[0]);
    }
}