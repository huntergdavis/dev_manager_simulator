import { Role } from "./role.js";

export class Employee {
  constructor(name, roleName) {
      this.name = name;
      this.role =new Role(roleName);
      this.level = 0;
      this.emotionalStability = 0;
      this.confidence = 0;
      this.imposterSyndrome = 10;
  }
}