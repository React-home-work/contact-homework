export const authenticateUser = (userName, passWd) => ({
  type: "AUTHENTICATE_USER",
  userName: userName,
  passWd: passWd
});