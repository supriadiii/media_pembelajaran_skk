import { Icon } from '@rneui/base';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import ModalMateri from './components/Modal';

const Pengertian = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [modalMateri, setModalMateri] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <ImageBackground
        source={require('../assets/images/bg-Pengertian.png')}
        style={styles.imageBackgroundView}>
        <View style={styles.titleBar}>
          <TouchableOpacity style={{ padding: 2 }}>
            <Icon name="chevron-left" type="feather" color="#FFFFFF" size={24} />
          </TouchableOpacity>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.title}>Pengertian Kriptografi</Text>
          </Animated.View>
          <TouchableOpacity style={{ padding: 2 }} onPress={() => setModalMateri(true)}>
            <Icon name="menu" type="feather" color="#FFFFFF" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewContent}>
          <ScrollView>
            <Animated.View style={[styles.viewText, { opacity: fadeAnim }]}>
              <View style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 40 }}>
                <Image
                  source={require('../assets/images/Pengertian.png')}
                  style={{ width: 280, height: 195 }}
                />
              </View>
              <Text style={styles.textMateri}>
                Kriptografi adalah sebuah disiplin ilmu yang mempelajari teknik enkripsi naskah asli
                (plaintext) menjadi teks yang sulit terbaca (ciphertext) menggunakan kunci enkripsi.
                Konsep kriptografi berasal dari kata bahasa Yunani, yaitu kryptos yang berarti
                rahasia atau tersembunyi, dan graphein yang berarti menulis. Secara umum,
                kriptografi merupakan proses menulis atau menyampaikan pesan secara rahasia dan
                tersembunyi. Dalam konteks penggunaan teknologi digital, kriptografi menjadi sangat
                penting untuk menjaga keamanan data dan pesan yang dikirim melalui jaringan. Tujuan
                utama kriptografi adalah melindungi kerahasiaan informasi dengan mengubahnya menjadi
                kode tertentu yang hanya dapat dibaca oleh pihak yang memiliki kunci dekripsi.{''}
              </Text>
              <Text style={styles.textMateri}>
                Kriptografi dapat dianggap sebagai seni dan ilmu yang melibatkan proses pengubahan
                data menjadi bentuk yang sulit dipahami oleh orang yang tidak berhak atau berwenang.
                Dalam praktiknya, kriptografi menggunakan berbagai algoritma dan metode enkripsi
                untuk melindungi data. Proses enkripsi mengubah naskah asli menjadi bentuk yang
                tidak dapat langsung terbaca, sehingga jika data tersebut jatuh ke tangan yang
                salah, pihak tersebut tidak akan bisa memahami isi sebenarnya.{''}
              </Text>
              <Text style={styles.textMateri}>
                Dengan menggunakan kriptografi, data atau pesan yang dikirim melalui jaringan akan
                disamarkan dengan cara yang kompleks. Hal ini memastikan bahwa jika data tersebut
                diperoleh oleh pihak yang tidak berhak, mereka tidak akan dapat mengerti makna atau
                isi dari data tersebut. Dengan demikian, kriptografi berperan penting dalam menjaga
                kerahasiaan dan keamanan informasi yang sensitif.
              </Text>
            </Animated.View>
          </ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.viewMulai}
              // onPress={() => props.navigation.navigate('Pengertian')}
            >
              <Icon name="arrow-back-circle" type="ionicon" color="#FFFFFF" />
              <Text style={styles.textMulai}>Materi Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewMulai}
              // onPress={() => props.navigation.navigate('Pengertian')}
            >
              <Text style={styles.textMulai}>Materi Selanjutnya</Text>
              <Icon name="arrow-forward-circle" type="ionicon" color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
        <ModalMateri modalMateriVisible={modalMateri} setModalMateri={setModalMateri} />
      </ImageBackground>
    </>
  );
};

export default Pengertian;

const styles = StyleSheet.create({
  textMulai: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_SemiBold',
    fontSize: 12,
    paddingHorizontal: 4,
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
  textMateri: {
    textAlign: 'justify',
    fontFamily: 'Poppins_Regular',
  },
  viewText: {
    gap: 20,
    paddingHorizontal: 10,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins_Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  viewContent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    gap: 20,
  },
  imageBackgroundView: {
    flex: 1,
    paddingTop: 40,
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  text: {
    color: '#818181',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  // Styles lainnya
});
