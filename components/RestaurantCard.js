import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View>
        <Text></Text>
        <View>
          <StarIcon />
          <Text>
            <Text></Text>
          </Text>
        </View>

        <View>
          <MapPinIcon />
          <Text></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
