import * as React from "react";
import { View, Dimensions, Text, Image, ScrollView } from "react-native";
import tailwind from "../../../tailwind";
import { AntDesign } from "@expo/vector-icons";
import MediaDisplay from "../MediaDisplay";

const width = Dimensions.get("window").width;

const Content = ({ post, medias = [], feel }) => {
  return (
    <View style={tailwind(`flex-col gap-3 pb-3 border-b border-gray-300`)}>
      <Text style={tailwind(`px-3`)}>
        {post?.content?.text || "Hello world"}
      </Text>
      {(post?.type === 0 || post?.type === 1) && (
        // <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        //   <View style={tailwind(`flex-row w-full`)}>
        //     {medias?.map((item) => (
        //       <Image
        //         key={item?.id}
        //         source={{
        //           uri: item?.url || `https://picsum.photos/536/354`,
        //         }}
        //         style={{
        //           ...tailwind(`h-72 mx-auto rounded-sm`),
        //           width,
        //         }}
        //       />
        //     ))}
        //   </View>
        // </ScrollView>
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
              uri: post?.user?.avatar || `https://picsum.photos/536/354`,
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
        <></>
      )}
    </View>
  );
};

export default Content;
