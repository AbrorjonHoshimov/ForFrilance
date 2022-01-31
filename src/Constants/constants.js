export  const API_PATH = "https://test.it-planet.org/sso/";
export const TOKEN_NAME = "Token"; //proyekt uchun alohida yozish mn
export const tokenKey = localStorage.getItem(TOKEN_NAME); //keyda EJG tokenni
export const tokenHeader = {
    headers: {Authorization: tokenKey}
};
