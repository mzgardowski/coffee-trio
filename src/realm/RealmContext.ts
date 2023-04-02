import { createRealmContext } from '@realm/react';
import { UserSchema } from 'src/realm/schemas/userSchema/userSchema';
import {
  CoffeeListSchema,
  CoffeeMakeSteps,
  CoffeeSchema,
} from 'src/realm/schemas/coffeeSchema/coffeeSchema';

const RealmContext = createRealmContext({
  schema: [UserSchema, CoffeeListSchema, CoffeeSchema, CoffeeMakeSteps],
});

export default RealmContext;
