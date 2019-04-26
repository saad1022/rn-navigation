import React from 'react';
import {StyleSheet,Image} from 'react-native';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './src/screens/Explore';
import Saved from './src/screens/Saved';
import Trips from './src/screens/Trips';
import Inbox from './src/screens/Inbox';
import Profile from './src/screens/Profile';

class App extends React.Component {
    render(){
        return(
           <AppContainer />
        );
    }
}

export default App;

const navigatior = createBottomTabNavigator(
    {
        Explore: {
            screen: Explore,
            navigationOptions: {
                tabBarLabel: 'EXPLORE',
                tabBarIcon: ({ tintColor }) => (
                    <Icon 
                        name="ios-search"
                        color={tintColor}
                        size={24}
                    />     
                )
            }
        },
        Saved: {
            screen: Saved,
            navigationOptions: {
                tabBarLabel: 'Saved',
                tabBarIcon: ({ tintColor }) => (
                    <Icon 
                        name="ios-heart"
                        color={tintColor}
                        size={24}
                    />     
                )
            }
        },
        Trips: {
            screen: Trips,
            navigationOptions: {
                tabBarLabel: 'Trips',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./src/img/airbnb.png')}
                        style={{
                            height: 24,
                            width: 24,  
                            tintColor: tintColor
                        }}
                    />     
                )
            }
        },
        Inbox: {
            screen: Inbox,
            navigationOptions: {
                tabBarLabel: 'Inbox',
                tabBarIcon: ({ tintColor }) => (
                    <Icon 
                        name="ios-chatboxes"
                        color={tintColor}
                        size={24}
                    />     
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Icon 
                        name="ios-person"
                        color={tintColor}
                        size={24}
                    />     
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                //For IOS
                // shadowOffset: {width:5,height:3},
                // shadowColor: 'black',
                // shadowOpacity: 0.5
                //For ANDROID
                elevation: 5
            }
        }
    }
);

const AppContainer = createAppContainer(navigatior);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        
    }
});