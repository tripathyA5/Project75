import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Searchscreen from './screens/serachScreen'
import ReadStory from './screens/ReadStory';
import WriteStory from './screens/WriteStory'
import LoginScreen from './screens/LoginScreen'
export default class App extends React.Component {
  render(){
    return (

        <AppContainer/>

    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStory},
  Read: {screen: ReadStory},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
        <Text>
          Write Story
        </Text>
        )

      }
      else if(routeName === "ReadStory"){
        return(
          <Text>
            Read Story
          </Text>
        )

      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  TabNavigatpr:{screen: TabNavigator}
  })
  
  const AppContainer =  createAppContainer(switchNavigator);


 

