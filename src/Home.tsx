import { Icon } from '@rneui/base';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default function Home(props: any) {
  const [searchText, setSearchText] = useState('');
  const [filteredMateri, setFilteredMateri] = useState<any>(MATERI);

  const handleSearch = (text: string) => {
    setSearchText(text);

    const filteredItems = text
      ? MATERI.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
      : MATERI;

    setFilteredMateri(filteredItems);
  };

  const handleMateriPress = (id: number) => {
    // Navigasi ke halaman detail materi dengan mengirimkan ID materi sebagai parameter
    if (id === 1) {
      props.navigation.navigate('Pengertian');
    }
  };
  return (
    <ImageBackground
      source={require('../assets/images/home.png')}
      style={styles.imageBackgroundView}>
      <View style={{ paddingTop: 40 }}>
        <Text style={styles.title1}>Selamat Datang di</Text>
        <Text style={styles.title2}>Media Pembelajaran Sistem Keamanan Komputer!</Text>
      </View>
      <View style={styles.viewSearch}>
        <TextInput
          placeholder="Search..."
          style={styles.textInput}
          value={searchText}
          onChangeText={handleSearch}
        />
        <Icon name="search" type="ionicon" color="#000000" />
      </View>

      <View style={styles.viewPelajari}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textPelajariSemua}>Pelajari Semua Materi</Text>
          <View style={styles.viewMulai}>
            <Text style={styles.textMulai}>Mulai</Text>
            <Icon name="arrow-forward-circle" type="ionicon" color="#FFFFFF" />
          </View>
        </View>
        <View style={styles.viewImagePelajari}>
          <Image
            source={require('../assets/images/Pelajari.png')}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      </View>
      <View style={{ flex: 1, paddingTop: 40 }}>
        <Text style={{ fontFamily: 'Poppins_Bold', color: '#000000', fontSize: 16 }}>
          Materi Pembelajaran
        </Text>
        <ScrollView>
          <View style={{ gap: 20 }}>
            {filteredMateri.length > 0 ? (
              filteredMateri.map((item: any) => (
                <TouchableOpacity key={item.id} onPress={() => handleMateriPress(item.id)}>
                  <View style={styles.viewMateri}>
                    <View style={styles.viewImageTitle}>
                      <View style={styles.viewImageMateri}></View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.textTitleMateri}>{item.title}</Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins_Regular',
                            fontSize: 12,
                          }}
                          numberOfLines={2}
                          ellipsizeMode="tail">
                          {item.description}
                        </Text>
                      </View>
                    </View>
                    <Icon name="chevron-right" type="feather" color="#FFFFFF" size={32} />
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={{ fontFamily: 'Poppins_Regular', fontSize: 12 }}>
                No matching results found.
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const MATERI = [
  {
    id: 1,
    title: 'Pengertian Kriptografi',
    description:
      'Kriptografi adalah ilmu dan seni mengamankan komunikasi dan data melalui teknik enkripsi untuk menjaga kerahasiaan, integritas, otentikasi, dan mencegah penyangkalan.',
  },
  {
    id: 2,
    title: 'Sejarah Kriptografi',
    description: 'Sejarah Kriptografi',
  },
  {
    id: 3,
    title: 'Fungsi Kriptografi',
    description: 'Fungsi Kriptografi',
  },
  {
    id: 4,
    title: 'Notasi Kriptografi',
    description: 'Notasi Kriptografi',
  },
  {
    id: 5,
    title: 'Algoritma Kriptografi',
    description: 'Algoritma Kriptografi',
  },
];

const styles = StyleSheet.create({
  textTitleMateri: {
    color: '#000000',
    fontFamily: 'Poppins_Bold',
    fontSize: 16,
  },
  viewImageMateri: {
    height: 60,
    width: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  viewImageTitle: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
  viewMateri: {
    padding: 20,
    backgroundColor: '#37C9EE',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  viewImagePelajari: {
    height: 100,
    width: 100,
    flex: 1,
  },
  textMulai: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_SemiBold',
    fontSize: 12,
  },
  viewPelajari: {
    backgroundColor: '#FCFCFC',
    borderRadius: 25,
    padding: 20,
    flexDirection: 'row',
  },
  textPelajariSemua: {
    fontFamily: 'Poppins_Bold',
    fontSize: 16,
  },
  viewMulai: {
    backgroundColor: '#37C9EE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Poppins_Regular',
    color: '#000000',
  },
  viewSearch: {
    backgroundColor: '#FCFCFC',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  title2: {
    fontFamily: 'Poppins_Bold',
    color: '#FFFFFF',
    fontSize: 20,
  },
  title1: {
    fontFamily: 'Poppins_Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
  imageBackgroundView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    gap: 20,
  },
});
