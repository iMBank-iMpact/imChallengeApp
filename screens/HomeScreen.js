import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>iM Challenge 홈 화면</Text>
      <Button title="챌린지 시작" onPress={() => navigation.navigate('Challenge')} />
    </View>
  );
}