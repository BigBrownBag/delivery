import { ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Catergories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard
        imgUrl="https://n1s1.hsmedia.ru/3b/b9/2e/3bb92eb5c0243f41c8f0fd14044619cd/1861x1387_0xac120003_1225909181634638355.jpeg"
        title="Sushi"
      />
      <CategoriesCard
        imgUrl="https://n1s1.hsmedia.ru/3b/b9/2e/3bb92eb5c0243f41c8f0fd14044619cd/1861x1387_0xac120003_1225909181634638355.jpeg"
        title="Sushi"
      />
      <CategoriesCard
        imgUrl="https://n1s1.hsmedia.ru/3b/b9/2e/3bb92eb5c0243f41c8f0fd14044619cd/1861x1387_0xac120003_1225909181634638355.jpeg"
        title="Sushi"
      />
    </ScrollView>
  );
};

export default Catergories;
