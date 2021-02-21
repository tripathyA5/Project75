import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class Searchscreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
    
        search:''
      }
    }
    

    searchBarFunction = async =()=>{
      <View>
        <View style={styles.container}>
        <View style={styles.searchBar}>
      <TextInput 
        style ={styles.bar}
        placeholder = "Enter Book Id or Student Id"
        onChangeText={(text)=>{this.setState({search:text})}}/>
        <TouchableOpacity
          style = {styles.searchButton}
          onPress={()=>{this.searchTransactions(this.state.search)}}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      </View>
        </View>
    }
  }