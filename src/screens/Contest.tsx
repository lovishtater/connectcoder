import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  Linking,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContestCard from '../components/ContestCard';
import {COLORS} from '../constants';
import {IContest} from '../types/types';
const sampleData = {
  name: 'Tectone23 Hacks',
  url: 'https://www.hackerearth.com/challenges/hackathon/tectone23-hacks/',
  start_time: '2023-04-21T13:39:00.000Z',
  end_time: '2023-05-19T18:25:00.000Z',
  duration: '2436360.0',
  site: 'HackerEarth',
  in_24_hours: 'No',
  status: 'BEFORE',
};

const HomeScreen = () => {
  useEffect(() => {
    loadData();
  }, []);
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState([
    {
      name: 'Johns Doe',
    },
  ]);
  const [error, setError] = React.useState(null);
  const [organisation, setOrganisation] = React.useState([]);

  const loadData = async () => {
    await fetch('https://kontests.net/api/v1/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        //print all unique sites
        const sites = response.map((item: any) => item.site);
        const uniqueSites = [...new Set(sites)];
        console.log(uniqueSites);
        setData(response);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  };

  const filterData = (organisations: any) => {
    data.filter((item: any) => {
      if (organisations.includes(item.site)) {
        return item;
      }
    });
  };

  const convertDuration = (duration: number) => {
    if (duration < 60) {
      return `${duration} seconds`;
    } else if (duration < 86400) {
      var hours = duration / 3600;
      var minutes = (duration % 3600) / 60;
      return hours + ' hours ' + minutes + ' minutes ';
    } else {
      var days = duration / 86400;
      var hours = (duration % 86400) / 3600;
      return days + ' days ' + hours + ' hours ';
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadData();
    setRefreshing(false);
  }, []);

  const setAlarm = (time: string) => {
    console.log(time);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Contests</Text>
      </View>
      {/* <ScrollView> */}
      <FlatList
        data={data as IContest[]}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => onRefresh()}
            colors={[COLORS.primary]}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={50}
              color={COLORS.textDark}
            />
            <Text style={styles.emptyText}>No contests found</Text>
          </View>
        }
        renderItem={({item}: {item: IContest}) => <ContestCard item={item} />}
        keyExtractor={item => Math.random().toString()}
      />
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: COLORS.text.inverse,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },

  flatList: {
    width: '100%',
    height: '100%',
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: COLORS.text.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
