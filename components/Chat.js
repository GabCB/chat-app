import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
//Import Gifted Chat library
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

const Chat = ({ route, navigation }) => {
  const { name, color } = route.params;

  //State initialization
  const [messages, setMessages] = useState([]);

  //Set the state with a static message
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello Gab",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "http://placekitten.com/200/300",
        },
      },
      {
        _id: 2,
        text: name + "  you've entered the chat",
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  //Custom function onSend() called when a user sends a message
  const onSend = (newMessages) => {
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
        _id: 1
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