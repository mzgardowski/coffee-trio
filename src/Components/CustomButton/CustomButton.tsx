import React from 'react';
import { Button, type ButtonProps } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { colors } from 'src/utils/colors';
import { Spacing } from 'src/utils/spacing';

type CustomButtonTypes = 'primary' | 'secondary' | 'with-icon';

interface CustomButtonInterface extends ButtonProps {
  typeBtn?: CustomButtonTypes;
}

const CustomButton = ({ typeBtn, ...restProps }: CustomButtonInterface) => {
  switch (typeBtn) {
    case 'primary':
      return (
        <Button
          buttonStyle={[styles.buttonStyle, styles.primaryButton]}
          titleStyle={[styles.primaryTextButton]}
          {...restProps}
        />
      );
    case 'secondary':
      return (
        <Button
          buttonStyle={[styles.buttonStyle, styles.secondaryButton]}
          titleStyle={[styles.secondaryTextButton]}
          {...restProps}
        />
      );
    default:
      return <Button />;
  }
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: Spacing.s8,
    borderRadius: 24,
    width: '100%',
  },
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

export default CustomButton;
