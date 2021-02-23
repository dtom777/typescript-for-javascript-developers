export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atshshi';
  static lastName: string = 'Ishida';

  static work(){
 // return 'Hey, guys! This is Atshshi!'
    return `Hey, guys! ${this.firstName}`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
