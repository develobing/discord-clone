export const logout = async (data) => {
  localStorage.clear();
  window.location.pathname = '/login';
};
