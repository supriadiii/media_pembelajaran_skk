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

const Soal = (props: any) => {
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
            <Text style={styles.title}>Contoh Soal Kriptografi</Text>
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
                  source={require('../assets/images/Soal.png')}
                  style={{ width: 280, height: 195, borderRadius: 20 }}
                />
              </View>
              <View style={styles.rumusText}>
                <Text style={styles.rumus}>Contoh Soal Kriptografi Algoritma Shift Cipher</Text>
              </View>
              <Text style={styles.textMateri}>
                Shift cipher, juga dikenal sebagai Caesar cipher, adalah salah satu jenis cipher
                substitusi sederhana dalam kriptografi. Cipher ini melibatkan pergeseran posisi
                setiap huruf dalam alfabet ke arah kanan atau ke kiri.
                {'\n'}Contoh Shift cipher dengan pergeseran 3 posisi ke kanan:{'\n'}• Plainteks:
                "HELLO" {'\n'}• Key = 3{'\n'}Tentukan ciphertext Proses enkripsi dapat dilakukan
                menggunakan langkah berikut :{'\n'}1. Buat table berikut:
              </Text>
              <View style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 20 }}>
                <Image source={require('../assets/images/table.png')} style={styles.image} />
              </View>
              <Text style={styles.textMateri}>
                2. Sesuaikan huruf pada plaintext dengan table nomor 1{'\n'}
                3. Cipherteks: "KHOOR"{'\n'}
                Dalam contoh di atas, setiap huruf dalam plainteks "HELLO" digeser ke kanan sebanyak
                3 posisi dalam alfabet. Huruf "H" berubah menjadi "K", huruf "E" berubah menjadi
                "H", dan seterusnya.
              </Text>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/TABLEHASIL.png')} style={styles.image2} />
              </View>
              <Text style={styles.textMateri}>
                Hasilnya adalah cipherteks "KHOOR". Pada Shift cipher, pergeseran posisi huruf
                biasanya direpresentasikan dalam bentuk kunci, misalnya kunci "3" untuk pergeseran 3
                posisi ke kanan. Dalam dekripsi, pergeseran posisi dilakukan ke arah yang berlawanan
                (ke kiri) dengan menggunakan kunci yang sama untuk mendapatkan kembali plainteks
                asli. Shift cipher adalah salah satu metode kriptografi yang sederhana dan mudah
                dipahami. Namun, karena hanya melibatkan pergeseran posisi huruf yang tetap, cipher
                ini mudah ditembus dengan menggunakan teknik analisis frekuensi dan metode lainnya.
              </Text>
              <View style={styles.rumusText}>
                <Text style={styles.rumus}>Contoh Soal Kriptografi Algoritma Shift Cipher</Text>
              </View>
              <Text style={styles.textMateri}>
                Mixed monoalphabetic cipher adalah jenis cipher substitusi yang menggunakan beberapa
                alfabet pengganti untuk mengenkripsi pesan. Pada cipher ini, setiap huruf dalam
                plainteks dapat digantikan oleh satu atau lebih huruf pengganti dalam alfabet yang
                berbeda.
                {'\n'}
                Contoh {'\n'}Plain text : ABCDEFGHIJKLMNOPQRSTUVWXYZ {'\n'}Cipher text :
                DKVQFIBJWPESCXHTMYAUOLRGZN {'\n'}Plain text : IF WE WISH TO REPLACE LETTERS {'\n'}
                Cipher Text : WI RF RWAJ UH FYTSDVF SFUUFYA
              </Text>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/abetic.png')} style={styles.image3} />
              </View>
              <Text style={styles.textMateri}>
                Dalam plainteks, terdapat urutan alfabet yang berurutan dari A sampai Z. Setiap
                huruf dalam plainteks kemudian digantikan oleh huruf pengganti yang sesuai dalam
                alfabet pengganti. Misalnya, huruf "A" pada plainteks digantikan oleh huruf "D"
                dalam alfabet pengganti, huruf "B" digantikan oleh huruf "K", huruf "C" digantikan
                oleh huruf "V", dan seterusnya. Sehingga, apabila plainteksnya adalah
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ", setelah melalui proses enkripsi dengan menggunakan
                {'\n'}
                {'\n'}Mixed monoalphabetic cipher dengan alfabet pengganti yang diberikan, maka
                cipherteksnya menjadi "DKVQFIBJWPESCXHTMYAUOLRGZN". Dalam contoh lain, terdapat
                sebuah kalimat "IF WE WISH TO REPLACE LETTERS". Setelah dienkripsi dengan
                menggunakan alfabet pengganti yang sama, menjadi "WI RF RWAJ UH FYTSDVF SFUUFYA"
                sebagai cipherteks. Dalam proses dekripsi, alfabet pengganti tersebut digunakan
                untuk mengembalikan cipherteks menjadi plainteks asli dengan menggantikan setiap
                huruf dalam cipherteks dengan huruf yang sesuai dalam plainteks.
              </Text>
              <View style={styles.rumusText}>
                <Text style={styles.rumus}>
                  Contoh Soal Kriptografi Algoritma Substitusi secara spiral
                </Text>
              </View>
              <Text style={styles.textMateri}>
                Substitusi secara spiral adalah sebuah metode substitusi dalam kriptografi yang
                menggunakan pola spiral untuk menggantikan huruf-huruf dalam plainteks. Pada metode
                ini, sebuah kata kunci digunakan untuk membentuk pola spiral yang akan menentukan
                urutan penggantian huruf.
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
              <Text style={styles.boldText}>Soal Matematis</Text>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/notasi3.png')} style={styles.image2} />
              </View>
              <Text style={styles.textMateri}>
                Soal matematis dalam kriptografi digunakan untuk menyampaikan konsep dan operasi
                kriptografi secara lebih formal menggunakan simbol-simbol matematika. Soal ini
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
                cipherteks (C). Soal matematis untuk fungsi enkripsi adalah:
              </Text>
              <View style={styles.rumusText}>
                <Text style={styles.rumus}>D(C) = P</Text>
              </View>
              <Text style={styles.textMateri}>
                {'\n'}Fungsi dekripsi (D) akan memetakan cipherteks (C) kembali menjadi plainteks
                (P) asli. Soal matematis untuk fungsi dekripsi adalah:
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

export default Soal;

const styles = StyleSheet.create({
  rumus: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#37C9EE',
    // width: 00,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
  },
  rumusText: {
    justifyContent: 'center',
    // alignItems: 'center',
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
    width: 350,
    height: 50,
    resizeMode: 'contain',
  },
  image2: {
    width: 380,
    height: 50,
    resizeMode: 'contain',
  },
  image3: {
    width: 320,
    height: 50,
    resizeMode: 'contain',
  },
});
