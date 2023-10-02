import {
  View,
  FlatList,
  FlatListProps,
} from 'react-native';

export const List = <T extends { id: string }>(props: FlatListProps<T>) => {
  const { data, refreshControl, renderItem, style } = props;

  return (
    <View>
      <FlatList
        style={style}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={refreshControl}
      />
    </View>
  );
};
