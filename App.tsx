import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "./components/ui/text";
import { SafeAreaView } from "./components/ui/safe-area-view";
import TestingUI from "./testing";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView className="flex-1 items-center justify-center">
        {/* <Text className="text-blue-500">
          Open up App.tsx to start working on your app!
        </Text> */}
        <TestingUI />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
