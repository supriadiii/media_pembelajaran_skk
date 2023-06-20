import { Icon } from '@rneui/base';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from 'react-native';

import ModalMateri from './components/Modal';

const Algoritma = (props: any) => {
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
          <TouchableOpacity style={{ padding: 2 }} onPress={() => props.navigation.goBack()}>
            <Icon name="chevron-left" type="feather" color="#FFFFFF" size={24} />
          </TouchableOpacity>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={styles.title}>Algoritma Kriptografi</Text>
          </Animated.View>
          <TouchableOpacity style={{ padding: 2 }} onPress={() => setModalMateri(true)}>
            <Icon name="menu" type="feather" color="#FFFFFF" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewContent}>
          <ScrollView>
            <Animated.View style={[styles.viewText, { opacity: fadeAnim }]}>
              <Text style={styles.boldText2}>Kriptografi Kunci-Simetri</Text>
              <View style={{ gap: 14, paddingHorizontal: 10 }}>
                <View style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 20 }}>
                  <Image
                    source={require('../assets/images/kriptografySimetris.png')}
                    style={styles.image2}
                  />
                </View>
                <Text style={styles.textMateri}>
                  Algoritma Simetri (Symmetric-key cryptography) adalah salah satu jenis kriptografi
                  yang menggunakan kunci yang sama untuk melakukan enkripsi dan dekripsi. Dalam
                  algoritma ini, kunci enkripsi juga digunakan sebagai kunci dekripsi. Kunci
                  tersebut juga dikenal dengan istilah kunci simetri, kunci privat, atau kunci
                  rahasia (secret key). Algoritma kriptografi dalam kriptografi kunci-simetri
                  disebut algoritma simetri atau algoritma konvensional. Dalam algoritma simetri,
                  proses enkripsi dilakukan dengan menggunakan kunci enkripsi (EK) untuk mengubah
                  plainteks (P) menjadi cipherteks (C), sedangkan proses dekripsi dilakukan dengan
                  menggunakan kunci dekripsi (DK) untuk mengembalikan cipherteks (C) menjadi
                  plainteks (P) asli.
                </Text>
                <Text style={styles.boldText}>Notasi Matematis</Text>
                <View style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 20 }}>
                  <Image source={require('../assets/images/simetris2.png')} style={styles.image1} />
                </View>
                <View style={styles.rumusText}>
                  <Text style={styles.rumus}>Enkripsi: EK(P) = C</Text>
                </View>
                <Text style={styles.textMateri}>
                  Enkripsi: {'\n'}Plainteks: P {'\n'}Kunci enkripsi: K {'\n'}Cipherteks: C {'\n'}
                  Fungsi enkripsi: E {'\n'}Proses enkripsi dilakukan dengan mengaplikasikan fungsi
                  enkripsi (E) pada plainteks (P) menggunakan kunci enkripsi (K) sebagai parameter.
                  Hasilnya adalah cipherteks (C).
                </Text>
                <View style={styles.rumusText}>
                  <Text style={styles.rumus}>Dekripsi: DK(C) = P</Text>
                </View>
                <Text style={styles.textMateri}>
                  Dekripsi: {'\n'}Cipherteks: C {'\n'}Kunci dekripsi: K {'\n'}Plainteks: P {'\n'}
                  Fungsi dekripsi: D {'\n'}Proses dekripsi dilakukan dengan mengaplikasikan fungsi
                  dekripsi (D) pada cipherteks (C) menggunakan kunci dekripsi (K) sebagai parameter.
                  Hasilnya adalah plainteks (P) asli.{'\n'}
                  <Text style={styles.textMateri}>
                    Dengan menggunakan algoritma simetri, baik pengirim maupun penerima pesan harus
                    memiliki kunci yang sama untuk melakukan enkripsi dan dekripsi. Kunci tersebut
                    harus dijaga kerahasiaannya agar hanya dapat diakses oleh pihak yang berwenang.
                  </Text>
                </Text>
                <Text style={styles.boldText}>Contoh Algoritma Simetri :</Text>
                <View>
                  <Text style={styles.textMateri}>AES (Advanced Encryption Standard)</Text>
                  <Text style={styles.textMateri}>DES (Data Encyption Standard)</Text>
                  <Text style={styles.textMateri}>Blowfish</Text>
                  <Text style={styles.textMateri}>IDEA</Text>
                  <Text style={styles.textMateri}>GOST</Text>
                  <Text style={styles.textMateri}>Serpent</Text>
                </View>
              </View>

              {/* ============================================================ */}
              <Text style={styles.boldText2}>Kriptografi Kunci-Nirsimetri</Text>
              <View style={{ gap: 14, paddingHorizontal: 10 }}>
                <View style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 20 }}>
                  <Image
                    source={require('../assets/images/nirsimetri1.jpeg')}
                    style={styles.image2}
                  />
                </View>
                <Text style={styles.textMateri}>
                  Kriptografi nirsimetris (Asymmetric-key cryptography), juga dikenal sebagai
                  kriptografi kunci-publik, adalah sistem kriptografi yang menggunakan dua kunci
                  berbeda untuk enkripsi dan dekripsi. Kunci enkripsi (EK) bersifat publik, dapat
                  diketahui oleh siapa pun, sedangkan kunci dekripsi (ED) bersifat rahasia. Dengan
                  menggunakan kriptografi nirsimetris, pesan dapat diamankan dan hanya dapat dibaca
                  oleh penerima yang memiliki kunci dekripsi yang sesuai. Keamanan dan kerahasiaan
                  komunikasi dapat dipertahankan dalam lingkungan yang tidak terpercaya. Kriptografi
                  nirsimetris digunakan dalam aplikasi seperti tanda tangan digital dan pertukaran
                  kunci aman dalam komunikasi digital.
                </Text>

                <Text style={styles.textMateri}>
                  Kriptografi nirsimetris dianalogikan sebagai kotak surat yang terkunci. Pemilik
                  kotak memiliki kunci dekripsi rahasia, sementara semua orang dapat menggunakan
                  kunci enkripsi publik untuk mengirim pesan. Hanya pemilik kunci dekripsi yang
                  dapat membuka dan membaca pesan yang telah dienkripsi. Analogi ini mencerminkan
                  konsep kriptografi nirsimetris di mana pesan dapat diamankan dengan kunci publik
                  dan hanya dapat dibaca oleh penerima yang memiliki kunci dekripsi yang sesuai.
                </Text>

                <Text style={styles.boldText}>Notasi Matematis</Text>
                {/* <View style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 20 }}>
                  <Image source={require('../assets/images/simetris2.png')} style={styles.image1} />
                </View> */}
                <View style={styles.rumusText}>
                  <Text style={styles.rumus}>Enkripsi: EK1(P) = C</Text>
                </View>

                <Text style={styles.textMateri}>
                  Enkripsi: {'\n'}Fungsi enkripsi: E {'\n'}Kunci enkripsi pertama: K1{'\n'}
                  Plainteks: P {'\n'}
                  Cipherteks: C {'\n'}
                  {'\n'}
                  Proses enkripsi dilakukan dengan mengaplikasikan fungsi enkripsi (E) pada
                  plainteks (P) menggunakan kunci enkripsi pertama(K1) sebagai parameter. Hasilnya
                  adalah cipherteks (C).
                </Text>

                <View style={styles.rumusText}>
                  <Text style={styles.rumus}>Dekripsi: DK2(C) = P</Text>
                </View>
                <Text style={styles.textMateri}>
                  Dekripsi: {'\n'}Fungsi dekripsi: D {'\n'}Kunci dekripsi kedua: K2{'\n'}
                  Cipherteks: C {'\n'}Plainteks: P {'\n'}
                  Proses dekripsi dilakukan dengan mengaplikasikan fungsi dekripsi (D) pada
                  cipherteks (C) menggunakan kunci dekripsi kedua (K2) sebagai parameter. Hasilnya
                  adalah plainteks (P) asli.{'\n'}
                  {'\n'}
                  <Text style={styles.textMateri}>
                    Dengan menggunakan algoritma simetri, baik pengirim maupun penerima pesan harus
                    memiliki kunci yang sama untuk melakukan enkripsi dan dekripsi. Kunci tersebut
                    harus dijaga kerahasiaannya agar hanya dapat diakses oleh pihak yang berwenang.
                  </Text>
                </Text>
                <Text style={styles.boldText}>Contoh Algoritma Simetri :</Text>
                <View>
                  <Text style={styles.textMateri}>ECC (Ellyptic Curve Cryptography)</Text>
                  <Text style={styles.textMateri}>RSA</Text>
                  <Text style={styles.textMateri}>ElGamal</Text>
                  <Text style={styles.textMateri}>Rabin</Text>
                  <Text style={styles.textMateri}>Diffie-Hellman Key Exchange</Text>
                  <Text style={styles.textMateri}>DSA</Text>
                </View>
              </View>
            </Animated.View>
          </ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.viewMulai}
              onPress={() => props.navigation.navigate('Sejarah')}>
              <Icon name="arrow-back-circle" type="ionicon" color="#FFFFFF" />
              <Text style={styles.textMulai}>Materi Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewMulai}
              onPress={() => props.navigation.navigate('Notasi')}>
              <Text style={styles.textMulai}>Materi Selanjutnya</Text>
              <Icon name="arrow-forward-circle" type="ionicon" color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
        <ModalMateri
          modalMateriVisible={modalMateri}
          setModalMateri={setModalMateri}
          props={props}
        />
      </ImageBackground>
    </>
  );
};

export default Algoritma;

const styles = StyleSheet.create({
  rumus: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#37C9EE',
    width: 200,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
  },
  rumusText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  boldText: {
    fontFamily: 'Poppins_SemiBold',
    fontSize: 14,
  },
  boldText2: {
    fontFamily: 'Poppins_Bold',
    fontSize: 18,
  },
  image1: {
    resizeMode: 'contain',
    width: 300,
    height: 200,
  },
  image2: {
    resizeMode: 'contain',
    width: 300,
    height: 100,
  },
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
  textMateri1: {
    textAlign: 'justify',
    fontFamily: 'Poppins_Regular',
    backgroundColor: '#37C9EE',
    borderRadius: 5,
    padding: 8,
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
