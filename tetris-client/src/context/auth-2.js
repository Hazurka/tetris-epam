export const setLocalStorageUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getLocalStorageUser = () => {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
};
