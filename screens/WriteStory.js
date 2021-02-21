import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class WriteStoryScree extends React.Component {
    constructor(){
        super();
        this.state={
          stories:''
        }
      }
    updateStory=()=>{
        db.collection('stories').doc().update({
          })
    }
render(){
    return(
        <View>
            <TouchableOpacity>
                <Text>
                    Write Story
                </Text>
            </TouchableOpacity>
            <TextInput
            multiline={true}
            placeholder='Write Story Here'
            />
            <TouchableOpacity
            onPress={()=>{
                this.updateStory()
            }}
            >
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
}
}