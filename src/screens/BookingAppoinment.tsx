import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import CustomHeader from '../customComponent/CustomHeader';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ColorConstant from '../constant/ColorConstant';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const CustomCalendar = () => {
  const [expandedSection, setExpandedSection] = useState('Morning');
  const [selectedDate, setSelectedDate] = useState(null);
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const daysInMonth = Array.from({length: 31}, (_, i) => i + 1);

  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("successScreen");
  };

  const timeSlots = [
    '08:30am - 09:00am',
    '08:30am - 09:00am',
    '08:30am - 09:00am',
    '08:30am - 09:00am',
    '08:30am - 09:00am',
    '08:30am - 09:00am',
    '08:30am - 09:00am',
    '08:30am - 09:00am',
  ];

  const handleDateSelect = day => {
    setSelectedDate(day);
  };

  const toggleSection = section => {
    setExpandedSection(prevSection =>
      prevSection === section ? null : section,
    );
  };

  return (
    <>
      <CustomHeader title="Book Appointment" onBackPress={() => {}} />
      <ScrollView style={styles.container}>
       
        <View style={styles.card1}>
          <Text style={styles.title}>Select Date</Text>

         
          <View style={styles.row1}>
            {daysOfWeek.map((day, index) => (
              <Text
                key={index}
                style={[
                  styles.dayOfWeek1,
                  index === selectedDate - 1 ? styles.activeDayText1 : {},
                ]}>
                {day}
              </Text>
            ))}
          </View>

          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer1}>
            {daysInMonth.map(day => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.dateBox,
                  selectedDate === day ? styles.selectedDateBox1 : {},
                ]}
                onPress={() => handleDateSelect(day)}>
                <Text
                  style={[
                    styles.dateText1,
                    selectedDate === day ? styles.selectedDateText1 : {},
                  ]}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
       
        <Text style={styles.sectionTitle}>Schedule time</Text>

        
        <TouchableOpacity
          style={[
            styles.scheduleCard,
            expandedSection === 'Morning' && styles.activeCard,
          ]}
          onPress={() => toggleSection('Morning')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/moring.png')} // Update the path to your image
              style={styles.iconImage1}
            />
            <Text style={styles.scheduleHeader}>Afternoon</Text>
          </View>
        </TouchableOpacity>

        {expandedSection === 'Morning' && (
          <View style={styles.timeSlots}>
            {timeSlots.map((slot, index) => (
              <TouchableOpacity key={index} style={styles.timeSlot}>
                <Text style={styles.timeSlotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

       
        <TouchableOpacity
          style={[
            styles.scheduleCard,
            expandedSection === 'Afternoon' && styles.activeCard,
          ]}
          onPress={() => toggleSection('Afternoon')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/sun.png')} 
              style={styles.iconImage}
            />
            <Text style={styles.scheduleHeader}>Afternoon</Text>
          </View>
        </TouchableOpacity>
        {expandedSection === 'Afternoon' && (
          <View style={styles.timeSlots}>
            {timeSlots.map((slot, index) => (
              <TouchableOpacity key={index} style={styles.timeSlot}>
                <Text style={styles.timeSlotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        <TouchableOpacity
          style={[
            styles.scheduleCard,
            expandedSection === 'Evening' && styles.activeCard,
          ]}
          onPress={() => toggleSection('Evening')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/sunrise.png')} 
              style={styles.iconImage2}
            />
            <Text style={styles.scheduleHeader}>Afternoon</Text>
          </View>
        </TouchableOpacity>
        {expandedSection === 'Evening' && (
          <View style={styles.timeSlots}>
            {timeSlots.map((slot, index) => (
              <TouchableOpacity key={index} style={styles.timeSlot}>
                <Text style={styles.timeSlotText}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
       
        <TouchableOpacity style={styles.submitButton} onPress={handleNavigate}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  iconImage: {
    width: 20, 
    height: 20, 
    marginRight: 8, 
    backgroundColor: '#FF5353',
    borderRadius: 10,
  },
  iconImage1: {
    width: 20, 
    height: 20, 
    marginRight: 8, 
    backgroundColor: '#FF9154',
    borderRadius: 10,
  },
  iconImage2: {
    width: 20, 
    height: 20, 
    marginRight: 8, 
    backgroundColor: '#043A77',
    borderRadius: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dayOfWeek: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  activeDayText: {
    color: '#00BCD4',
    fontWeight: 'bold',
  },
  dateBox: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedDateBox: {
    backgroundColor: '#00BCD4',
  },
  dateText: {
    fontSize: 16,
    color: '#374151',
  },
  selectedDateText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  scheduleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeCard: {
    borderColor: '#00BCD4',
    borderWidth: 1,
  },
  scheduleHeader: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  icon: {
    fontSize: 18,
  },
  timeSlots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  timeSlot: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ADADAD',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#ADADAD',
  },
  submitButton: {
    backgroundColor: '#00BCD4',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //dates styles

  card1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title1: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  scrollContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayOfWeek1: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 4,
  },
  activeDayText1: {
    color: '#00C7D4',
    fontWeight: 'bold',
  },
  dateBox1: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: '#f0f0f0',
  },
  selectedDateBox1: {
    backgroundColor: '#00C7D4',
  },
  dateText1: {
    fontSize: 14,
    color: '#333',
  },
  selectedDateText1: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomCalendar;
