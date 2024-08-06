import React from "react";
import "./global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "./components/ui/text";
import { SafeAreaView } from "./components/ui/safe-area-view";
import { View } from "./components/ui/view";
import { FlatList } from "./components/ui/flat-list";
import { FlatList as RNFlatList } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }: { title: string }) => (
  <View className="bg-pink-300">
    <Text className="text-2xl">{title}</Text>
  </View>
);

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView className="flex-1">
        {/* <Text className="text-blue-500">
          Open up App.tsx to start working on your app!
        </Text> */}
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
