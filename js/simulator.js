import { SimulationState } from './objects/simstate.js';
import { Naming } from './utils/naming.js'

// these are the functions that work on the simulation state
export class Simulator {
    static simState;
    static simVersion=1;

    constructor() {
        // data states only, safe for JSON
        Simulator.simState = new SimulationState(Naming.generatePlayerName,"Software Engineer", simVersion);
    }

    get getSimulationOutput(){
        console.log("OUTPUTTING SIMULATION");
        document.getElementById("simulationOutput").innerHTML = Simulator.simState.employee1.name + ". Currently working as a " + Simulator.simState.employee1.role.title + " level " + Simulator.simState.employee1.level;
    }

    exportSimAsJSON(buttonRef){
            var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(Simulator.simState));
            buttonRef.setAttribute("href", "data:"+data);
            buttonRef.setAttribute("download", "data.json");
    }

    importSimAsJSON(event){
        var reader = new FileReader();

        reader.onload = function(event) {

            stateParsed = JSON.parse(event.target.result);
            if(stateParsed.simVersion == simVersion) {
                Simulator.simState = stateParsed;
                console.log(Simulator.simState);
            }else {
                console.log("Sim Version MisMatch");
            }
        
        }

        reader.readAsText(event.target.files[0]);
    }
}