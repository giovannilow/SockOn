import React from "react";
import { View, Text, Image, TextInput, ImageBackground } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View>
      <ImageBackground
          source={assets.mountain}
          resizeMode="cover"
          style={{ width: "100%", height: 300 }}
        />
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: SIZES.font,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 100, height: 45 }}
          />

          <View style={{ width: 45, height: 45 }}>
            <Image
              source={assets.person01}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{
                position: "absolute",
                width: 15,
                height: 15,
                bottom: 0,
                right: 0,
              }}
            />
          </View>
        </View>

        <View style={{ marginVertical: SIZES.font }}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraLarge,
              color: COLORS.white,
              marginTop: SIZES.base / 2,
            }}
          >
            KATHMANDU, NEPAL
          </Text>
          
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.medium,
              color: COLORS.white,
            }}
          >
            4/3 - 9/3
          </Text>

        </View>

        <View style={{ marginTop: SIZES.font }}>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.gray,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <Image
              source={assets.search}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: SIZES.base }}
            />
            <TextInput
              placeholder="Search Documents"
              style={{ flex: 1 }}
              onChangeText={onSearch}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
