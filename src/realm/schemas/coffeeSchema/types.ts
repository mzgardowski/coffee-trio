export interface CoffeeListInterface {
  _id: string;
  coffeeType: string;
  coffees: CoffeeInterface[];
}

export interface CoffeeInterface {
  _id: string;
  name: string;
  desc: string;
  prepareTime: number;
  steps: CoffeeMakeStepsInterface[];
}

export interface CoffeeMakeStepsInterface {
  _id: string;
  stepNum: number;
  stepDesc: string;
}
