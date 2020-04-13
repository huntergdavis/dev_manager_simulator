export class Role {
  title;
  numberOfLevels;
  salaryCap;

  constructor(title) {
    this.title = title;
    this.numberOfLevels = 10;
    this.salaryCap = 500000; 
  }
}