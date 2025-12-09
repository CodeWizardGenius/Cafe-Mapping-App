import React, { useCallback, useEffect, useRef } from "react";
import { Image, Text, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Cafe } from "../types";
import { tw } from "nativewind";

interface CafeBottomSheetProps {
  cafe: Cafe | null;
  onClose: () => void;
}

const CafeBottomSheet: React.FC<CafeBottomSheetProps> = ({ cafe, onClose }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["30%"];

  useEffect(() => {
    if (cafe) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [cafe]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    []
  );

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  if (!cafe) return null;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
    >
      <View style={tw`flex-1 p-4 items-center justify-center`}>
        <Image
          source={{ uri: cafe.image }}
          style={tw`w-full h-32 rounded-lg mb-4`}
          resizeMode="cover"
        />
        <Text style={tw`text-xl font-bold mb-2`}>{cafe.name}</Text>
        {cafe.description && (
          <Text style={tw`text-gray-500`}>{cafe.description}</Text>
        )}
      </View>
    </BottomSheet>
  );
};

export default CafeBottomSheet;
