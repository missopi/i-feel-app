import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import styles from './styles/ChoiceBoardStyles';

const NeedsBoard = () => {;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 10 }}>Need Board</Text>
        <Text style={{ paddingBottom: 10 }}>Select up to eight needs to include on your "I need..." board.</Text>

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

export default NeedsBoard;