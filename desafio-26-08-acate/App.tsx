import Home from './src/screens/Home'
import { View } from 'react-native';

import { ApolloProvider } from '@apollo/client'; 
import client from './src/service'

import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ApolloProvider>
  );
}
