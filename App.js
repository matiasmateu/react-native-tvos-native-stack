/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNative, {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>Screen 1</Text>
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('Screen2')}
        />
      </View>
    </SafeAreaView>
  );
};

const Screen2 = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      debugger;
    });
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>Screen 2</Text>
        <Button
          title="Go to Screen 1"
          onPress={() => navigation.navigate('Screen1')}
        />
      </View>
    </SafeAreaView>
  );
};

const CustomBackButton = ({navigation}) => {
  return (
    <View>
      <Text>Back Button</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerLeft: CustomBackButton,
        }}>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
