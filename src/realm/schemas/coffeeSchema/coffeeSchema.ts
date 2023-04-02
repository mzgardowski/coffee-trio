import type Realm from 'realm';

export const COFFEELIST_SCHEMA = 'CoffeeList';
export const COFFEE_SCHEMA = 'Coffee';
export const COFFEEMAKESTEPS_SCHEMA = 'CoffeeMakeSteps';

export const CoffeeListSchema: Realm.ObjectSchema = {
  name: COFFEELIST_SCHEMA,
  primaryKey: '_id',
  properties: {
    _id: 'string',
    coffeeType: 'string',
    coffees: { type: 'list', objectType: COFFEE_SCHEMA },
  },
};

export const CoffeeSchema: Realm.ObjectSchema = {
  name: COFFEE_SCHEMA,
  primaryKey: '_id',
  properties: {
    _id: 'string',
    name: 'string',
    desc: 'string',
    prepareTime: 'int',
    steps: { type: 'list', objectType: COFFEEMAKESTEPS_SCHEMA },
  },
};

export const CoffeeMakeSteps: Realm.ObjectSchema = {
  name: COFFEEMAKESTEPS_SCHEMA,
  primaryKey: '_id',
  properties: {
    _id: 'string',
    stepNum: 'int',
    stepDesc: 'string',
  },
};
