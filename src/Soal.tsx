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
                <Text style={styles.rumus}>
                  Contoh Soal Kriptografi Algoritma Mixed Monoalphabetic
                </Text>
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
                urutan penggantian huruf.{'\n'}
                Untuk plaintext :{'\n'}
              </Text>

              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/plain.png')} style={styles.image4} />
              </View>
              <Text style={styles.textMateri}>
                Kata kunci : texas
                {'\n'}
                Kemudian kata kunci digunakan untuk membentuk :
              </Text>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/kunci.jpg')} style={styles.image5} />
              </View>
              <Text style={styles.textMateri}>Sehingga diperoleh chipper :</Text>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/cipe.png')} style={styles.image4} />
              </View>

              <Text style={styles.textMateri}>
                Dalam penggantian huruf di atas, setiap huruf di plainteks digantikan dengan huruf
                yang sesuai berdasarkan urutan yang ditentukan oleh kata kunci "texas". Misalnya,
                huruf A pada plainteks digantikan dengan huruf Z dalam cipherteks, huruf B
                digantikan dengan huruf R, dan seterusnya. Pola penggantian huruf tersebut mengikuti
                urutan huruf dalam kata kunci "texas". Dalam contoh ini, kata kunci "texas"
                memberikan aturan penggantian huruf yang unik dan khusus sesuai dengan urutan yang
                ditentukan oleh kata kunci tersebut.
              </Text>

              <View style={styles.rumusText}>
                <Text style={styles.rumus}>Contoh Soal Kriptografi Algoritma Playfair</Text>
              </View>

              <Text style={styles.textMateri}>
                Algoritma Playfair adalah algoritma yang didasarkan pada penggunaan matrix huruf
                berbasis 5x5 yang disusun dengan mengunakan kata kunci. {'\n'}
                Contoh :{'\n'}Kata kunci = MONARCHY.{'\n'}
                Plaintext = COKLAT{'\n'}
                Matrix dibentuk dengan memasukkan kata kunci tersebut (tanpa duplikasi) dari kiri ke
                kanan dan dari atas ke bawah, dan kemudian mengisi sisa elemen matrix yang kosong
                dengan sisa huruf alphabet secara terurut. Huruf I dan J dihitung sebagai satu
                elemen matrix. Plaintext dienkripsi dua huruf sekaligus dengan aturan sebagai
                berikut :
              </Text>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/PLAYFAIR.jpeg')} style={styles.image5} />
              </View>
              <Text style={styles.textMateri}>
                1.Huruf dari Plaintext yang terulang dipisahkan dengan huruf lain seperti X, jadi
                jika plaintextnya ballon maka akan dimasukkan sebagai BA LX LO ON.{'\n'}
                2.Huruf-huruf dari plaintext yang masuk di dalam satu baris digantikan dengan huruf
                ke kanan, dengan elemen pertama dari baris secara sirkular diikuti dengan yang
                terakhir.{'\n'}
                3.Sebagai contoh, AR dienkripsi menjadi RM Huruf yang berada pada satu kolom
                digantikan dengan huruf dibawahnya, dengan elemen teratas dari baris secara sirkular
                diikuti dengan yang terakhir.{'\n'}
                4.Sebagai contoh, MU dienkripsi sebagai CM. Selain itu, setiap huruf plaintext
                digantikan dengan huruf yang berada di barisnya sendiri dan di kolomnya diisi oleh
                huruf palaintext yang lain. Jadi, HS menjadi BP dan EA menjadi IM (atau JM sesuai
                dengan keinginan).
              </Text>

              <Text style={styles.textMateri}>
                Sehingga berdasarkan contoh soal diatas jika COKLAT di enkripsi menggunakan
                algoritma Playfair dengan kata kunci MONARCHY, maka hasilnya adalah : MHETRS
              </Text>
              <View style={styles.rumusText}>
                <Text style={styles.rumus}>Contoh Soal Kriptografi Algoritma Vigenere</Text>
              </View>
              <Text style={styles.textMateri}>
                Vigenere Cipher ditemukan oleh Blaise de Vigenere pada abad ke 16. Untuk menggunakan
                algoritma ini, diperlukan sebuah bujursangkar vigenere dimana kolom paling kiri
                bujursangkar menyatakan huruf-huruf kunci, sedangkan baris paling atas menyatakan
                huruf-huruf plaintext dan setiap baris di dalam bujursangkar menyatakan huruf-huruf
                ciphertext.{'\n'}
                Contoh:{'\n'}
                Plaintext: ATTACKATDAWN{'\n'}
                Panjang plaintext: 12 huruf{'\n'}
                Kata kunci: LEMON (5 huruf){'\n'}
                Kata kunci: LEMONLEMONLE (12 huruf)
              </Text>

              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/Vigenere.jpg')} style={styles.image5} />
              </View>
              <Text style={styles.textMateri}>
                Huruf pertama dari plaintext adalah A, dienskripsi dengan menggunakan alfabet pada
                baris L, yang merupakan huruf pertama pada kata kunci. Ini dilakukan dengan melihat
                huruf yang terdapat pada baris L dan kolom A pada tabel vigenere, yaitu huruf
                L.Untuk huruf kedua pada plaintext, kita menggunakan huruf kedua pada kata kunci,
                yaitu pada baris E dan kolom T, yaitu huruf X. Lakukan terus hingga huruf terakhir
                plaintext sehingga menghasilkan enkripsi sebagai berikut:{'\n'}
                {'\n'}
                Ciphertext: LXFOPVEFRNHR{'\n'}
                {'\n'}
                Dekripsi dilakukan dengan cara sebaliknya. Misalkan untuk huruf pertama ciphertext,
                L, kita cari huruf pertama kata kunci pada baris L, dimana huruf pertama kata kunci
                juga merupakan huruf L. Kemudian kita dapat menemukan pada baris L, huruf L terdapat
                pada kolom A, yang mengartikan bahwa huruf A merupakan huruf pertama plaintext.
                Laukan terus hingga jumlah huruf pada kata kunci habis.
              </Text>
            </Animated.View>
          </ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.viewMulai}
              onPress={() => props.navigation.navigate('Algoritma')}>
              <Icon name="arrow-back-circle" type="ionicon" color="#FFFFFF" />
              <Text style={styles.textMulai}>Materi Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewMulai}
              onPress={() => props.navigation.navigate('Home')}>
              <Text style={styles.textMulai}>Menu Utama</Text>
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
  image4: {
    width: 320,
    height: 30,
    resizeMode: 'contain',
  },
  image5: {
    width: 300,
    height: 350,
    resizeMode: 'contain',
  },
});
