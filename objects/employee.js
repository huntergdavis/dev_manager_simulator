import { Role } from "./role";

<script type="module">
  import { Role } from './role.js';
</script>


class Employee {
  name = "";
  role = new Role("");
  level = 0;
  emotionalStability = 0;
  confidence = 0;
  imposterSyndrome = 10;

  constructor(name, role, level, emotionalStability,confidence,imposterSyndrome) {    
    this.name = name;
    this.role = role;
    this.level = level;
    this.emotionalStability = emotionalStability;
    this.confidence = confidence;
    this.imposterSyndrome = imposterSyndrome;
  }

  constructor(name, roleName) {
      this.name = name;
      this.role =new Role(roleName);
      this.level = 0;
      this.emotionalStability = 0;
      this.confidence = 0;
      this.imposterSyndrome = 10;
  }
}