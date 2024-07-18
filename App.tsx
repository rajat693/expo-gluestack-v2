import { StatusBar } from "expo-status-bar";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Box } from "./components/ui/box";
import { Text } from "./components/ui/text";
import { SafeAreaView } from "./components/ui/safe-area-view";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView className="flex-1">
        <Text className="text-blue-500">
          Open up App.tsx to start working on your app!
        </Text>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
