import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "./components/ui/text";
import { SafeAreaView } from "./components/ui/safe-area-view";
import { Button, ButtonText } from "./components/ui/button";

export default function App() {
  const [state, setState] = React.useState(1);

  const handlePress = () => {
    setState(2);
    console.log("state", state);
  };

  setState(2);
    console.log("2: state", state);
    setState(3);
    console.log("3: state", state);
    setState(4);
    console.log("4: state", state);


  return (
    <GluestackUIProvider>
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-blue-500">
          Open up App.tsx to start working on your app!
        </Text>
        <Button onPress={handlePress}>
          <ButtonText>press me</ButtonText>
        </Button>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
