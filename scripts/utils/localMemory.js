export function saveToLocalMemory(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

export function getFromLocalMemory(key) {
  const value = JSON.parse(localStorage.getItem(key));
  return value;
};

export function clearLocalMemory(key) {
  localStorage.removeItem(key);
};

export function clearAllLocalMemory() {
  localStorage.clear();
};