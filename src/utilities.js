// 15 seconds from right now, in milliseconds
export function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}

// counts up from 0 so every thought gets its own id
let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}
