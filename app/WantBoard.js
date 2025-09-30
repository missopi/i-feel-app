import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from './styles/ChoiceBoardStyles';

const WantBoard = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 10 }}>Want Board</Text>
        <Text style={{ paddingBottom: 10 }}>Select up to eight wants to include on your "I want..." board.</Text>

        <TouchableOpacity
          style={[
            styles.createBoardButton,
            { borderColor: '#999' },
          ]}
        >
          <Text 
            style={[
              styles.createBoardButtonText,
              { color: '#999' },
            ]}
          >Create Board</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WantBoard;