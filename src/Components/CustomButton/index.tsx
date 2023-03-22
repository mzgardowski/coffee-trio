import React from 'react';
import { Button, type ButtonProps } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { colors } from 'src/assets/colors';

type CustomButtonTypes = 'primary' | 'secondary' | 'with-icon';

interface CustomButtonInterface extends ButtonProps {
  typeBtn?: CustomButtonTypes;
  text: string;
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
  },
  textStyle: {
    fontFamily: '',
  },
  containerStyle: { borderRadius: 20 },
  primaryButton: {
    backgroundColor: colors.primary_button,
  },
  secondaryButton: {
    borderColor: colors.primary_button,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderWidth: 1,
  },
  primaryTextButton: {
    color: colors.text_white,
  },
  secondaryTextButton: {
    color: colors.text_secondary,
  },
});

const CustomButton = ({
  typeBtn,
  text,
  ...restProps
}: CustomButtonInterface) => {
  switch (typeBtn) {
    case 'primary':
      return (
        <Button
          title={text}
          buttonStyle={[styles.buttonStyle, styles.primaryButton]}
          titleStyle={[styles.textStyle, styles.primaryTextButton]}
          containerStyle={styles.containerStyle}
          {...restProps}
        />
      );
    case 'secondary':
      return (
        <Button
          title={text}
          buttonStyle={[styles.buttonStyle, styles.secondaryButton]}
          titleStyle={[styles.textStyle, styles.secondaryTextButton]}
          containerStyle={styles.containerStyle}
          {...restProps}
        />
      );
    default:
      return <Button />;
  }
};

export default CustomButton;
