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

const Sejarah = (props: any) => {
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
            <Text style={styles.title}>Sejarah Kriptografi</Text>
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
                  source={require('../assets/images/sejarah1.jpeg')}
                  style={{ width: 250, height: 150 }}
                />
              </View>
              <Text style={styles.textMateri}>
                Kriptografi memiliki sejarah yang panjang dan bermula sejak zaman kuno. Pada tahun
                400 SM, kriptografi telah digunakan di Yunani dengan menggunakan alat bernama
                scytale.
              </Text>
              <Text style={styles.textMateri}>
                Namun, sejarah kriptografi tidak hanya terbatas pada Yunani saja. Bangsa Arab juga
                memiliki kontribusi penting dalam pengembangan kriptografi. Dalam seri buku "Arabic
                Origins of Cryptology" yang diterbitkan oleh King Faisal Center for Research and
                Islamic Studies, Arab Saudi, penjelasan sejarah kriptografi pada bangsa Arab
                disajikan secara rinci. Seri ini mengungkapkan kontribusi penting ilmuwan Arab dalam
                pengembangan kriptografi.
              </Text>
              <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 20 }}>
                <Image
                  source={require('../assets/images/sejarah2.jpeg')}
                  style={{ width: 250, height: 320 }}
                />
              </View>
              <Text style={styles.textMateri}>
                Seri pertama dalam buku tersebut membahas manuskrip kuno yang ditulis oleh Al-Kindi,
                seorang ilmuwan Arab pada abad ke-9. Al-Kindi, yang juga dikenal sebagai Al-Kindus,
                adalah salah satu tokoh terkemuka dalam sejarah kriptografi. Dia adalah salah satu
                ilmuwan Muslim awal yang aktif dalam berbagai bidang pengetahuan, termasuk
                matematika, astronomi, dan filsafat. Karya Al-Kindi tentang kriptanalisis menjadi
                dasar penting dalam pengembangan teknik-teknik kriptografi.{' '}
              </Text>
              <Text style={styles.textMateri}>
                Seri kedua dalam buku tersebut membahas risalah Ibn Adlan. Risalah ini ditulis pada
                abad ke-13 dan berisi panduan praktis tentang kriptanalisis. Ibn Adlan adalah
                seorang sarjana dan pakar dalam berbagai bidang, termasuk matematika, astronomi, dan
                logika. Dia memberikan kontribusi signifikan dalam mengembangkan metode
                kriptanalisis yang digunakan pada masanya. Risalahnya menjadi sumber berharga bagi
                para pemecah kode dan memainkan peran penting dalam sejarah kriptografi pada masa
                itu. \
              </Text>
              <Text style={styles.textMateri}>
                Seri ketiga dalam buku "Arabic Origins of Cryptology" berfokus pada risalah Ibn
                ad-Durayhim. Ibn ad-Durayhim adalah seorang ilmuwan Arab yang hidup pada masa yang
                sama dengan Ibn Adlan. Risalahnya memberikan wawasan mendalam tentang berbagai
                teknik kriptografi dan kriptanalisis yang digunakan pada saat itu. Melalui risalah
                ini, Ibn ad-Durayhim berusaha untuk menyebarkan pengetahuan tentang kriptografi dan
                mendorong penggunaan teknik-teknik tersebut dalam menjaga kerahasiaan komunikasi.
              </Text>
              <Text style={styles.textMateri}>
                Buku "Arabic Origins of Cryptology" memberikan pemahaman yang lebih dalam tentang
                sumbangan penting ilmuwan Arab dalam sejarah kriptografi. Karya-karya mereka menjadi
                landasan bagi perkembangan teknik-teknik kriptografi yang digunakan hingga saat ini.
                Dengan mempelajari manuskrip kuno dan risalah mereka, kita dapat menghargai kekayaan
                intelektual dan warisan pengetahuan yang mereka tinggalkan dalam bidang kriptografi.
                Sejarah kriptografi juga terdokumentasi secara lengkap dalam buku David Kahn yang
                berjudul "The Codebreakers".
              </Text>

              <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 20 }}>
                <Image
                  source={require('../assets/images/sejarah3.jpeg')}
                  style={{ width: 250, height: 330 }}
                />
              </View>
              <Text style={styles.textMateri}>
                Dalam buku tersebut, terungkap bahwa ada empat kelompok orang yang menggunakan dan
                berkontribusi pada kriptografi. Kelompok pertama adalah militer, termasuk intelijen
                dan mata-mata, yang menggunakan kriptografi untuk menjaga kerahasiaan informasi
                strategis. Kelompok kedua adalah korp diplomatik yang menggunakan kriptografi untuk
                berkomunikasi dengan aman antara negara-negara. Kelompok ketiga adalah diarist,
                yaitu individu yang menggunakan kriptografi untuk menjaga kerahasiaan catatan
                pribadi mereka. Dan terakhir, kriptografi juga digunakan oleh pencinta (lovers) di
                India sebagai cara untuk berkomunikasi tanpa diketahui orang lain. Fakta ini
                ditemukan dalam buku Kama Sutra yang merekomendasikan wanita mempelajari seni
                memahami tulisan dengan cipher.\
              </Text>
              <Text style={styles.textMateri}>
                Pada abad ke-17, sejarah kriptografi mencatat peristiwa penting di Inggris yang
                melibatkan Ratu Mary dari Skotlandia, yang juga dikenal sebagai Queen Mary. Queen
                Mary dianggap sebagai ancaman politik bagi Ratu Elizabeth I, yang saat itu
                memerintah Inggris.
              </Text>

              <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 20 }}>
                <Image
                  source={require('../assets/images/sejarah4.jpeg')}
                  style={{ width: 250, height: 330 }}
                />
              </View>
              <Text style={styles.textMateri}>
                Queen Mary diketahui telah mengirimkan pesan rahasia dari balik penjara kepada
                pihak-pihak yang berencana untuk membunuh Ratu Elizabeth I. Pesan tersebut
                dienkripsi atau diubah menjadi bentuk yang sulit dipahami agar tidak diketahui oleh
                pihak lain. Namun, pesan tersebut berhasil dipecahkan oleh seorang pemecah kode
                bernama Thomas Phelippes.
              </Text>
              <Text style={styles.textMateri}>
                Thomas Phelippes adalah seorang ahli kriptografi yang bekerja untuk pemerintah
                Inggris. Dengan keahliannya dalam memecahkan kode, Phelippes berhasil menguraikan
                isi pesan rahasia Queen Mary yang berisi rencana pembunuhan terhadap Ratu Elizabeth
                I.
              </Text>
              <Text style={styles.textMateri}>
                Akibat dari pemecahan kode tersebut, Queen Mary dinyatakan bersalah dan dihukum
                dengan hukuman pancung di Inggris. Peristiwa ini menunjukkan betapa pentingnya
                kriptografi dalam konteks keamanan negara pada saat itu. Keberhasilan pemecahan kode
                oleh Thomas Phelippes memainkan peran kunci dalam menggagalkan upaya pembunuhan
                tersebut dan menjaga stabilitas politik Inggris.
              </Text>
              <Text style={styles.textMateri}>
                Peristiwa ini juga menegaskan perlunya pengembangan metode dan teknik kriptografi
                yang kuat untuk melindungi komunikasi yang sensitif. Sejak saat itu, sejarah
                kriptografi terus berkembang dengan adanya tantangan baru dan kemajuan teknologi,
                tetapi pentingnya kriptografi dalam melindungi kerahasiaan dan keamanan informasi
                tetap menjadi faktor utama dalam kehidupan modern.
              </Text>
              <Text style={styles.textMateri}>
                Sejarah kriptografi mencapai puncaknya selama Perang Dunia II. Pemerintah Nazi
                Jerman menciptakan mesin enkripsi yang dikenal sebagai Enigma. Namun, pihak Sekutu
                berhasil memecahkan kode Enigma, yang dianggap sebagai faktor yang memperpendek
                perang dunia tersebut.
              </Text>

              <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 20 }}>
                <Image
                  source={require('../assets/images/sejarah5.jpeg')}
                  style={{ width: 250, height: 200 }}
                />
              </View>
              <Text style={styles.textMateri}>
                Dalam sejarahnya, kriptografi dan kriptanalisis telah mengalami perkembangan yang
                signifikan. Kini, kriptografi menjadi bagian penting dalam dunia digital untuk
                menjaga keamanan dan kerahasiaan informasi yang sensitif.
              </Text>
            </Animated.View>
          </ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={styles.viewMulai}
              onPress={() => props.navigation.navigate('Pengertian')}>
              <Icon name="arrow-back-circle" type="ionicon" color="#FFFFFF" />
              <Text style={styles.textMulai}>Materi Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewMulai}
              onPress={() => props.navigation.navigate('Fungsi')}>
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

export default Sejarah;

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
