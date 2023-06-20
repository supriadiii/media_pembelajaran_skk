import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@rneui/base';
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
            <Text style={styles.title}>Kriptografi Simetri</Text>
          </Animated.View>
          <TouchableOpacity style={{ padding: 2 }} onPress={() => setModalMateri(true)}>
            <Icon name="menu" type="feather" color="#FFFFFF" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewContent}>
          <ScrollView>
            <Animated.View style={[styles.viewText, { opacity: fadeAnim }]}>
              <View style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 20 }}>
                <Image
                  source={require('../assets/images/kriptografySimetris.png')}
                  style={styles.image2}
                />
              </View>
              <Text style={styles.textMateri}>
                Algoritma Simetri (Symmetric-key cryptography) adalah salah satu jenis kriptografi
                yang menggunakan kunci yang sama untuk melakukan enkripsi dan dekripsi. Dalam
                algoritma ini, kunci enkripsi juga digunakan sebagai kunci dekripsi. Kunci tersebut
                juga dikenal dengan istilah kunci simetri, kunci privat, atau kunci rahasia (secret
                key). Algoritma kriptografi dalam kriptografi kunci-simetri disebut algoritma
                simetri atau algoritma konvensional. Dalam algoritma simetri, proses enkripsi
                dilakukan dengan menggunakan kunci enkripsi (EK) untuk mengubah plainteks (P)
                menjadi cipherteks (C), sedangkan proses dekripsi dilakukan dengan menggunakan kunci
                dekripsi (DK) untuk mengembalikan cipherteks (C) menjadi plainteks (P) asli.
              </Text>
              <Text style={styles.boldText}>Notasi matematis</Text>
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
              <Text style={styles.boldText}>Contoh algoritma simetri :</Text>
              <FlatList
                data={[
                  { key: 'Tokyo' },
                  { key: 'Delhi' },
                  { key: 'Shanghai' },
                  { key: 'Sao Paolo' },
                  { key: 'Mexico City' },
                  { key: 'Cairo' },
                  { key: 'Dhaka' },
                  { key: 'Mumbai' },
                  { key: 'Beijing' },
                  { key: 'Osaka' },
                ]}
                renderItem={({ item }) => {
                  return (
                    <View style={{ marginBottom: 10 }}>
                      <Text style={styles.textMateri}>{item.key}</Text>
                    </View>
                  );
                }}
              />
              <Text style={styles.textMateri}>
                4. Nirpenyangkalan (non-repudiation): Fungsi nirpenyangkalan digunakan untuk
                mencegah entitas yang berkomunikasi menyangkal tindakan atau pengiriman pesan yang
                mereka lakukan. Melalui penggunaan tanda tangan digital, kriptografi dapat
                memberikan bukti yang tidak dapat disangkal tentang keaslian pesan dan keterlibatan
                pengirim. Dengan demikian, penerima pesan dapat membuktikan bahwa pesan tersebut
                benar-benar dikirim oleh pengirim yang bersangkutan.
              </Text>
              <Text style={styles.textMateri}>
                Kriptografi digunakan dalam berbagai aspek kehidupan saat ini, mulai dari penggunaan
                ATM untuk mengambil uang, telepon genggam (HP), komputer di lab atau kantor, hingga
                layanan internet. Bahkan, kriptografi juga diterapkan di gedung-gedung bisnis dan
                pangkalan militer untuk melindungi kerahasiaan informasi sensitif. Dalam semua aspek
                ini, kriptografi berperan penting dalam menjaga keamanan, kerahasiaan, dan keabsahan
                komunikasi dan data yang kita gunakan sehari-hari.
              </Text>
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
    fontFamily: 'Poppins_Bold',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image1: {
    resizeMode: 'contain',
    width: 400,
    height: 200,
  },
  image2: {
    resizeMode: 'contain',
    width: 350,
    height: 150,
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
