export {};

class VisaCard {
  constructor(public readonly owner: string){
  }
}

let myVisaCard = new VisaCard('tom');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'johny';
