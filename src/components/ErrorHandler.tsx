import { ApolloError } from '@apollo/client';
import { FC } from 'react';
import { StyleSheet, RefreshControl, ScrollView, View, Text } from 'react-native';

type Props = {
  refreshing?: boolean;
  onRefresh?: () => void;
  error: ApolloError;
};

export const ErrorHandler: FC<Props> = ({
  error,
  onRefresh = () => {},
  refreshing = false,
}) => (
  <ScrollView
    contentContainerStyle={styles.container}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
  >
    <Text style={styles.text}>Error: {error.message}</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#ce2727',
    textAlign: 'center',
  },
});
