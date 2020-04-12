import { SimulationState } from './objects/simstate.js';

// these are the functions that work on the simulation state

export class Simulator {
    constructor() {
        // data states only, safe for JSON
        this.simState = new SimulationState;
    }

    get getSimulationOutput(){
        document.getElementById("simulationOutput").innerHTML = this.simState.employee1.emotionalStability;
    }

    exportSimAsJSON(buttonRef){
            var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.simState));
            buttonRef.setAttribute("href", "data:"+data);
            buttonRef.setAttribute("download", "data.json");
    }

    importSimAsJSON(event){
        var reader = new FileReader();

        reader.onload = function(event) {
            this.simState = JSON.parse(event.target.result);
        }

        reader.readAsText(event.target.files[0]);
    }
}