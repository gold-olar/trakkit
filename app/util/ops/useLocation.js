import { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  Accuracy,
  watchPositionAsync,
} from "expo-location";

export default function useLocation(startTracking, callback) {
  const [error, setError] = useState();

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (err) {
        setError(err);
      }
    };

    if (startTracking) {
      startWatching();
    } else {
      subscriber && subscriber.remove();
      subscriber = null;
    }

    return () => {
      if (!startTracking) {
        subscriber && subscriber.remove();
        subscriber = null;
      }
    };
  }, [startTracking, callback]);

  return [error];
}
