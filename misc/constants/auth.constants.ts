import * as CryptoJs from "crypto-js";

export const KEYS = {
  encryptionKey: "5a902f816d532863f99c53fce6c24fc3", //filmbaz-enc-key
};

export const COOKIE_KEYS = {
  token: CryptoJs.HmacMD5("film-baz-user-token", KEYS.encryptionKey).toString(),
  token_info: CryptoJs.HmacMD5(
    "film-baz-user-token-info",
    KEYS.encryptionKey
  ).toString(),
};

export const ERROR_CODES = {
  invalid_token: { code: 100, message: "invalid_token" },
  token_is_expired: { code: 101, message: "token_is_expired" },
  token_not_found: { code: 102, message: "token_not_found" },
  token_info_not_found: { code: 103, message: "token_info_not_found" },
};

export const REQUIREMENTS = {
  token_life_long: 7 * 24 * 60 * 60, //1w
};
