import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps96397Navigator from '../features/Maps96397/navigator';
import Add-Item96396Navigator from '../features/Add-Item96396/navigator';
import Maps96392Navigator from '../features/Maps96392/navigator';
import UserProfile96388Navigator from '../features/UserProfile96388/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps96397: { screen: Maps96397Navigator },
Add-Item96396: { screen: Add-Item96396Navigator },
Maps96392: { screen: Maps96392Navigator },
UserProfile96388: { screen: UserProfile96388Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
