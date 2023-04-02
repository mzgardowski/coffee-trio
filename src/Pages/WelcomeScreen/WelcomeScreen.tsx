import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from 'src/Components/CustomButton';
import Typography from 'src/Components/Typography';
import CoffeeCupIcon from 'src/assets/icons/CoffeeCupIcon';
import GoodMoodIcon from 'src/assets/icons/GoodMoodIcon';
import GroupIcon from 'src/assets/icons/GroupIcon';
import HangOutIcon from 'src/assets/icons/HangOutIcon';
import { colors } from 'src/utils/colors';
import { Spacing } from 'src/utils/spacing';
import RealmContext from 'src/realm/RealmContext';
import uuid from 'react-native-uuid';
import {
  COFFEELIST_SCHEMA,
  COFFEE_SCHEMA,
  COFFEEMAKESTEPS_SCHEMA,
} from 'src/realm/schemas/coffeeSchema/coffeeSchema';
import { type RootStacknavigation } from 'src/Navigation/types';

const WelcomeScreen = ({
  navigation,
}: RootStacknavigation<'WelcomeScreen'>) => {
  const { useRealm, useQuery } = RealmContext;
  const realm = useRealm();
  const coffeeList = useQuery(COFFEELIST_SCHEMA);
  console.log(coffeeList);
  const handleClick = () => {
    realm.write(() => {
      const step1 = realm.create(COFFEEMAKESTEPS_SCHEMA, {
        _id: uuid.v4(),
        stepNum: 1,
        stepDesc: 'Zmiel kawę',
      });
      const step2 = realm.create(COFFEEMAKESTEPS_SCHEMA, {
        _id: uuid.v4(),
        stepNum: 2,
        stepDesc: 'Dodaj sitko',
      });

      const coffee1 = realm.create(COFFEE_SCHEMA, {
        _id: uuid.v4(),
        name: 'Espresso',
        desc: 'Kawa włoska',
        prepareTime: 5,
        steps: [step1, step2],
      });

      const coffeelist = realm.create(COFFEELIST_SCHEMA, {
        _id: uuid.v4(),
        coffeeType: 'Bez mleka',
        coffees: [coffee1],
      });

      console.log(coffeelist);
    });

    // navigation.navigate('TabNavigation');
  };

  return (
    <View style={styles.background}>
      <View style={styles.contentContainer}>
        <View style={styles.logo}>
          <HangOutIcon width={100} height={100} />
          <Typography type="headline1" text="Coffee Trio" />
        </View>
        <View style={styles.boxGroup}>
          <View style={styles.box}>
            <CoffeeCupIcon fill={colors.icon_white} />
            <Typography type="normal2" text="Coffee" />
          </View>
          <View style={styles.box}>
            <GroupIcon fill={colors.icon_white} />
            <Typography type="normal2" text="Friends" />
          </View>
          <View style={styles.box}>
            <GoodMoodIcon fill={colors.icon_white} />
            <Typography type="normal2" text="Good mood" />
          </View>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <CustomButton
          onPress={handleClick}
          typeBtn="primary"
          title={<Typography type="button1" text="Let's Go" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.primary_background,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: Spacing.s32,
    alignItems: 'center',
    backgroundColor: colors.secondary_bacground,
    padding: Spacing.s12,
    borderRadius: 20,
  },
  boxGroup: {
    marginTop: Spacing.s32,
  },
  box: {
    margin: Spacing.s8,
    alignItems: 'center',
  },
  buttonArea: {
    margin: Spacing.s12,
  },
});

export default WelcomeScreen;
