import * as Location from "expo-location";

const tenMetersWithDegrees = 0.001;

const getLocation = (increment) => {
  return {
    timeStamp: 1000000,
    speed: 0,
    accuracy: 5,
    altitude: 5,
    altitudeAccuracy: 5,
    heading: 5,
    latitude: 6.465422 + increment * tenMetersWithDegrees,
    longitude: 3.406448 + increment * tenMetersWithDegrees,
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
