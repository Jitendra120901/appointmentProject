import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CustomHeader from '../customComponent/CustomHeader';
import CustomTextInput from '../customComponent/CustomTextInput';
import CustomDropdown from '../customComponent/CustomDropdown';
import colors from '../constant/ColorConstant';
import {useNavigation} from '@react-navigation/native';

const AddPatientScreen = () => {
  const genderOptions = ['Male', 'Female', 'Other'];
  const patientTypes = ['Inpatient', 'Outpatient'];
  const titleOptions = ['HealthTrack', 'DoctorMate', 'MyMediPlan'];

  const [address, setAddress] = useState();
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('chooseDate');
  };
  return (
    <View style={styles.container}>
      <CustomHeader title="Add Patient" onBackPress={() => {}} />

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Patient details</Text>

        <View style={styles.row}>
          <CustomDropdown
            options={titleOptions}
            placeholder="Title"
            containerStyle={styles.titleDropDown}
          />
          <CustomTextInput
            placeholder="Full Name"
            style={styles.fullname}
            icon={undefined}
          />
        </View>

        <View style={styles.row2}>
          <CustomTextInput
            placeholder="Date of Birth"
            icon="📅"
            style={styles.birthdayInput}
          />
          <CustomDropdown
            options={genderOptions}
            placeholder="Gender"
            containerStyle={styles.gemderDropDown}
          />
        </View>

        <View style={{zIndex: -1}}>
          <CustomTextInput
            placeholder="Mobile Number"
            style={styles.mobileNum}
            icon={undefined}
          />

          <CustomTextInput
            placeholder="Email ID"
            style={styles.fullInput}
            icon={undefined}
          />
        </View>

        <CustomDropdown
          options={patientTypes}
          placeholder="Patient Type"
          containerStyle={styles.fullInput}
        />

        <View style={styles.inputWrapper}>
          {!address && <Text style={styles.placeholder}>Address</Text>}

          <TextInput
            value={address}
            onChangeText={setAddress}
            style={styles.addressInput}
            multiline
          />
        </View>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff4f6',
  },
  formContainer: {
    flex: 1,
    marginTop: 16,

    borderRadius: 8,
    padding: 17,
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkText,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 8,
    width: 111,
    height: 53,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 7,
  },

  fullname: {
    flex: 1,
    width: 39,
    height: 53,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 7,
    marginHorizontal: 2,
  },

  birthdayInput: {
    flex: 1,
    marginHorizontal: 2,
    width: 191,
    height: 53,
    borderWidth: 1,
    borderColor: '#ADADAD',
  },

  titleDropDown: {
    width: 115,
    height: 53,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 7,
    zIndex: 10,
  },
  gemderDropDown: {
    width: 182,
    height: 53,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 7,
    zIndex: 10,
  },
  fullInput: {
    width: '100%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 7,
    height: 53,
  },
  mobileNum: {
    width: '100%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 7,
    height: 53,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 7,
    height: 93,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  placeholder: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#ADADAD',
    fontSize: 16,
  },
  addressInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    textAlignVertical: 'top', // Aligns text input to the top
  },
  icon: {
    position: 'absolute',
    right: '50%',
    transform: [{translateX: 15}], // Adjust icon placement to the center
    fontSize: 24,
    color: '#ADADAD',
  },
  proceedButton: {
    backgroundColor: '#15C2D5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddPatientScreen;
