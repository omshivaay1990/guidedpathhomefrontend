import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyA2me50_LuGiqTykDoOkbFFaKIFqKPe1N0";
const libraries = ["places"];

export default function AddressFields({ onAddressChange }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const dropRef = useRef(null);
  const inputRef = useRef(null);

  const handlePlace = () => {
    const place = dropRef.current.getPlace();

    if (!place.geometry) {
      alert("Please select from dropdown");
      return;
    }

    const address = place.formatted_address;
    if (inputRef.current) inputRef.current.value = address;
    if (onAddressChange) onAddressChange(address);
  };

  if (!isLoaded) return <input type="text" className="hero-search-input" placeholder="Enter your property address..." disabled />;

  return (
    <Autocomplete
      onLoad={(ref) => (dropRef.current = ref)}
      onPlaceChanged={handlePlace}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your property address..."
        onChange={(e) => { if (onAddressChange) onAddressChange(e.target.value); }}
        className="hero-search-input"
      />
    </Autocomplete>
  );
}
