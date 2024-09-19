import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import ProfileImage from './assets/japan.jpg';

export default function App() {
  return (
    <View style={styles.main_container}>
      <View style={styles.title_wrapper}>
        <Text style={styles.title}>About Me</Text>
      </View>
      <View style={styles.profile_container}>
        <View style={styles.profile_wrapper}>
          <Text style={styles.user_name}>Christian, 21</Text>
          <View>
            <Image style={styles.user_image} source={ProfileImage}></Image>
            <View>
              <Text>I like UI/UX design</Text>
              <Text>Never broken a bone</Text>
              <Text>Red/Green colourblind</Text>
              <Text>Can speak Korean/Chinese</Text>
              <Text>Never been on a dating app</Text>
            </View>
          </View>
        </View>
        <View>
          <Image />
          <Image />
        </View>
      </View>
      <View style={styles.footer_container}>
        <View>
          <Text>Toggle</Text>
          <Pressable />
          <Text>Image</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#1675F1',
    flex: 1,
  },
  profile_container: {
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    width: '100%',
    flex: 1,
  },
  profile_wrapper: {
    padding: 40,
  },
  title_wrapper: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 32,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  user_name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  user_image: {
    width: 200,
    height: 200,
    borderRadius: '50%',
  },
  fact_container: {
    height: 200,
    backgroundColor: '#F5F5F5',
  },
  fact_text: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  footer_container: {
    backgroundColor: '#485C77',
    padding: 20,
    height: 110,
    width: '100%',
  },
});
