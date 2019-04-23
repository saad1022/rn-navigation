import  React  from 'react';
import {Text , View , Button , ScrollView , StyleSheet} from 'react-native';

import {createStackNavigator,createAppContainer} from 'react-navigation';


class Home extends React.Component {
    //custom styling for screens in their classes
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'blue'
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Home</Text>
                <Button
                title="Go to Details"
                onPress={()=> this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <Text>Details</Text>
            <Button
                title="Go to Details..again"
                //push--go to req path again if already there
                onPress={()=> this.props.navigation.push('Details')}
            />
            <Button
                title="Go to Home"
                //navigate--go to req path mentioned
                onPress={()=> this.props.navigation.navigate('Home')}
            />
            <Button
                title="Go Back"
                onPress={()=> this.props.navigation.goBack()}
            />
            </View>
        );
    }
}

//Navigator
const AppStackNavigator = createStackNavigator(
    {
        //Path For Screens
         Home: Home,
         Details: DetailsScreen,
    },
    {
        //default options for navigator
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'orange'
            }
        }
    }
);

const AppContainer = createAppContainer(AppStackNavigator);


export default class App extends React.Component {
    render(){
        return(
           <AppContainer />
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
});