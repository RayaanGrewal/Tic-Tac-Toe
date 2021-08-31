import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';


let itemArr = new Array(9).fill('empty')
//e,e,e,e,e,e,e,e,e

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isCross: false,
      winMessage: ""
    };
  }
  drawItem = itemNo =>
  {
    if (itemArr[itemNo] ==='empty'){
      itemArr[itemNo] = this.state.isCross; //start the game from false for the circle
      this.setState({isCross: !this.state.isCross})//turn it opp for the next player
    }
    this.winGame()
  }
  chooseItemIcon= itemNo =>{
    if (itemArr[itemNo] !=="empty"){
      return itemArr[itemNo] ? "cross" : "circle"
    }
    return "pencil"
  }
  chooseItemColor= itemNo =>
  {
    if (itemArr[itemNo] !=="empty"){
      return itemArr[itemNo] ? "#E71C23" : "#4834DF"
    }
    return "black"
  }
  resetGame=()=>
  {
    itemArr.fill("empty")
    this.setState({winMessage: ''})
    //force update to Component
    this.forceUpdate();
    this.setState({isCross:false})
  }
  winGame = () =>
  {
   if ((itemArr[0] !== "empty") && (itemArr[0] === itemArr[1]) && (itemArr[1]===itemArr[2]))
   {
     this.setState({winMessage: (itemArr[0] ? "Cross" : "Circle").concat(' has won')});
   }
   else if ((itemArr[3] !== "empty") && (itemArr[3] === itemArr[4]) && (itemArr[4]===itemArr[5]))
   {
     this.setState({winMessage: (itemArr[3] ? "Cross" : "Circle").concat(' has won')})
   }

   else if ((itemArr[6] !== "empty") && (itemArr[6] === itemArr[7]) && (itemArr[7]===itemArr[8]))
   {
     this.setState({winMessage: (itemArr[6] ? "Cross" : "circle").concat(' has won')})
   }
   else if ((itemArr[0] !== "empty") && (itemArr[0] === itemArr[4]) && (itemArr[4]===itemArr[8]))
   {
     this.setState({winMessage: (itemArr[0] ? "Cross" : "Circle").concat(' has won')})
   }
   else if ((itemArr[2] !== "empty") && (itemArr[2] === itemArr[4]) && (itemArr[4]===itemArr[6]))
   {
     this.setState({winMessage: (itemArr[2] ? "Cross" : "Circle").concat(' has won')})
   }
   else if ((itemArr[0] !== "empty") && (itemArr[0] === itemArr[3]) && (itemArr[3]===itemArr[6]))
   {
     this.setState({winMessage: (itemArr[0] ? "Cross" : "Circle").concat(' has won')})
   }
   else if ((itemArr[1] !== "empty") && (itemArr[1] === itemArr[4]) && (itemArr[4]===itemArr[7]))
   {
     this.setState({winMessage: (itemArr[1] ? "Cross" : "Circle").concat(' has won')})
   }
   else if ((itemArr[2] !== "empty") && (itemArr[2] === itemArr[5]) && (itemArr[5]===itemArr[8]))
   {
     this.setState({winMessage: (itemArr[2] ? "Cross" : "Circle").concat(' has won')})
   }



  }
//---------------RENDER---------------


  render() {
    return (
      <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.grid}>

          <View style={styles.row}>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(0)}}>
                <Entypo name={this.chooseItemIcon(0)} size={50} color={this.chooseItemColor(0)}/>
              </TouchableOpacity>

            </View>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(1)}}>
                <Entypo name={this.chooseItemIcon(1)} size={50} color={this.chooseItemColor(1)}/>
              </TouchableOpacity>

            </View>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(2)}}>
                <Entypo name={this.chooseItemIcon(2)} size={50} color={this.chooseItemColor(2)}/>
              </TouchableOpacity>

            </View>



          </View>
          <View style={styles.row}>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(3)}}>
                <Entypo name={this.chooseItemIcon(3)} size={50} color={this.chooseItemColor(3)}/>
              </TouchableOpacity>

            </View>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(4)}}>
                <Entypo name={this.chooseItemIcon(4)} size={50} color={this.chooseItemColor(4)}/>
              </TouchableOpacity>

            </View>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(5)}}>
                <Entypo name={this.chooseItemIcon(5)} size={50} color={this.chooseItemColor(5)}/>
              </TouchableOpacity>

            </View>



          </View>
          <View style={styles.row}>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(6)}}>
                <Entypo name={this.chooseItemIcon(6)} size={50} color={this.chooseItemColor(6)}/>
              </TouchableOpacity>

            </View>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(7)}}>
                <Entypo name={this.chooseItemIcon(7)} size={50} color={this.chooseItemColor(7)}/>
              </TouchableOpacity>

            </View>
            <View style={styles.item}>

              <TouchableOpacity onPress={()=>{this.drawItem(8)}}>
                <Entypo name={this.chooseItemIcon(8)} size={50} color={this.chooseItemColor(8)}/>
              </TouchableOpacity>

            </View>
          </View>



        </View>
        <Text style={styles.winStyle}> {this.state.winMessage}</Text>
        <Button style={{backgroundColor: "#0066ff"}}onPress={this.resetGame}>
      <Text style={styles.btnText}>Reset</Text>
    </Button>
      </View>

      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid:{
    flexWrap: "wrap",
    backgroundColor: "#49fb35"

  },
  row:{
    flexDirection : "row"
  },item:{
    borderWidth: 2,
    borderColor: "black",
    padding: 30
  },
  winStyle:{
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
    color:"#0099ff"
  },
  btnText:{
    color:"#ff0000",
    fontWeight: "bold",
    paddingLeft: 120,
    paddingRight: 120,
    margin: 5,
    fontSize: 18,
  }
});
