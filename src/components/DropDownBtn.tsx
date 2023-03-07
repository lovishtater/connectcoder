import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants';

const SplitButtonDropdown = ({
  name,
  size,
  isActivated,
  style,
  onPress,
}: {
  name: string;
  size: number;
  isActivated: boolean;
  style: any;
  onPress: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('0 min');
  const options = [
    {id: 1, label: '5 min'},
    {id: 2, label: '10 min'},
    {id: 3, label: '30 min'},
  ];

  const handleOptionPress = option => {
    setSelectedOption(option.label);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonLabel}>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(prev => !prev)}>
        <Text style={styles.dropdownButtonLabel}>{selectedOption}</Text>
      </TouchableOpacity>
      {modalVisible ? (
        <View style={styles.modalContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionPress(option)}
              style={styles.option}>
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
      {selectedOption ? (
        <View style={styles.selectedOption}>
          <Text>{selectedOption.label}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 3000,
  },
  submitButton: {
    backgroundColor: COLORS.button.filled.secondary.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  submitButtonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dropdownButton: {
    backgroundColor: COLORS.button.filled.primary.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
  },
  dropdownButtonLabel: {
    fontWeight: 'bold',
  },
  modalContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#aaa',
    padding: 10,
    borderRadius: 5,
    zIndex: 3000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 3000,
  },
  selectedOption: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
});

export default SplitButtonDropdown;
