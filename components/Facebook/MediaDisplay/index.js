import { Image, View } from "react-native";
import tailwind from "../../../tailwind";
import { array, bool, number } from "prop-types";

const MediaDisplay = ({ medias = [], width, real }) => {
  const widthTopOne = (width - (real ? 4 : 28)) / 2;
  const widthTopTwo = width - (real ? 0 : 24);
  const heightTopOne = (width - (real ? 12 : 36)) / 2;

  const widthBottomOne = width - (real ? 0 : 24);
  const widthBottomTwo = (width - (real ? 24 : 28)) / 2;
  const widthBottomThree = (width - (real ? 8 : 24 + 8)) / 3;
  const widthBottom = medias.length === 4 ? widthBottomTwo : widthBottomThree;

  const heightBottomOne = width - (real ? 36 : 48);
  const heightBottomTwo = (width - (real ? 24 : 36)) / 2;
  const heightBottomThree = (width - (real ? 36 : 48)) / 3;
  const heightBottom =
    medias.length === 4 ? heightBottomTwo : heightBottomThree;
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
              tailwind(medias.length === 1 ? "" : `rounded-lg`),
              {
                width: medias.length >= 2 ? widthTopOne : widthTopTwo,
                height: medias.length >= 2 ? heightTopOne : 500,
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
                width: medias.length === 3 ? widthBottomOne : widthBottom,
                height: medias.length === 3 ? heightBottomOne : heightBottom,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

MediaDisplay.propTypes = {
  medias: array,
  width: number,
  real: bool,
};

export default MediaDisplay;
