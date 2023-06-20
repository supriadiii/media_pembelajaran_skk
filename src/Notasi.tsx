import { Icon } from '@rneui/themed';
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
  TextInput,
  Button,
} from 'react-native';

import ModalMateri from './components/Modal';

const Notasi = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [modalMateri, setModalMateri] = useState(false);
  const [plaintext, setPlaintext] = useState('');
  const [ciphertext, setCiphertext] = useState('');

  const encryptText = () => {
    let encryptedText = '';
    // Implementasi algoritma kriptografi di sini, contoh: substitusi huruf dengan urutan ASCII + 1
    for (let i = 0; i < plaintext.length; i++) {
      const charCode = plaintext.charCodeAt(i);
      encryptedText += String.fromCharCode(charCode + 1);
    }
    setCiphertext(encryptedText);
  };
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
            <Text style={styles.title}>Notasi Kriptografi</Text>
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
                  source={require('../assets/images/Notasi.jpg')}
                  style={{ width: 280, height: 195, borderRadius: 20 }}
                />
              </View>
              <Text style={styles.textMateri}>
                Notasi kriptografi adalah representasi simbolik yang digunakan dalam kriptografi
                untuk menggambarkan berbagai konsep, operasi, dan algoritma yang terkait dengan
                pengamanan dan penyandian informasi. Notasi ini memungkinkan para ahli kriptografi
                untuk berkomunikasi dengan jelas dan secara konsisten mengenai konsep-konsep
                tersebut.
              </Text>
              <Text style={styles.textMateri}>
                <Text style={styles.boldText}>1. Pengirim (sender):</Text> Merupakan pihak yang
                mengirim pesan melalui sistem kriptografi. Pengirim bisa berupa individu, entitas
                komputer, atau mesin lainnya.
              </Text>
              <Text style={styles.textMateri}>
                <Text style={styles.boldText}>2. Penerima (receiver):</Text> Merupakan pihak yang
                menerima pesan yang telah dienkripsi melalui sistem kriptografi. Penerima juga bisa
                berupa individu, entitas komputer, atau mesin lainnya. Pengirim dan penerima
                memiliki tujuan yang sama dalam kriptografi, yaitu memastikan bahwa pesan dapat
                dikirim secara aman dan hanya dapat dibaca oleh pihak yang berwenang. Untuk mencapai
                hal ini, pengirim ingin pesan dapat dikirim secara aman sehingga pihak lain tidak
                dapat membaca atau memanipulasi pesan tersebut.
              </Text>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/Notasi2.png')} style={styles.image} />
              </View>
              <Text style={styles.textMateri}>
                {'\n'}Contoh penggunaan pengirim dan penerima dalam kriptografi adalah sebagai
                berikut:
                {'\n'}
                <Text style={styles.boldText}>Pengirim:</Text> Alice,
                <Text style={styles.boldText}> Penerima:</Text> Bob {'\n'}
                <Text style={styles.boldText}>Pengirim:</Text> Komputer client,
                <Text style={styles.boldText}> Penerima:</Text> Komputer server
                {'\n'}
                <Text style={styles.boldText}>Pengirim:</Text> Alice,
                <Text style={styles.boldText}> Penerima:</Text> Mesin penjawab
              </Text>
              <Text style={styles.textMateri}>
                <Text style={styles.boldText}>3. Cipherteks (ciphertext):</Text>Merupakan pesan yang
                telah disandikan atau dienkripsi sehingga tidak lagi memiliki makna yang jelas. Hal
                ini bertujuan untuk menjaga kerahasiaan pesan tersebut agar hanya dapat dibaca oleh
                pihak yang berwenang. Cipherteks juga dikenal dengan sebutan kriptogram
                (cryptogram).
              </Text>
              <Text style={styles.textMateri}>
                <Text style={styles.boldText}>4. Plainteks (plaintext):</Text> Merupakan pesan asli
                atau teks yang memiliki makna yang jelas sebelum dilakukan penyandian atau enkripsi.
                Plainteks dapat berupa teks biasa, angka, atau data lainnya yang akan diubah menjadi
                cipherteks. {'\n'}Contoh: {'\n'}
                <Text style={styles.boldText}>Plainteks:</Text> culik anak itu jam 11 siang {'\n'}
                <Text style={styles.boldText}>Cipherteks:</Text> t^$gfUi89rewoFpfdWqL:p[uTcxZ{'\n'}
                kamu dapat mencoba penerapanan plainteks di bawah ini :
              </Text>
              <View style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}>
                <Text style={styles.textMateri}>Plaintext:</Text>
                <TextInput
                  style={{ textAlign: 'center', fontFamily: 'Poppins_Regular' }}
                  value={plaintext}
                  onChangeText={(text) => setPlaintext(text)}
                  placeholder="Masukkan teks"
                />
                <Button title="Enkripsi" onPress={encryptText} />
                <Text style={styles.textMateri}>Hasil Ciphertext:</Text>
                <Text style={{ textAlign: 'center', fontFamily: 'Poppins_Regular' }}>
                  {ciphertext}
                </Text>
              </View>
              <Text style={styles.boldText}>Notasi Matematis</Text>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/notasi3.png')} style={styles.image2} />
              </View>
              <Text style={styles.textMateri}>
                Notasi matematis dalam kriptografi digunakan untuk menyampaikan konsep dan operasi
                kriptografi secara lebih formal menggunakan simbol-simbol matematika. Notasi ini
                membantu dalam menggambarkan hubungan antara plaintext, cipherteks, kunci, fungsi
                enkripsi, dan fungsi dekripsi secara matematis. {'\n'}
                Misalkan:{'\n'}C merupakan cipherteks,{'\n'}P merupakan plainteks.{'\n'}{' '}
              </Text>
              <View style={styles.rumusText}>
                <Text style={styles.rumus}>E(P) = C</Text>
              </View>
              <Text style={styles.textMateri}>
                {' '}
                {'\n'}Dalam kriptografi, fungsi enkripsi (E) akan memetakan plainteks (P) menjadi
                cipherteks (C). Notasi matematis untuk fungsi enkripsi adalah:
              </Text>
              <View style={styles.rumusText}>
                <Text style={styles.rumus}>D(C) = P</Text>
              </View>
              <Text style={styles.textMateri}>
                {'\n'}Fungsi dekripsi (D) akan memetakan cipherteks (C) kembali menjadi plainteks
                (P) asli. Notasi matematis untuk fungsi dekripsi adalah:
                {'\n'}
                Sifat yang harus dipenuhi oleh fungsi enkripsi dan dekripsi adalah bahwa jika
                plainteks (P) dienkripsi menjadi cipherteks (C) menggunakan fungsi enkripsi (E),
                kemudian cipherteks (C) tersebut didekripsi kembali menggunakan fungsi dekripsi (D),
                maka plainteks asli (P) akan kembali terbentuk. Dengan kata lain:
                {'\n'}
              </Text>
              <View style={styles.rumusText}>
                <Text style={styles.rumus}>D(E(P)) = P</Text>
              </View>
              <Text style={styles.textMateri}>
                Sifat ini menunjukkan bahwa proses enkripsi dan dekripsi adalah saling terbalik dan
                dapat mengembalikan plainteks asli dari cipherteks dengan menggunakan fungsi
                dekripsi yang sesuai.
              </Text>
              <Text style={styles.textMateri}>
                <Text style={styles.boldText}>5. Dekripsi (decryption):</Text> Merupakan proses
                mengembalikan cipherteks menjadi plainteks asli menggunakan algoritma kriptografi
                dan kunci dekripsi yang sesuai. Dekripsi dilakukan oleh penerima pesan yang memiliki
                kunci dekripsi yang benar.
              </Text>
              <Text style={styles.textMateri}>
                <Text style={styles.boldText}>6. Enkripsi (encryption):</Text> Merupakan proses
                mengubah pesan asli atau plainteks menjadi cipherteks menggunakan algoritma
                kriptografi dan kunci enkripsi tertentu. Enkripsi dilakukan agar pesan tidak dapat
                dengan mudah dibaca oleh pihak yang tidak berwenang.
              </Text>
              <Text style={styles.textMateri}>
                <Text style={styles.boldText}>7. Kunci (key):</Text> Kunci digunakan dalam proses
                enkripsi dan dekripsi untuk mengontrol algoritma kriptografi. Kunci ini bisa berupa
                deretan angka, karakter, atau kombinasi lainnya yang memiliki panjang dan format
                tertentu.
              </Text>
            </Animated.View>
          </ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.viewMulai}
              onPress={() => props.navigation.navigate('Fungsi')}>
              <Icon name="arrow-back-circle" type="ionicon" color="#FFFFFF" />
              <Text style={styles.textMulai}>Materi Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewMulai}
              onPress={() => props.navigation.navigate('Algoritma')}>
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

export default Notasi;

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
  boldText: {
    fontFamily: 'Poppins_SemiBold',
  },
  imageContainer: {
    alignItems: 'center',
  },
  centeredImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
});
