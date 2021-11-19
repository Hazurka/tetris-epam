export const setLocalStorageUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeLocalStorageUser = () => {
  localStorage.removeItem("user");
};

export const getLocalStorageUser = () => {
  const user = localStorage.getItem("user");
  if (typeof user === 'string') {
    return JSON.parse(user);
  }
};
