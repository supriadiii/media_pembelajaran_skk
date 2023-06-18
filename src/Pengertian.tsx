import { View, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Animated } from 'react-native';

const Pengertian = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <Text style={styles.text}>Media Pembelajaran</Text>
          {/* Konten lainnya */}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default Pengertian;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
