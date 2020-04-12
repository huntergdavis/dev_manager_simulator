export class Role {
  title = "";
  numberOfLevels = 10
  level = 0;
  salaryCap = 500000;

  constructor(title,numberOfLevels, level, salaryCap) {    
    this.title = title;
    this.numberOfLevels = numberOfLevels;
    this.level = level;
    this.salaryCap = salaryCap;
  }

  constructor(title) {
    this.title = title;
    this.numberOfLevels = 10;
    this.level = 0;
    this.salaryCap = 500000; 
  }

  // Method
  getFullTitle() {
    return this.title + this.level;
  }
}