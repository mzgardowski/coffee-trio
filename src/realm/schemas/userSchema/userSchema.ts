import type Realm from 'realm';
import { COFFEE_SCHEMA } from 'src/realm/schemas/coffeeSchema/coffeeSchema';

const USER_SCHEMA = 'User';

export const UserSchema: Realm.ObjectSchema = {
  name: USER_SCHEMA,
  primaryKey: '_id',
  properties: {
    _id: 'string',
    firstName: 'string',
    lastName: 'string',
    favCoffees: { type: 'list', objectType: `${COFFEE_SCHEMA}` },
  },
};
