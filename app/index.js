import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/styles';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/FeelingsBoard')}>
          <Text style={styles.buttonText}>I Feel...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/NeedsBoard')}>
          <Text style={styles.buttonText}>I Need...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/WantBoard')}>
          <Text style={styles.buttonText}>I Want...</Text>  
        </TouchableOpacity>
      </View>
    </View>
  );
}
