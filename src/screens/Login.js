import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        Button, 
        TextInput,
        Image, 
        StatusBar, 
        TouchableHighlight, ScrollView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Signup from './signup';
class HomeScreen extends Component {
constructor(){
  super()
  this.state = {
    contador : 0,
    usuario: "",
    clave: "",
    mensaje: '',
    errorMessage: ''
  }
 
}


  static navigationOptions = {
    title: 'Welcome',
    header: null
  };
    render() {
      return (        
        <View style={{backgroundColor:"#212121", flex:1}}>
        <ScrollView style={styles.estiloScroll}>
        
        <StatusBar
        backgroundColor="#212121"
        barStyle="light-content"/>
        
        <View style={{alignItems: 'center', justifyContent: 'center',height:150, backgroundColor:"#212121"}}>
        <Text style={styles.tituloFLET}>FLET</Text>
        </View>
        <View style={styles.container}>
        <TextInput style={styles.textosLogin}           
          underlineColorAndroid='#4ccfe0'
          placeholder="correo"
          placeholderTextColor='#4ccfe0'
        />
          
        <TextInput           
          style={styles.textosLogin} 
          placeholderTextColor='#4ccfe0'
          underlineColorAndroid="#4ccfe0" 
          placeholder="contraseña"
          />
          <View style={styles.btnLogin}>
            <Button 
              color= '#4ccfe0'
              title="Log In"
              
              onPress={(ingresar)}
            />  
          </View>
        <Text style={styles.forgotText} 
          onPress={(ingresar)}>¿Olvidaste tu contraseña?
        </Text>  

         
          <Text style={[styles.forgotText, this.state.colorTexto]} 
          onPress={()=> this.props.navigation.navigate('Registro')}>¿Nuevo usuario? Registrate
        </Text> 
        </View>
        </ScrollView>        
      </View>

      
      );
    }
  }


  const ingresar = () =>{
    alert("faste");
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#212121'
    },
    estiloScroll: {
      marginRight: 0,
      marginLeft: 0,
      marginBottom: 0
    },
   tituloFLET: {
     fontSize: 70,
     color:"#FFFFFF"
   },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: '#83C587'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      marginTop:0,
    },
    logo: {
      width: 150,
      height: 150,
    },
    textosLogin: {
      width: 300,
      color: '#83C587',
      marginTop: 20,
      
    },
    forgotText: {
      fontSize:12,
      textAlign: 'center',
      marginTop: 0,
      color: '#c2c2c2',
    },
    textoOR:{
      fontSize: 15,
      textAlign: 'center',
      color: '#83C587'
    },
    btnLogin: {
      width: 300,
      color:"white",
      height: 50,
      marginTop: 50,
    },
    btnFacebook: {
      width: 300,
      height: 80,
      marginTop: 10
    }
  });
  
  
  const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Registro: Signup,

    },{initialRouteName: 'Home',},
  );

  const Login = createAppContainer(RootStack);
  
  export default Login;


