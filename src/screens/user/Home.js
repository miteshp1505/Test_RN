import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
const Home = props => {
  const dummydata = [
    {id: 1, image: 'https://via.placeholder.com/400x200/FFB6C1/000000'},
    {id: 2, image: 'https://via.placeholder.com/400x200/FA8072/000000'},
    {id: 3, image: 'https://via.placeholder.com/400x200/87CEEB/000000'},
  ];
  const [data, setData] = useState(dummydata);

  const clickEventListener = () => {
    props.navigation.navigate('NewProduct');
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <TouchableOpacity onPress={() => clickEventListener()}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.productImg}
            source={{
              uri: 'https://media.istockphoto.com/photos/old-map-of-the-world-picture-id183319682?k=20&m=183319682&s=612x612&w=0&h=jgyu49F-9P2nduUzov6YbCElY4mTBFyQYjKh0glz5Zc=',
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.card}>
        <View style={{width: '90%', height: 50, alignSelf: 'center'}}>
          <TextInput
            placeholder="What're you looking for?"
            placeholderTextColor="#b4b4b4"
            style={{
              backgroundColor: '#ECECEC',
              color: '#000',
              borderRadius: 5,
              fontSize: 18,
            }}
          />
        </View>
        <View>
          <View>{/* <Icon type=""/> */}</View>
        </View>
      </View>

      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Promos Today</Text>
      </View>
      <View style={{marginBottom: 10, marginLeft: 20}}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal={true}
          keyExtractor={item => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={post => {
            const item = post.item;
            return (
              <View style={{}}>
                <View style={{padding: 10}}>
                  <Image
                    style={{
                      width: 200,
                      height: 250,
                      resizeMode: 'stretch',
                      borderRadius: 5,
                    }}
                    source={{uri: item.image}}
                  />
                </View>
                <View>
                  <View style={{zIndex: 999, marginTop: -110, marginLeft: 25}}>
                    <Text style={{fontSize: 16, color: '#fff'}}>
                      Attaction & Activities
                    </Text>
                    <Text
                      style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                      Barcelona
                    </Text>
                  </View>
                  <View style={{marginLeft: 25, marginTop: 5}}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60%',
                        height: 40,
                        borderRadius: 5,
                        backgroundColor: '#e5634d',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: '#fff',
                          textAlign: 'center',
                        }}>
                        Book Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={{marginLeft: 20, marginTop: 20, marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tours</Text>
      </View>
      {/* </ScrollView> */}
    </View>
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
    width: '85%',
    height: '30%',
    borderRadius: 10,
    // marginLeft:20,marginRight:15,
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 999,
    marginTop: -60,
  },
  list: {
    // paddingHorizontal: 5,
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
    marginTop: 300,
  },
  cardImage: {
    resizeMode: 'center',
  },
});
export default Home;
