// "use client";
// import {Input} from "@/components/ui/input";
// import {useEffect} from "react";
// import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

// const TestPage = () => {
//   const {placesService, placePredictions, getPlacePredictions, isPlacePredictionsLoading} =
//     usePlacesService({
//       apiKey: "AIzaSyCvMoXQJYEEvNJwafoNc-1txW_d98ISZeM",
//     });

//   useEffect(() => {
//     // fetch place details for the first element in placePredictions array
//     if (placePredictions.length)
//       placesService?.getDetails(
//         {
//           placeId: placePredictions[0].place_id,
//         },
//         (placeDetails) => savePlaceDetailsToState(placeDetails),
//       );
//   }, [placePredictions]);

//   return (
//     <>
//       <Input
//         placeholder="Debounce 500 ms"
//         onChange={(evt) => {
//           getPlacePredictions({input: evt.target.value});
//         }}
//         loading={isPlacePredictionsLoading}
//       />
//       {placePredictions.map((item) => renderItem(item))}
//     </>
//   );
// };

// export default TestPage;
