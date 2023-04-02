import { type CoffeeInterface } from 'src/realm/schemas/coffeeSchema/types';

export interface UserInterface {
  _id: string;
  firstName: string;
  lastName: string;
  favCoffees: CoffeeInterface;
}
