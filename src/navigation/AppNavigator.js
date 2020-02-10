import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//screens
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
//import IntroScreen from '../screens/IntroScreen';
import SignIn from "../screens/SignIn";
import AppDrawerNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator(
    { 
        //IntroScreen: IntroScreen,
        SignIn: SignIn,
    }, {
        defaultNavigationOptions: {
          headerShown: false
        }
    }
);

export default createAppContainer(createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        AuthLoading: AuthLoadingScreen,
        App: AppDrawerNavigator,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));