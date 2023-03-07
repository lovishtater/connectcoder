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
        <View style={styles.cardImage}>
          <Image
            source={icons[item.site] || icons.default}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardHeading}>{item.name}</Text>
          <Text style={styles.cardText}> {item.site}</Text>
          <Text style={styles.cardText}>{convertDuration(item.duration)}</Text>
        </View>
      </View>

      <View style={styles.cardActions}>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.cardButtonText}>Open</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,
    zIndex: 1,
  },
  cardImage: {
    width: 50,
    height: 50,
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
    alignItems: 'center',
    justifyContent: 'space-between',
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
    color: COLORS.textLight,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
