export const setLocalStorage = (itemName,item) => {
  let localStoragePrefix = process.env.REACT_APP_STORAGE_PREFIX;
  localStorage.setItem(`${localStoragePrefix}_${itemName}`, item);
};

export const getItemLocalStorage = (itemName) => {
  let localStoragePrefix = process.env.REACT_APP_STORAGE_PREFIX;
  let item = localStorage.getItem(`${localStoragePrefix}_${itemName}`);
  return item;
};

export const removeItemLocalStorage = (itemName) => {
  let localStoragePrefix = process.env.REACT_APP_STORAGE_PREFIX;
  localStorage.removeItem(`${localStoragePrefix}_${itemName}`)
}