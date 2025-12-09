➜  ios git:(main) ✗ cd ios && pod install
cd: no such file or directory: iosimport { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { tw } from "nativewind";
import CafeMap from "./components/CafeMap";
import CafeBottomSheet from "./components/CafeBottomSheet";
import { cafes } from "./data/cafes";
import { Cafe } from "./types";

export default function App() {
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);

  const handleCafeSelect = (cafe: Cafe) => {
    setSelectedCafe(cafe);
  };

  const handleBottomSheetClose = () => {
    setSelectedCafe(null);
  };

  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <SafeAreaProvider>
        <SafeAreaView style={tw`flex-1 bg-white`} edges={["top"]}>
          <StatusBar style="dark" />
          <View style={tw`flex-1`}>
            <CafeMap cafes={cafes} onCafeSelect={handleCafeSelect} />
            <CafeBottomSheet
              cafe={selectedCafe}
              onClose={handleBottomSheetClose}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
