export const validateLoginForm = ({ email, password }) => {
  const isMailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, username, password }) => {
  const isMailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);
  return isMailValid && isPasswordValid && isUsernameValid;
};

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6 && password.length < 12;
};

export const validateUsername = (username) => {
  return username.length >= 3 && username.length < 12;
};
