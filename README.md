# Chat App

![chat app](https://i.imgur.com/CedInk0.png) <br>

## Table of contents

-[Overview](#overview)
-[How to get the project running](#how-to-get-the-project-running)
  -[Setting up with Expo](#setting-up-with-expo)
  -[Setting up Expo Go app to test your app on the phone](#setting-up-expo-go-app-to-test-your-app-on-the-phone)
  -[Setting up a device emulator](#setting-up-a-device-emulator)
  -[Setting up a Firestore database](#setting-up-a-firestore-database)
  -[Installation](#installation)
-[Built with](#built-with)
-[Project dependencies](#project-dependencies)
-[Project devDependencies](#project-devdependencies)


## Overview
Chat is an application for both Android /iOS created with Reactive Native and Expo.
The app provides users with a chart interface and options to take pictures, and share images and their location.
Additionally users can choose a theme color on the start screen before entering the chat.

This app has Google Cloud Firestore as a non-relational database where images and messages are being stored. This last feature allows users to read chat messages even when the app is offline.


## How to get the project running

### Setting up with Expo
*Ensure that you have a is suitable version of Node (not newer than 16.19.0.) running **nvm list**. If it's newer, downgrade it with **nvm install 16.19.0** and then **nvm use 16.19.0**
*Install Expo CLI globally on your PC (**npm install -g expo-cli**) 

### Setting up Expo Go app to test your app on the phone
*Install Expo Go app from App Store (iOS) or Google Play Store (Android) on your mobile phone
*Head over the [Expo signup page](https://www.google.com/aclk?sa=l&ai=DChcSEwiJ3-un3-X-AhURCIsKHUB4B5YYABAAGgJlZg&sig=AOD64_2q_DtEHQiLSWwlAlTLjOJYtsZ79g&q&adurl&ved=2ahUKEwin0uWn3-X-AhUH16QKHdRKAfYQ0Qx6BAgFEAE) and create and account
*To log into to your Expo account run **expo login** in the terminal/Powershell
*You can see the currently logged-in account by running **expo whoami**

### Setting up a device emulator
*Android Simulator: download and install [Android Studio](https://developer.android.com/studio) 
*iOs Simulator: download and install [Xcode](https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device)

### Setting up a Firestore database
*Sign up or Log in in [Google Firebase](https://firebase.google.com/)
*Create a new project
*Create a database (Firestore Database)
*Install Firestore (via Firebase) **npm install firebase@9.13.0 --save**
*In Firebase **Project Settings > General tab > Your Apps > Firesote for Web** and generate your configurations
*In the App.js file replace the **firebaseConfig**  variable with:
  const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-authdomain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
  };


### Installation
*Clone the repository
**git clone https://github.com/GabCB/chat-app.git**
**cd chat-app**

*In the App.js file replace the **firebaseConfig**  variable with:
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-authdomain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  };

*Then run the commands:
**npm install** or **expo install** to install dependencies and devDependencies
**npm start** or **npx expo start** to connect to your emulator and/phone (via Metro Bundler) to test the app


## Built with
- JavaScript <br>
- React Native <br>
- Expo <br>
- Google Firebase <br>
- Google Firestore Database <br>


## Project dependencies
  "@expo/webpack-config": "^18.0.1",
  "@react-native-async-storage/async-storage": "1.17.11",
  "@react-native-community/netinfo": "9.3.7",
  "@react-navigation/native": "^6.1.6",
  "@react-navigation/native-stack": "^6.9.12",
  "expo": "~48.0.15",
  "expo-image-picker": "^14.1.1",
  "expo-location": "^15.1.1",
  "expo-status-bar": "~1.4.4",
  "firebase": "^9.13.0",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "react-native": "0.71.7",
  "react-native-gifted-chat": "^2.0.1",
  "react-native-maps": "1.3.2",
  "react-native-safe-area-context": "4.5.0",
  "react-native-screens": "~3.20.0",
  "react-native-svg": "13.4.0",
  "react-native-svg-transformer": "1.0.0",
  "react-native-web": "~0.18.10"

## Project devDependencies 
  "@babel/core": "^7.20.0"


## Links

[Code URL](https://github.com/GabCB/chat-app) <br>