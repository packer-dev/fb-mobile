import * as React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import tailwind from "../../../tailwind";
import { AppContext } from "../../../contexts/index";
import { any, object } from "prop-types";

const width = Dimensions.get("window").width - 24;

const ItemMediaList = ({ media, status }) => {
  const { updateData } = React.useContext(AppContext);

  return (
    <TouchableOpacity
      onPress={() => updateData("visit", media?.user)}
      style={{ ...tailwind(`my-1`), width: (width - 16) / 3 }}
    >
      <Image
        source={{
          uri: status
            ? media?.media?.url
            : media?.user?.avatar || `https://picsum.photos/536/354`,
        }}
        style={{
          ...tailwind(`rounded-lg`),
          ...{ width: (width - 16) / 3, height: (width - 16) / 3 },
        }}
      />
      {!status && (
        <View style={tailwind(`p-1.5 pt-2 pb-1.5 flex-col gap-2`)}>
          <Text style={tailwind(`font-bold`)}>
            {media?.user?.name || "Packer Tra"}
          </Text>
          <Text style={tailwind(`text-gray-500 text-sm`)}>
            {media?.manual ? `${media?.manual} manual friend` : ` `}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

ItemMediaList.propTypes = {
  media: object,
  status: any
}

export default ItemMediaList;
