import React from 'react';
import {StyleSheet, TextInput, View, SafeAreaView,Platform,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Explore extends React.Component {
    
    componentWillMount() {
        this.startHeaderHeight = 80
        if(Platform.OS === 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    
    render() {
        return (

            //For ios screen corner
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    
                    {/* header */}
                    <View style={styles.header}>
                            <View style={{
                                    flexDirection: 'row',
                                    padding:10,
                                    backgroundColor:'white',
                                    marginHorizontal:20,
                                    // shadowOffset:{width:0,height:0},
                                    // shadowColor: 'black',
                                    // shadowOpacity: 0.2,
                                    elevation:1,
                                    marginTop: Platform.OS == 'android' ? 30 : null
                                    }}>
                                <Icon
                                    name= "ios-search"
                                    size= {20}
                                    style= {{ marginRight: 10}}
                                /> 
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder= "Try London"
                                    placeholderTextColor= "grey"
                                    style={{flex:1,fontWeight:'700',backgroundColor:'white'}}  
                                />     
                            </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
  }

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height:this.startHeaderHeight,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    }
});