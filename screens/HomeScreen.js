import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Catergories from "../components/Catergories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?q=10&h=200",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            className="w-[90%]"
            placeholder="Restaurants"
            keyboardType="default"
          />
        </View>

        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Catergories />
      </ScrollView>

      <FeaturedRow
        id="Testing"
        title="Featured"
        description="Paid placement from our partners"
      />
      <FeaturedRow
        id="Testing"
        title="Featured"
        description="Paid placement from our partners"
      />
      <FeaturedRow
        id="Testing"
        title="Featured"
        description="Paid placement from our partners"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
