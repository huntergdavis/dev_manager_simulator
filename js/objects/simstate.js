import { Employee } from "./employee.js";

export class SimulationState {
  constructor(FirstEmployeeName, FirstEmployeeTitle, simulationVersion) {
      this.employee1 = new Employee(FirstEmployeeName, FirstEmployeeTitle);
      this.simulationVersion = simulationVersion;
  }
}