import { useState } from 'react';
import { Alert, Image, ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  //Add signInUser function to login user anonymously
  const auth = getAuth();

  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const backgroundColor = {
    black: { backgroundColor: '#090C08'},
    purple: { backgroundColor: '#474055'},
    grey: { backgroundColor: '#8A95A5'},
    green: { backgroundColor: '#B9C6AE'}
  };

  const signInUser = () => {
    signInAnonymously(auth)
      .then(result => {
        navigation.navigate("Chat", { name: name, color: color, uid: result.user.uid });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      })
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background-image.png')} resizeMode='cover' style={styles.image}>
        <View style={styles.titlebox}>
          <Text style={styles.title}>Chat App</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.textcontainer}>
            <Image styles={styles.icon} source={require('..//assets/user-icon.png')}></Image>
            <TextInput
              style= {styles.textInput}
              value={name}
              onChangeText={setName}
              placeholder='Your name'
            />
          </View>
          <Text style={styles.chooseBackgroundText}>Choose background color: {color.backgroundColor}</Text>
          <View style={styles.colorBox}>
            <TouchableOpacity
              style={[styles.colorButton, backgroundColor.black, color === backgroundColor.black.backgroundColor ? styles.selectedColorButton : '']}
              onPress={() => setColor(backgroundColor.black.backgroundColor)} >
            </TouchableOpacity>
            <TouchableOpacity
              style= {[styles.colorButton, backgroundColor.purple, color === backgroundColor.purple.backgroundColor ? styles.selectedColorButton : '']}
              onPress={() => setColor(backgroundColor.purple.backgroundColor)} >
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorButton, backgroundColor.grey, color === backgroundColor.grey.backgroundColor ? styles.selectedColorButton : '']}
              onPress={() => setColor(backgroundColor.grey.backgroundColor)} >
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.colorButton, backgroundColor.green, color === backgroundColor.green.backgroundColor ? styles.selectedColorButton : '']}
              onPress={() => setColor(backgroundColor.green.backgroundColor)} >
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.chatButton}
            onPress={signInUser} >
            <Text style={styles.chatButtonText}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/*Fix keyboard hides the message input field on Android*/}
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
      {/*Fix keyboard hides the message input field on iOS*/}
      { Platform.OS === "ios" ? <KeyboardAvoidingView behavior="padding" /> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlebox: {
    flex: 56,
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 60
  },
  box: {
    flex: 44,
    backgroundColor:'#fff',
    padding: '6%'
  },
  image: {
    flex: 1,
    padding: '6%'
  },
  textcontainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
    marginBottom: 30
  },
  chooseBackgroundText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 0.5
  },
  icon: {
    height: 20,
    width: 20
  },
  textInput: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 0.5
  },
  colorBox: {
    flexDirection: 'row',
    marginBottom: 30
  },
  colorButton: {
    height: 50,
    width: 50,
    margin: 15,
    padding: 5,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'tranparent'
  },
  selectedColorButton: {
    borderColor: '#555'
  },
  chatButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center'
  },
  chatButton: {
    padding: 10,
    backgroundColor: '#757083',
    alignContent: 'center'
  }
});


export default Start;
