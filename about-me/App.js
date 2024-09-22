import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

import ProfileImage from './assets/japan.jpg';
import Blank from './assets/blank.png';
import EyeOpen from './components/EyeOpen';
import { useState } from 'react';
import EyeClosed from './components/EyeClosed';
import Tick from './components/Tick';
import Cross from './components/Cross';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const facts = [
  'I like UI/UX design',
  'Never broken a bone',
  'Red/Green colourblind',
  'Can speak Korean/Chinese',
  'Never been on a dating app',
];

export default function App() {
  const [factIdx, setFactIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const showAlert = (type) =>
    Alert.alert(type === 'pass' ? 'You swiped left 😉' : 'You swiped right 😭');

  const onFactChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != factIdx) {
        setFactIdx(slide);
      }
    }
  };
  return (
    <View style={styles.main_container}>
      <View style={styles.title_wrapper}>
        <Text style={styles.title}>About Me</Text>
      </View>
      <View style={styles.profile_container}>
        <View style={styles.profile_wrapper}>
          <Text style={styles.user_name}>Christian, 21</Text>
          <View style={styles.user_container}>
            <Image
              style={styles.user_image}
              source={visible ? ProfileImage : Blank}
            ></Image>
            <SafeAreaView style={styles.fact_container}>
              <ScrollView
                horizontal
                style={styles.wrap}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={({ nativeEvent }) => onFactChange(nativeEvent)}
              >
                {facts.map((e, idx) => (
                  <View key={idx} style={styles.fact_wrapper}>
                    <Text style={styles.fact} key={e}>
                      {e}
                    </Text>
                  </View>
                ))}
              </ScrollView>

              <View style={styles.wrap_dot}>
                {facts.map((e, idx) => (
                  <Text
                    key={e}
                    style={factIdx === idx ? styles.dotActive : styles.dot}
                  >
                    ●
                  </Text>
                ))}
              </View>
            </SafeAreaView>
          </View>
        </View>
        <View style={styles.option_container}>
          <Pressable
            onPress={() => {
              showAlert('reject');
            }}
            style={styles.option_cross}
          >
            <Cross />
          </Pressable>
          <Pressable
            onPress={() => {
              showAlert('pass');
            }}
            style={styles.option_tick}
          >
            <Tick />
          </Pressable>
        </View>
      </View>
      <View style={styles.footer_container}>
        <Text style={styles.footer_text}>Toggle</Text>
        <Pressable
          onPress={() => setVisible(!visible)}
          style={styles.eye_container}
        >
          <View style={styles.eye}>
            {visible ? <EyeOpen /> : <EyeClosed />}
          </View>
        </Pressable>
        <Text style={styles.footer_text}>Image</Text>
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
    paddingTop: 80,
    paddingBottom: 30,
    paddingLeft: 32,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontFamily: 'Poppins_600SemiBold',
  },
  user_container: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  user_name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E2538',
  },
  user_image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    zIndex: 5,
    borderColor: '#FFFFFF',
    borderWidth: 10,
    shadowColor: 'black',
    shadowOffset: 5,
    elevation: 2,
  },
  fact_container: {
    width: WIDTH * 0.75,
    marginTop: -50,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: 'black',
    shadowOffset: 5,
    elevation: 5,
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
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footer_text: {
    fontSize: 20,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontFamily: 'Poppins_600SemiBold',
  },
  eye_container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    width: 60,
    height: 60,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  fact: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  fact_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH,
    left: -45,
  },
  wrap_dot: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: '#3CDFFF',
  },
  dot: {
    margin: 3,
    color: '#888888',
  },
  option_container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    gap: 100,
    top: -35,
  },
  option_tick: {
    backgroundColor: '#EBE7B8',
    borderRadius: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  option_cross: {
    backgroundColor: '#D46567',
    borderRadius: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
});
