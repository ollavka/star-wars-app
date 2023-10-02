import { Spinner } from '@gluestack-ui/themed';
import { View, Text, StyleSheet } from 'react-native';

export const Loader = () => (
  <View style={styles.container}>
    <Spinner size="large" />
    <Text style={styles.text}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
});
