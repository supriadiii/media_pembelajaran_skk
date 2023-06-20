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
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@rneui/themed';
import ModalMateri from './components/Modal';

const Fungsi = (props: any) => {
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
            <Text style={styles.title}>Fungsi Kriptografi</Text>
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
                  source={require('../assets/images/fungsi.jpg')}
                  style={{ width: 280, height: 195, borderRadius: 20 }}
                />
              </View>
              <Text style={styles.textMateri}>
                Kriptografi memiliki beberapa fungsi utama yang menjadikannya penting dalam
                kehidupan kita saat ini. Berikut adalah beberapa fungsi kriptografi yang melibatkan
                layanan yang disediakan:
              </Text>
              <Text style={styles.textMateri}>
                1. Kerahasiaan (confidentiality): Fungsi ini digunakan untuk menjaga kerahasiaan isi
                pesan dari pihak yang tidak berhak. Melalui enkripsi, kriptografi memastikan bahwa
                pesan hanya dapat dibaca oleh penerima yang memiliki kunci dekripsi yang tepat.
                Dengan demikian, meskipun pesan mungkin dapat diakses oleh pihak lain, mereka tidak
                akan dapat memahami isinya.
              </Text>
              <Text style={styles.textMateri}>
                2. Integritas data (data integrity): Fungsi ini memastikan bahwa pesan yang dikirim
                tetap asli dan tidak mengalami perubahan selama pengiriman. Dengan menggunakan
                teknik hash dan tanda tangan digital, kriptografi dapat mendeteksi adanya modifikasi
                atau manipulasi pada pesan. Sehingga penerima dapat memverifikasi apakah pesan yang
                diterima masih utuh dan tidak diubah.
              </Text>
              <Text style={styles.textMateri}>
                3. Otentikasi (authentication): Fungsi otentikasi digunakan untuk mengidentifikasi
                kebenaran pihak-pihak yang berkomunikasi. Hal ini meliputi autentikasi pengguna
                (user authentication) untuk memastikan bahwa komunikasi hanya dilakukan oleh pihak
                yang memiliki otoritas, serta autentikasi asal data (data origin authentication)
                untuk memastikan bahwa pesan berasal dari sumber yang sah. Dengan adanya otentikasi,
                kita dapat memverifikasi apakah pesan yang diterima benar-benar berasal dari
                pengirim yang diklaimnya.
              </Text>
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

export default Fungsi;

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
