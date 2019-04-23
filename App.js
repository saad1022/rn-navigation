import  React  from 'react';
import {Text , View , Button , ScrollView , StyleSheet} from 'react-native';

import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createBottomTabNavigator,createStackNavigator} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

//Welcome Screen
class WelcomeScreen extends React.Component {
    render(){
        return(
           <View style={styles.container}>
               <Button title="Login" onPress={() => this.props.navigation.navigate('Dashboard')} />
               <Button title="Sign Up" onPress={() => alert('button pressed')} />
           </View>

        );
    }
}
//Dashboard Screen
class DashboardScreen extends React.Component {
    render(){
        return(
           <View style={styles.container}>
               <Text>Dashboard Screen</Text>
           </View>
        );
    }
}
//Feed Screen
class FeedScreen extends React.Component {
    render(){
        return(
           <View style={styles.container}>
               <Text>Feed Screen</Text>
           </View>
        );
    }
}
//Profile Screen
class ProfileScreen extends React.Component {
    render(){
        return(
           <View style={styles.container}>
               <Text>Profile Screen</Text>
           </View>
        );
    }
}
//Settings Screen
class SettingsScreen extends React.Component {
    render(){
        return(
           <View style={styles.container}>
               <Text>Settings Screen</Text>
           </View>
        );
    }
}

class App extends React.Component {
    render(){
        return(
           <AppContainer />
        );
    }
}
export default App;




//Bottom Tab Navigator
const DashboardTabNavigator = createBottomTabNavigator(
    {
        //Path For Screens
        Feed: FeedScreen,
        Profile: ProfileScreen,
        Settings: SettingsScreen
    },
    {
        navigationOptions: ({ navigation }) => {
            //Get the index of current active tab
            const { routeName  } = navigation.state.routes[navigation.state.index];
            return  {
                headerTitle: routeName
            };

        }
    }
);

//Dashboard Stack Navigator
const DashboardStackNavigator = createStackNavigator(
    {
        //Path For Screens
        DashboardTabNavigator: DashboardTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return  {
                headerLeft:(
                    <Ionicons 
                    style={{ paddingLeft: 10}} 
                    onPress={() =>  navigation.openDrawer()} 
                    name="md-menu" size={30} 
                    />
                ) 
            };

        }
    }
);

//Drawer Navigator
const AppDrawNavigator = createDrawerNavigator(
    {
        //Path For Screens
        Dashboard: DashboardStackNavigator
    }
);

//Switch Navigator
const AppSwitchNavigator = createSwitchNavigator(
    {
        //Path For Screens
    Welcome: WelcomeScreen,
    Dashboard: AppDrawNavigator
    }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
});