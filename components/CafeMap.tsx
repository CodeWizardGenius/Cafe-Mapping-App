import React, { useRef } from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Cafe } from "../types";
import { initialRegion } from "../data/cafes";

interface CafeMapProps {
  cafes: Cafe[];
  onCafeSelect: (cafe: Cafe) => void;
}

const CafeMap: React.FC<CafeMapProps> = ({ cafes, onCafeSelect }) => {
  const mapRef = useRef<MapView>(null);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        style={{ width: "100%", height: "100%" }}
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
