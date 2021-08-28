import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from '../../components/Icon';

const firstRowIcons = [
  {iconName: 'hotel', label: 'Hotel'},
  {iconName: 'location-sharp', label: 'Tour'},
  {iconName: 'car', label: 'Car'},
  {iconName: 'fighter-jet', label: 'Flight'},
];
const secondRowIcons = [
  {iconName: 'ship', label: 'Cruise'},
  {iconName: 'bus', label: 'Bus'},
  {iconName: 'star', label: 'Event'},
  {iconName: 'list-ul', label: 'More'},
];

const backGroundUrl =
  'https://media.istockphoto.com/photos/old-map-of-the-world-picture-id183319682?k=20&m=183319682&s=612x612&w=0&h=jgyu49F-9P2nduUzov6YbCElY4mTBFyQYjKh0glz5Zc=';

const Home = props => {
  const data = [
    {
      id: 1,
      image:
        'https://ucarecdn.com/a8b0400c-9bdc-4129-baf7-21ae4a11468d/justin-schuler-253611-unsplash.jpg',
      location: 'Barcelona',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      location: 'Australia',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1598016677484-ad34c3fd766e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      location: 'Argentina',
    },
  ];

  const renderListItem = post => {
    const item = post.item;
    return (
      <View style={{}}>
        <View style={{padding: 10}}>
          <Image style={styles.imgStyle} source={{uri: item.image}} />
        </View>
        <View style={styles.locationText}>
          <View style={{zIndex: 999, marginLeft: 25}}>
            <Text style={styles.activityTitle}>Attaction & Activities</Text>
            <Text style={styles.locationTitle}>{item.location}</Text>
          </View>
          <View style={{marginLeft: 25, marginTop: 5}}>
            <TouchableOpacity style={styles.locationItem}>
              <Text style={styles.btnText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('test')}>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.productImg} source={{uri: backGroundUrl}} />
          </View>
        </TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.textContainer}>
            <TextInput
              placeholder="What are you looking for?"
              placeholderTextColor="#b4b4b4"
              style={styles.textInputStyle}
            />
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.optionsWrapper}>
              {firstRowIcons.map(item => (
                <Icon name={item.iconName} iconLabel={item.label} />
              ))}
            </View>
            <View style={styles.optionsWrapper}>
              {secondRowIcons.map(item => (
                <Icon name={item.iconName} iconLabel={item.label} />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Promos Today</Text>
          </View>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            renderItem={post => renderListItem(post)}
          />
          <View style={{marginTop: 120}}>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  productImg: {
    width: '100%',
    height: 200,
  },
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 9,
    backgroundColor: '#fff',
    width: '90%',
    height: '35%',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 999,
    position: 'absolute',
    top: '20%',
  },
  list: {
    backgroundColor: '#fafafa',
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    // marginTop: 10,
  },
  card1: {
    width: '90%',
    height: 100,
  },
  cardImage: {
    resizeMode: 'center',
  },
  textContainer: {
    flex: 0.3,
    width: '94%',
    height: 50,
    alignSelf: 'center',
  },
  textInputStyle: {
    backgroundColor: '#ECECEC',
    color: '#000',
    borderRadius: 5,
    fontSize: 18,
    height: 40,
    marginTop: 10,
  },
  optionsContainer: {
    flex: 0.7,
    width: '94%',
    alignSelf: 'center',
  },
  optionsWrapper: {
    flexDirection: 'row',
    marginTop: 7,
    marginBottom: 7,
    marginRight: 10,
  },
  bottomContainer: {marginBottom: 10, top: '23%'},
  titleContainer: {marginLeft: 20, marginTop: 20},
  titleStyle: {fontSize: 20, fontWeight: '500'},
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  locationItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#e5634d',
  },
  locationTitle: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
  activityTitle: {fontSize: 16, color: '#fff'},
  locationText: {position: 'absolute', top: '60%'},
  imgStyle: {width: 200, height: 250, resizeMode: 'stretch', borderRadius: 5},
});

export default Home;