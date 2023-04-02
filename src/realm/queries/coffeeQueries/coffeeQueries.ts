import { COFFEE_SCHEMA } from 'src/realm/schemas/coffeeSchema/coffeeSchema';

export const addNewCoffee = ({ RealmContext }: { RealmContext: any }) => {
  const { useQuery } = RealmContext;
  const coffees = useQuery(COFFEE_SCHEMA);
  console.log('Coffer', coffees);
};
