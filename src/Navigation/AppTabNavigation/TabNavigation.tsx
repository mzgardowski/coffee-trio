import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/Pages/HomeScreen/HomeScreen';
import SearchScreen from 'src/Pages/SearchScreen/SearchScreen';
import FavoritesScreen from 'src/Pages/FavoritesScreen/FavoritesScreen';
import AccountScreen from 'src/Pages/AccountScreen/AccountScreen';
import { type RootStackParamList } from 'src/Navigation/types';
import { StyleSheet } from 'react-native';
import { Spacing } from 'src/utils/spacing';
import { colors } from 'src/utils/colors';
import HomeIcon from 'src/assets/icons/HomeIcon';
import PersonIcon from 'src/assets/icons/PersonIcon';
import SearchIcon from 'src/assets/icons/SearchIcon';
import StarIcon from 'src/assets/icons/StarIcon';
import Typography from 'src/Components/Typography/Typography';

const TabNavigation = createBottomTabNavigator<RootStackParamList>();

const defaultScreenOptions = {
  headerShown: false,
};

const iconSize = 30;

const AppTabNavigation = () => {
  return (
    <TabNavigation.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.item,
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: colors.primary_button,
        headerShown: false,
      }}>
      <TabNavigation.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <HomeIcon width={iconSize} fill={colors.icon_white} />
          ),
          tabBarLabelStyle: styles.label,
          tabBarLabel: ({ focused }) => {
            return focused && <Typography type="small1" text="Home" />;
          },
          ...defaultScreenOptions,
        }}
      />
      <TabNavigation.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <SearchIcon width={iconSize} fill={colors.icon_white} />
          ),
          tabBarLabel: ({ focused }) => {
            return focused && <Typography type="small1" text="Search" />;
          },
          tabBarLabelStyle: styles.label,
          ...defaultScreenOptions,
        }}
      />
      <TabNavigation.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarIcon: () => (
            <StarIcon width={iconSize} fill={colors.icon_white} />
          ),
          tabBarLabelStyle: styles.label,
          tabBarLabel: ({ focused }) => {
            return focused && <Typography type="small1" text="Favorite" />;
          },
          ...defaultScreenOptions,
        }}
      />
      <TabNavigation.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <PersonIcon width={iconSize} fill={colors.icon_white} />
          ),
          tabBarLabelStyle: styles.label,
          tabBarLabel: ({ focused }) => {
            return focused && <Typography type="small1" text="Account" />;
          },
          tabBarAccessibilityLabel: 'lol',
          ...defaultScreenOptions,
        }}
      />
    </TabNavigation.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    marginHorizontal: Spacing.s16,
    marginBottom: Spacing.s12,
    height: 80,
    borderRadius: 18,
    backgroundColor: colors.secondary_bacground,
  },
  item: {
    margin: Spacing.s8,
    padding: Spacing.s4,
    borderRadius: 16,
  },
  label: {
    color: colors.text_white,
  },
});

export default AppTabNavigation;
