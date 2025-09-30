import { useRouter } from 'expo-router';
import { SafeAreaView, View } from "react-native";
import Emotions from "./components/Emotions";

const FeelingsBoard = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Emotions 
          onCreateBoard={(selected) => 
            router.push('/CreatedFeelingsBoard', { selectedEmotions: selected })
          } 
        />
      </View>
    </SafeAreaView>
  );
};

export default FeelingsBoard;