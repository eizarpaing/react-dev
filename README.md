# react-dev
This project was bootstrapped with Create React Native App.

Below you'll find information about performing common tasks. The most recent version of this guide is available here.

Table of Contents
Updating to New Releases
Available Scripts
npm start
npm test
npm run ios
npm run android
npm run eject
Writing and Running Tests
Customizing App Display Name and Icon
Sharing and Deployment
Publishing to Expo's React Native Community
Building an Expo "standalone" app
Ejecting from Create React Native App
Build Dependencies (Xcode & Android Studio)
Should I Use ExpoKit?
Tips and Tricks
Updating to New Releases
You should only need to update the global installation of create-react-native-app very rarely, ideally never.

Updating the react-native-scripts dependency of your app should be as simple as bumping the version number in package.json and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the react-native, react, and expo package versions, and setting the correct sdkVersion in app.json. See the versioning guide for up-to-date information about package version compatibility.

Available Scripts
If yarn was installed when the project was initialized, then dependencies will have been installed via yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for yarn and npm at the time of this writing.

npm start
Runs your app in development mode.

Open it in the Expo app on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

npm test
Runs the jest test runner on your tests.

npm run ios
Like npm start, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

npm run android
Like npm start, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see React Native docs for detailed setup).

npm run eject
This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

Warning: Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an Xcode and/or Android Studio environment set up.

Customizing App Display Name and Icon
You can edit app.json to include configuration keys under the expo key.

To change your app's display name, set the expo.name key in app.json to an appropriate string.

To set an app icon, set the expo.icon key in app.json to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

Writing and Running Tests
This project is set up to use jest for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called __tests__ to have the files loaded by jest. See the the template project for an example test. The jest documentation is also a wonderful resource, as is the React Native testing tutorial.

Sharing and Deployment
Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

Publishing to Expo's React Native Community
Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the exp command-line tool, and run the publish command:

$ npm i -g exp
$ exp publish
Building an Expo "standalone" app
You can also use a service like Expo's standalone builds if you want to get an IPA/APK for distribution without having to build the native code yourself.

Ejecting from Create React Native App
If you want to build and deploy your app yourself, you'll need to eject from CRNA and use Xcode and Android Studio.

This is usually as simple as running npm run eject in your project, which will walk you through the process. Make sure to install react-native-cli and follow the native code getting started guide for React Native.

Should I Use ExpoKit?
If you have made use of Expo APIs while working on your project, then those API calls will stop working if you eject to a regular React Native project. If you want to continue using those APIs, you can eject to "React Native + ExpoKit" which will still allow you to build your own native code and continue using the Expo APIs. See the ejecting guide for more details about this option.
