import { createStackNavigator, createAppContainer } from 'react-navigation';

import Launch from '../screens/Launch';
import MainHome from './TabNavigationStack';

const RNApp = createStackNavigator(
  {
    Launch: {
      screen: Launch
    }
  },
  {
    initialRouteName: 'Launch',
    defaultNavigationOptions: { header: null, gesturesEnabled: false }
  }
);

export default createAppContainer(RNApp);
