import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { GluestackProvider } from './providers/GluestackProvider';
import GlobalStyles from './utils/GlobalStyles';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './components/Navigator';
import { Provider as ApolloProvider } from './providers/ApolloProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
