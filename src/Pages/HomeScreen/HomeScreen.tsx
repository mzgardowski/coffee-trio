import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import HomeItem from 'src/Components/HomeItem';
import Typography from 'src/Components/Typography/Typography';
import { colors } from 'src/utils/colors';
import { Spacing } from 'src/utils/spacing';

const DATA = [
  { id: 1, title: 'Espresso', fav: false },
  { id: 2, title: 'Americano', fav: true },
  { id: 3, title: 'Flat White', fav: false },
  { id: 4, title: 'Cappucino', fav: false },
  { id: 5, title: 'Turkish', fav: true },
  { id: 6, title: 'Latte', fav: true },
  { id: 7, title: 'Espresso', fav: false },
  { id: 8, title: 'Espresso', fav: true },
  { id: 9, title: 'Espresso', fav: true },
  { id: 10, title: 'Espresso', fav: false },
  { id: 11, title: 'Espresso', fav: true },
  { id: 12, title: 'Espresso', fav: true },
];

export type ItemDataType = { id: number; fav: boolean; title: string };

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Typography type="headline2" text="Hello Mateusz" />
          </View>
        }
        data={DATA}
        renderItem={({ item }) => (
          <HomeItem title={item.title} fav={item.fav} id={item.id} />
        )}
        // keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: Spacing.s8,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary_background,
    flex: 1,
    paddingHorizontal: Spacing.s16,
  },
  header: {
    marginVertical: Spacing.s20,
    flexDirection: 'row',
  },
});

export default HomeScreen;
