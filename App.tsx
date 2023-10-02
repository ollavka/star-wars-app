import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { GluestackProvider } from './src/providers/GluestackProvider';
import GlobalStyles from './src/utils/GlobalStyles';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/components/Navigator';
import { Provider as ApolloProvider } from './src/providers/ApolloProvider';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <ApolloProvider>
      <Provider store={store}>
        <NavigationContainer>
          <GluestackProvider>
            <SafeAreaView style={GlobalStyles.container}>
              <Navigator />
              <StatusBar style="auto" />
            </SafeAreaView>
          </GluestackProvider>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
