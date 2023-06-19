import { Icon } from '@rneui/base';
import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

const ModalMateri = ({ props, modalMateriVisible, setModalMateri }: any) => {
  const handlerPengertian = () => {
    setModalMateri(false);
    props.navigation.navigate('Pengertian');
  };
  const handlerSejarah = () => {
    setModalMateri(false);
    props.navigation.navigate('Sejarah');
  };
  const handlerFungsi = () => {
    setModalMateri(false);
    props.navigation.navigate('Fungsi');
  };
  const handlerNotasi = () => {
    setModalMateri(false);
    props.navigation.navigate('Notasi');
  };
  const handlerAlgoritma = () => {
    setModalMateri(false);
    props.navigation.navigate('Algoritma');
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalMateriVisible}
      onRequestClose={() => {
        setModalMateri(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.titleModal}>
            <Text style={styles.title}>Daftar Materi</Text>
            <TouchableOpacity
              style={{ padding: 2 }}
              onPress={() => {
                setModalMateri(false);
              }}>
              <Icon name="close" type="ionicon" color="#000000" size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.viewMateri} onPress={handlerPengertian}>
            <Text style={styles.textMateri}>Pengertian Kriptografi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewMateri} onPress={handlerSejarah}>
            <Text style={styles.textMateri}>Sejarah Kriptografi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewMateri} onPress={handlerFungsi}>
            <Text style={styles.textMateri}>Fungsi Kriptografi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewMateri} onPress={handlerNotasi}>
            <Text style={styles.textMateri}>Notasi Kriptografi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewMateri} onPress={handlerAlgoritma}>
            <Text style={styles.textMateri}>Algoritma Kriptografi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalMateri;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins_Bold',
    fontSize: 18,
  },
  titleModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textMateri: {
    fontFamily: 'Poppins_SemiBold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  viewMateri: {
    padding: 10,
    backgroundColor: '#37C9EE',
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 40,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 12,
  },
});
