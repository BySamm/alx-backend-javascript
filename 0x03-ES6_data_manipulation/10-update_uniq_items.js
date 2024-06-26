/**
 * Changes the quantity of unique grocery items to 100.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
