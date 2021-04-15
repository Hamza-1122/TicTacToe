import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';


var turn = "O"

export default function App() {

  const [val1,updateval1]  = useState("")
  const [val2,updateval2]  = useState("")
  const [val3,updateval3]  = useState("")
  const [val4,updateval4]  = useState("")
  const [val5,updateval5]  = useState("")
  const [val6,updateval6]  = useState("")
  const [val7,updateval7]  = useState("")
  const [val8,updateval8]  = useState("")
  const [val9,updateval9]  = useState("") 
  
  return (
    <View style={styles.container} >
      <View style = {{flexDirection: 'row'}}> 

      <Pressable style = {styles.button} onPress = {()=>{
        if (turn == "O"){
          updateval1("O")  
        }
        else{
          updateval1("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     }

     >
       <Text style = {{fontSize: 50}}>
         {val1}
       </Text>

      </Pressable>

      
      <Pressable style = {styles.button}   onPress = {()=>{
        if (turn == "O"){
          updateval2("O")  
        }
        else{
          updateval2("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     } >
       <Text style = {{fontSize: 50}}>
         {val2}
       </Text>



       
        
      </Pressable>

      
      <Pressable style = {styles.button}  onPress = {()=>{
        if (turn == "O"){
          updateval3("O")  
        }
        else{
          updateval3("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     }>


<Text style = {{fontSize: 50}}>
         {val3}
       </Text>

        
      </Pressable>

      </View>

      <View style = {{flexDirection: 'row'}}> 

      <Pressable style = {styles.button}  onPress = {()=>{
        if (turn == "O"){
          updateval4("O")  
        }
        else{
          updateval4("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     }>

<Text style = {{fontSize: 50}}>
         {val4}
       </Text>


      </Pressable>

      
      <Pressable style = {styles.button}  onPress = {()=>{
        if (turn == "O"){
          updateval5("O")  
        }
        else{
          updateval5("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     }>

<Text style = {{fontSize: 50}}>
         {val5}
       </Text>

        
      </Pressable>

      
      <Pressable style = {styles.button} onPress = {()=>{
        if (turn == "O"){
          updateval6("O")  
        }
        else{
          updateval6("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     }>

<Text style = {{fontSize: 50}}>
         {val6}
       </Text>

        
      </Pressable>

      </View>

      <View style = {{flexDirection: 'row'}}> 

      <Pressable style = {styles.button} onPress = {()=>{
        if (turn == "O"){
          updateval7("O")  
        }
        else{
          updateval7("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     }>

<Text style = {{fontSize: 50}}>
         {val7}
       </Text>


      </Pressable>

      
      <Pressable style = {styles.button}  onPress = {()=>{
        if (turn == "O"){
          updateval8("O")  
        }
        else{
          updateval8("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     }>

<Text style = {{fontSize: 50}}>
         {val8}
       </Text>

        
      </Pressable>

      
      <Pressable style = {styles.button} onPress = {()=>{
        if (turn == "O"){
          updateval9("O")  
        }
        else{
          updateval9("X")
        }
        if(turn == "O"){
          turn = "X"
        }
        else{
          turn = "O"
        }
      }
     }>

<Text style = {{fontSize: 50}}>
         {val9}
       </Text>

        
      </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


   button : {
     height : 150,
     width: 150,
     borderWidth: 3,
      justifyContent: 'center', alignItems:'center'

   } 
});