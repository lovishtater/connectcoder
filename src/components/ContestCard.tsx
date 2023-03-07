import React from 'react';
import {COLORS} from '../constants';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import MyButton from './DropDownBtn';
import {IContest} from '../types/types';
import {convertDuration} from '../utils/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const icons = {
  AtCoder: require('../assets/atcoder.png'),
  CodeChef: require('../assets/codechef.png'),
  CodeForces: require('../assets/codeforces.webp'),
  HackerEarth: require('../assets/hackerearth.png'),
  HackerRank: require('../assets/hackerrank.png'),
  LeetCode: require('../assets/leetcode.png'),
  'Code Jam': require('../assets/google.png'),
  'Kick Start': require('../assets/google.png'),
  default: require('../assets/defaultLogo.png'),
  // "TopCoder": require('../assets/topcoder.png'),
  // "Project Euler": require('../assets/projecteuler.png'),
  // "Google Code Jam": require('../assets/codejam.png'),
};

const ContestCard = ({item}: {item: IContest}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <View style={styles.cardImageSection}>
          <Image
            source={icons[item.site] || icons.default}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardContent}>
          <Text
            style={styles.cardHeading}
            onPress={() => Linking.openURL(item.url)}>
            {item.name}
            <MaterialCommunityIcons
              name="open-in-new"
              size={15}
              color={COLORS.primary}
              style={{marginLeft: 5}}
            />
          </Text>
          <Text style={styles.cardText}> {item.site}</Text>
          <Text style={styles.cardText}>{convertDuration(item.duration)}</Text>
        </View>
      </View>

      <View style={styles.cardActions}>
        <MyButton
          name="Alarm"
          size={20}
          isActivated={false}
          style={styles.cardButton}
          onPress={() => setAlarm(item.start_time)}
        />
      </View>
    </View>
  );
};

export default ContestCard;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    minWidth: '90%',
    maxWidth: '90%',
    backgroundColor: COLORS.modal.background,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    zIndex: 1,
  },
  cardImageSection: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: "80%",
    height: "80%",
    resizeMode: 'contain',
  },
  cardContent: {
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cardHeading: {
    color: COLORS.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSiteName: {
    color: COLORS.text.primary,
    fontSize: 14,
  },
  cardText: {
    color: COLORS.text.primary,
    fontSize: 14,
  },
  cardButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
  },
  cardButtonText: {
    color: COLORS.text.inverse,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
