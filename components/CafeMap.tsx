import React, { useRef } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Cafe } from "../types";
import { initialRegion } from "../data/cafes";

interface CafeMapProps {
  cafes: Cafe[];
  onCafeSelect: (cafe: Cafe) => void;
}

const CafeMap: React.FC<CafeMapProps> = ({ cafes, onCafeSelect }) => {
  const mapRef = useRef<MapView>(null);

  return (
    <View className="flex-1">
      <MapView
        ref={mapRef}
        initialRegion={initialRegion}
        className="w-full h-full"
        showsUserLocation
        showsMyLocationButton
      >
        {cafes.map((cafe) => (
          <Marker
            key={cafe.id}
            coordinate={cafe.coordinates}
            title={cafe.name}
            onPress={() => onCafeSelect(cafe)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default CafeMap;
