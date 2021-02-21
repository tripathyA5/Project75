import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class Searchscreen extends React.Component {
    getRequestedBooksList =()=>{
        this.requestRef = db.collection("stories")
        .onSnapshot((snapshot)=>{
          var requestedStoriesList = snapshot.docs.map(document => document.data());
          this.setState({
            requestedStoriesList : requestedStoriesList
          });
        })
      }
    
      componentDidMount(){
        this.getRequesteStoriesList()
      }
    
      componentWillUnmount(){
        this.requestRef();
      }
    

render(){
    return(
        <Text>
            Search
        </Text>
    )
}
}
