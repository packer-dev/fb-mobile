import * as React from 'react';
import tailwind from '../../tailwind';
import { View, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { func, string } from 'prop-types';

const SearchWrapper = ({ search, setSearch }) => {
  return (
    <View style={tailwind(`w-full p-3`)}>
      <View
        style={tailwind(
          `flex-row gap-2 items-center p-3 rounded-full bg-gray-300`
        )}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="gray"
          style={tailwind(`flex-1`)}
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );
};

SearchWrapper.propTypes = {
  search: string,
  setSearch: func
}

export default SearchWrapper;
