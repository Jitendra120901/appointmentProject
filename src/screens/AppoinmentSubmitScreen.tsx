import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';

const AppointmentSubmitScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.halfCircle}>
              <Image
                source={require('../assets/check.png')}
                style={styles.checkMarkImage}
              />
            </View>

            <View style={{marginTop: 30}}>
              <Text style={styles.title}>
                Your appointment has been confirmed
              </Text>
              <Text style={styles.orderNumber}>
                Order No: PP1287486059-1345
              </Text>
            </View>

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  checkMarkImage: {
    width: 80, // Adjust width to fit
    height: 80, // Adjust height to fit
    resizeMode: 'contain', // Maintain aspect ratio
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    width: width * 0.8, // 90% of the screen width
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 20,
    height: 370,
  },
  halfCircle: {
    width: 340,
    height: 180,
    backgroundColor: '#2E4450', // Dark blue color
    borderBottomLeftRadius: 180, // Perfect half-circle
    borderBottomRightRadius: 170, // Perfect half-circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#61d1f5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, // Shadow effect
  },
  checkMark: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a3e4c',
    textAlign: 'center',
    marginTop: 10,
  },
  orderNumber: {
    fontSize: 14,
    color: '#6b6b6b',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#1a3e4c',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: '90%',
    marginTop: 30,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppointmentSubmitScreen;
