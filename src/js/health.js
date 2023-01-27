export default function showHealth(item) {
  let value;
  if (item.health >= 50) {
    value = 'healthy';
  } if (item.health >= 15 && item.health < 50) {
    value = 'wounded';
  } if (item.health < 15) {
    value = 'critical';
  }
  return value;
}
