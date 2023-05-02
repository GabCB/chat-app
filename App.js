import { StyleSheet} from 'react-native';

//import the screens
import Start from './components/Start';
import Chat from './components/Chat';

//import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//create the navigator

const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const App = () => {
  //My web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAzqM3mX3019j0enUpSIeFN59lxXiRw848",
    authDomain: "chat-app-e4b99.firebaseapp.com",
    projectId: "chat-app-e4b99",
    storageBucket: "chat-app-e4b99.appspot.com",
    messagingSenderId: "544574586637",
    appId: "1:544574586637:web:e186f89956dd0db6a8fa44"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={Start}/>
        <Stack.Screen
          name="Chat">
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
