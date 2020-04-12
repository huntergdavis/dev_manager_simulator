import { Employee } from './objects/employee.js';

function getSimulationOutput() {
    let hunter = new Employee("Hunter","Software Developer");   
    return hunter.getEmotionalStability;
}

function runSimulation(){
        document.getElementById("simulationOutput").innerHTML = getSimulationOutput();
}

document.getElementById ("simulationOutput").addEventListener ("click", runSimulation(), false);