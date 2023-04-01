import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { colors } from 'src/utils/colors';
import { Spacing } from 'src/utils/spacing';
import Typography from 'src/Components/Typography';
import CustomButton from 'src/Components/CustomButton';
import StarIcon from 'src/assets/icons/StarIcon';
import { type ItemDataType } from 'src/Pages/HomeScreen/HomeScreen';
import CheckedStarIcon from 'src/assets/icons/CheckedStarIcon';

const HomeItem = ({ title, fav }: ItemDataType) => {
  const [favourite, setFavorite] = useState<boolean>(fav);

  const handleChangeFavorite = () => {
    setFavorite(prev => !prev);
  };
  return (
    <View style={styles.item}>
      <Image
        source={require('src/assets/images/espressoImage.jpg')}
        style={styles.image}
      />
      <View style={styles.textBox}>
        <Typography type="normal1" text={title} />
        <Typography type="small1" text="Time: 10m" />
      </View>
      <View style={styles.buttonBox}>
        <CustomButton
          typeBtn="primary"
          title={<Typography type="button1" text="More" />}
        />
        <Pressable
          onPress={handleChangeFavorite}
          style={({ pressed }) => [
            styles.pressableFavourite,
            {
              backgroundColor: pressed
                ? colors.secondary_border
                : 'rgba(52, 52, 52, 0.0)',
            },
          ]}>
          {favourite ? (
            <CheckedStarIcon
              height={30}
              width={30}
              fill={colors.secondary_border}
            />
          ) : (
            <StarIcon height={30} width={30} fill={colors.secondary_border} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.secondary_bacground,
    padding: Spacing.s8,
    borderRadius: 16,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 16,
  },
  textBox: {
    marginLeft: Spacing.s4,
  },
  buttonBox: {
    marginTop: Spacing.s8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressableFavourite: {
    borderWidth: 1,
    borderColor: colors.secondary_border,
    // justifyContent: 'center',
    padding: Spacing.s4,
    borderRadius: 20,
  },
});

export default HomeItem;
