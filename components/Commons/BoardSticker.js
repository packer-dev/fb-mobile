import * as React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import tailwind from "../../tailwind";
import Animation from "../Commons/Animation";
import stickers from "../../stickers";
import { func, number } from "prop-types";

const BoardSticker = ({ keyboardHeight, handle, width }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: keyboardHeight || 291,
      }}
    >
      <View style={tailwind(`flex-wrap flex-row gap-3`)}>
        {stickers.map((item) => (
          <TouchableOpacity
            onPress={() => handle(JSON.stringify(item), 2)}
            key={item.id}
            style={[tailwind(`mx-auto`), { width: width / 4 - 20 }]}
          >
            <Animation sticker={item} size={width / 4 - 20} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

BoardSticker.propTypes = {
  keyboardHeight: number,
  handle: func,
  width: number
}

export default BoardSticker;
