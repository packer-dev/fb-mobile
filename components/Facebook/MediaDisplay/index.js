import { Image, View } from "react-native";
import tailwind from "../../../tailwind";

const MediaDisplay = ({ medias = [], width, real }) => {
  return (
    <View
      style={{
        width: width,
        margin: "auto",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      <View style={tailwind(`flex-row gap-1`)}>
        {medias?.slice(0, 2).map((media) => (
          <Image
            key={media.uri}
            source={{ uri: media.uri }}
            style={[
              tailwind(`rounded-lg`),
              {
                width:
                  medias.length >= 2
                    ? (width - (real ? 4 : 28)) / 2
                    : width - (real ? 0 : 24),
                height:
                  medias.length >= 2 ? (width - (real ? 12 : 36)) / 2 : 300,
              },
            ]}
          />
        ))}
      </View>
      <View style={tailwind(`flex-row gap-1`)}>
        {medias?.slice(2, 5).map((media) => (
          <Image
            key={media.uri}
            source={{ uri: media.uri }}
            style={[
              tailwind(`rounded-lg`),
              {
                width:
                  medias.length === 3
                    ? width - (real ? 0 : 24)
                    : medias.length === 4
                    ? (width - (real ? 24 : 28)) / 2
                    : (width - (real ? 8 : 24 + 8)) / 3,
                height:
                  medias.length === 3
                    ? width - (real ? 36 : 48)
                    : medias.length === 4
                    ? (width - (real ? 24 : 36)) / 2
                    : (width - (real ? 36 : 48)) / 3,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default MediaDisplay;
