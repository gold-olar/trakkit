import { useCOntext } from "react";
import { Context as TrakContext } from "../../contexts/trakkContext";
import { Context as LocationContext } from "../../contexts/locationContext";
import { useContext } from "react";

export default () => {
  const { createTraks } = useContext(TrakContext);
  const {
    reset,
    state: { locations, name },
  } = useContext(LocationContext);

  const saveTrack = async () => {
    try {
      await createTraks(name, locations);
      reset();
      return true;
    } catch (err) {
      return false;
    }
  };

  return [saveTrack];
};
