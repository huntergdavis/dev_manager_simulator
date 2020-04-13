import { Employee } from "./employee.js";

export class SimulationState {
  constructor(FirstEmployeeName, FirstEmployeeTitle) {
      this.employee1 = new Employee(FirstEmployeeName, FirstEmployeeTitle);
  }
}