import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
//Import Gifted Chat library
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

//Import elements to fetch messages from database
import { collection, getDocs, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({ db, route, navigation }) => {
  const { name, color, uid } = route.params;

  //State initialization
  const [messages, setMessages] = useState([]);

  //Set the state with a static message
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  useEffect(() => {
    //Set the state with a static message
    navigation.setOptions({ title: name });


    addDoc(collection(db, "messages"), {
      _id: Date.now(),
      text: name + " entered the chat",
      createdAt: new Date(),
      system: true,
    });

    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubMessages = onSnapshot(q, (documentsSnapshot) => {
      let newMessages = [];
      documentsSnapshot.forEach(doc => {
        newMessages.push(
          {
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis())
          })
      });
      setMessages(newMessages);
    });

    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    }
  }, []);

  //Custom function onSend() called when a user sends a message
  const onSend = (newMessages) => {
    //setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
    addDoc(collection(db, "messages"), newMessages[0])
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
  }

  const renderBubble = (props) => {
    return <Bubble {...props}
    wrapperStyle={{
      right: {
        backgroundColor: "#000"
      },
      left: {
        backgroundColor: "#FFF"
      }
    }} />
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={messages => onSend(messages)}
      user={{
        _id: uid,
        name: name,
      }}
    />
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
  }
});

export default Chat;