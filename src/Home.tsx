import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

export default function Home(props: any) {
  return (
    <View style={styles.Container}>
      <View
        style={{
          backgroundColor: 'rgba(0, 148, 238, 1)',
          paddingTop: 50,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          paddingHorizontal: 20,
          gap: 30,
          paddingBottom: 30,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* <Icon name="arrow-left" type="material-community" size={25} color={'white'} /> */}
          <Text style={{ color: 'white', fontWeight: 'bold' }}>My app</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {/* <Icon name="arrow-left" type="material-community" size={25} color={'white'} /> */}
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>
            Media Pembelajaran{'\n'}Sistem Keamana Komputer
          </Text>
        </View>
      </View>
      <View style={styles.shadowContainer}>
        <View>
          <Text style={{ color: '#818181', fontWeight: '700' }}>Matei Pembelajaran </Text>
        </View>
        <View style={styles.motherContainerItem}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Pengertian')}>
            <View style={styles.containerMateri}>
              <Image
                style={styles.IconMateri}
                source={require('../assets/1x/iconKriptografy.png')}
              />
              <Text style={styles.textItemStyle}>Pengertian{'\n'}Kriptografy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.containerMateri}>
              <Image
                style={styles.IconMateri}
                source={require('../assets/1x/iconSejarahKriptografy.png')}
              />
              <Text style={styles.textItemStyle}>Sejarah{'\n'}Kriptografy</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.motherContainerItem}>
          <TouchableOpacity>
            <View style={styles.containerMateri}>
              <Image
                style={styles.IconMateri}
                source={require('../assets/1x/iconFungsiKriptografy.png')}
              />
              <Text style={styles.textItemStyle}>Fungsi{'\n'}Kriptografy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.containerMateri}>
              <Image style={styles.IconMateri} source={require('../assets/1x/iconNotasi.png')} />
              <Text style={styles.textItemStyle}> Notasi{'\n'}Kriptografy</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.motherContainerItem2}>
          <TouchableOpacity>
            <View style={styles.containerMateri}>
              <Image style={styles.IconMateri} source={require('../assets/1x/iconAlgoritma.png')} />
              <Text style={styles.textItemStyle}>Algoritma Kriptografy</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  motherContainerItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  motherContainerItem2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconMateri: {
    height: 42,
    aspectRatio: 1,
  },
  containerMateri: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#F0F0F0',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 140,
  },
  textItemStyle: {
    color: '#818181',
    textAlign: 'center',
  },
  Container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    gap: 30,
  },
  shadowContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 30,
    gap: 30,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
