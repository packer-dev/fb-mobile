import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tailwind from "../../../tailwind";
import ItemMediaList from "./ItemMediaList";

const MediaList = ({ list, status, name, total }) => {
  return list?.length ? (
    <View style={tailwind(`flex-col gap-3 p-3`)}>
      <View style={tailwind(`flex-row justify-between items-center`)}>
        <View>
          <Text style={tailwind(`font-bold mb-1`)}>{name}</Text>
          {!status && total !== 0 && (
            <Text style={tailwind(`text-gray-500 text-sm`)}>
              {total} friends.
            </Text>
          )}
        </View>
        <Text style={tailwind(`text-primary`)}>View all</Text>
      </View>
      <View style={tailwind(`flex-row justify-start flex-wrap gap-2`)}>
        {list?.slice(0, 9).map((item) => (
          <ItemMediaList key={Math.random()} media={item} status={status} />
        ))}
      </View>
      <TouchableOpacity style={tailwind(`bg-gray-300 rounded-lg p-3 w-full`)}>
        <Text style={tailwind(`font-bold text-center`)}>View all friends</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <></>
  );
};

export default MediaList;
