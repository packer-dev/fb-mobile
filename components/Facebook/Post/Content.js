import * as React from "react";
import { View, Dimensions, Text, Image } from "react-native";
import tailwind from "../../../tailwind";
import { AntDesign } from "@expo/vector-icons";
import MediaDisplay from "../MediaDisplay";
import { any, array, object } from "prop-types";

const width = Dimensions.get("window").width;

const Content = ({ post, medias = [], feel = [], comment = 0 }) => {
  return (
    <View style={tailwind(`flex-col gap-3 pb-3 border-b border-gray-300`)}>
      <Text style={tailwind(`px-3`)}>
        {post?.content?.text || "Hello world"}
      </Text>
      {(post?.type === 0 || post?.type === 1) && (
        <MediaDisplay
          medias={medias.map((item) => ({ ...item, uri: item?.url }))}
          width={width}
          real
        />
      )}
      {post?.type === 3 && medias.length > 0 && (
        <View style={tailwind(`w-full relative`)}>
          <Image
            source={{
              uri: post?.user?.cover || `https://picsum.photos/536/354`,
            }}
            style={tailwind(`w-full h-60 absolute top-0 left-0 z-0`)}
          />
          <View
            style={[
              tailwind(
                `rounded-full bg-white p-1 mt-12 border-gray-300 border mx-auto relative z-20`
              ),
              {
                width: (width * 75) / 100,
                height: (width * 75) / 100,
              },
            ]}
          >
            <Image
              source={{ uri: medias[0].url || `https://picsum.photos/536/354` }}
              style={tailwind(`w-full h-full rounded-full`)}
            />
          </View>
        </View>
      )}
      {post?.type === 2 && medias.length > 0 && (
        <View style={tailwind(`w-full relative`)}>
          <Image
            source={{
              uri: post?.user?.cover || `https://picsum.photos/536/354`,
            }}
            style={tailwind(`w-full h-60`)}
          />
        </View>
      )}
      <View style={tailwind(`flex-row justify-between pr-3`)}>
        {feel?.length > 0 ? (
          <View style={tailwind(`flex-row items-center`)}>
            <Text style={tailwind(`px-3 text-gray-700 font-bold`)}>
              {feel?.length}
            </Text>
            <AntDesign
              name="heart"
              size={16}
              style={tailwind(`text-primary -ml-1`)}
            />
          </View>
        ) : (
          <View></View>
        )}
        {comment ? (
          <View style={tailwind(`flex-row items-center`)}>
            <Text style={tailwind(`px-1 text-gray-700 font-bold`)}>
              {comment}
            </Text>
            <Text style={tailwind(`text-gray-700`)}>Comments</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

Content.propTypes = {
  post: object,
  medias: array,
  feel: any,
};

export default Content;
