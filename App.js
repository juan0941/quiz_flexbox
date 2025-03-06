import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

   
      <View style={styles.box1}><Image style={styles.imgbox1} source={{uri:'https://images.daznservices.com/di/library/DAZN_News/d4/da/lamine-yamal-barcelona2408202_1exr1a051d68l1llrszd7d6ef2.jpg?t=-1014587391&w=800&quality=100'}}/></View>
      <View style={styles.row}>
        <View style={styles.box2}><Image style={styles.imgbox2} source={{uri:'https://i.pinimg.com/originals/13/ae/08/13ae08ec056a381c77bb276d96686926.jpg'}}/></View> 
        <View style={styles.box2}><Image style={styles.imgbox2} source={{uri:'https://i.pinimg.com/originals/13/ae/08/13ae08ec056a381c77bb276d96686926.jpg'}}/></View>
        <View style={styles.box2}><Image style={styles.imgbox2} source={{uri:'https://i.pinimg.com/originals/13/ae/08/13ae08ec056a381c77bb276d96686926.jpg'}}/></View>
      </View>
      <View style={styles.box3}><Image style={styles.imgbox3} source={{uri:'https://brandemia.org/sites/default/files/inline/images/fc_barcelona2.jpg'}}/></View>
      <View style={styles.row2}>
        <View style={styles.box4}><Image style={styles.imgbox4} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1I8w9S8A-kej8n_zwTwtiEZb5qFrlkY_PQ&s'}}/></View>
        <View style={styles.box4}><Image style={styles.imgbox4} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1I8w9S8A-kej8n_zwTwtiEZb5qFrlkY_PQ&s'}}/></View>
        <View style={styles.box4}><Image style={styles.imgbox4} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1I8w9S8A-kej8n_zwTwtiEZb5qFrlkY_PQ&s'}}/></View>
      </View>
      <View style={styles.row2}>
      <View style={styles.box4}><Image style={styles.imgbox4} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1I8w9S8A-kej8n_zwTwtiEZb5qFrlkY_PQ&s'}}/></View>
      <View style={styles.box4}><Image style={styles.imgbox4} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1I8w9S8A-kej8n_zwTwtiEZb5qFrlkY_PQ&s'}}/></View>
      <View style={styles.box4}><Image style={styles.imgbox4} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1I8w9S8A-kej8n_zwTwtiEZb5qFrlkY_PQ&s'}}/></View>
      </View>
    </View>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  box1: {
    width: 380,
    height: 190,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop:80,
    borderRadius: 20,
    
   
  },
  imgbox1:{
    width: 380,
    height: 190,
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',  
    justifyContent: 'space-around', 
    width: '100%',              
  },
  box2: {
    width: 100,
    height: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  imgbox2:{
    width: 100,
    height: 200,
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 15,
  },
  box3: {
    width: 380,
    height: 70,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop:20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'red',
  },
  imgbox3:{
    width: 380,
    height: 70,
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 20,
  },
  row2: {
    flexDirection: 'row',  
    justifyContent: 'space-around', 
    width: '100%',              
  },
  box4: {
    width: 100,
    height: 100,
    backgroundColor: 'blue', // Color diferente para distinguir
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  imgbox4:{
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 20,
  },
});
