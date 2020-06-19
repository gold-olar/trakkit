export default function (traks, trakId) {
  return traks.find((trak) => trak._id === trakId);
}
