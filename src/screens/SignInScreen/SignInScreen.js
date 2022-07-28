import React, {useState} from "react";
import {Text, View, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Logo from '../../../assets/images/logo_react.png'
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn('Sign In');
  }
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  }
  const onSignInWithFacebookPressed = () => {
    console.warn('Sign In With Facebook Pressed');
  }
  const onSignInWithGooglePressed = () => {
    console.warn('Sign In With Google Pressed');
  }
  const onSignInWithApplePressed = () => {
    console.warn('Sign In With Apple Pressed');
  }
  const onCreateNowPressed = () => {
    console.warn('Create Now Button Pressed');
  }
    return( 
      <ScrollView>
        <View style = {styles.root}>
            <Image source={Logo} style = {[styles.logo, {height: height*0.3}]} resizeMode= "contain"/>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton buttonText="LOGIN" onPress={onSignInPressed}/>
            <CustomButton buttonText="Forgot Password ?" onPress={onForgotPasswordPressed} type = "TERTIARY"/>

            <CustomButton buttonText="Sign in with Facebook" onPress={onSignInWithFacebookPressed} bgColor="#E7EAF4" fgColor="#4765A9"/>
            <CustomButton buttonText="Sign in with Google" onPress={onSignInWithGooglePressed} bgColor="#FAE9EA" fgColor="#DD4D44"/>
            <CustomButton buttonText="Sign in with Apple" onPress={onSignInWithApplePressed} bgColor="#e3e3e3" fgColor="#363636"/>
            <CustomButton buttonText="Don't have an account? Create now" onPress={onCreateNowPressed} type = "TERTIARY"/>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '80%',
    maxHeight: 200,
    maxWidth: 300,
  },
});

export default SignInScreen
