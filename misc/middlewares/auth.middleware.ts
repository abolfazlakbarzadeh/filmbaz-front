import { NextRequest } from "next/server";
import * as CryptoJs from "crypto-js";
import { AuthConstants } from "../constants";

export default function AuthMiddleware(request: NextRequest) {
  const { ERROR_CODES, COOKIE_KEYS, KEYS, REQUIREMENTS } = AuthConstants;
  return new Promise((resolve, reject) => {
    const unAuthorized = (error: typeof ERROR_CODES.invalid_token) => {
      reject(error);
    };

    const _cookieToken = request.cookies.get(COOKIE_KEYS.token);
    const _cookieTokenInfo = request.cookies.get(COOKIE_KEYS.token_info);

    /// check the token exists
    if (!!!_cookieToken) {
      unAuthorized(ERROR_CODES.token_not_found);
      return;
    }
    /// decript token
    const cookieToken = CryptoJs.AES.decrypt(
      _cookieToken,
      KEYS.encryptionKey
    ).toString(CryptoJs.enc.Utf8);

    /// check the token info exists
    if (!!!_cookieTokenInfo) {
      unAuthorized(ERROR_CODES.token_info_not_found);
      return;
    }
    /// decript token info
    const cookieTokenInfo: { expire: number } = JSON.parse(
      CryptoJs.AES.decrypt(_cookieTokenInfo, KEYS.encryptionKey).toString(
        CryptoJs.enc.Utf8
      )
    );

    // check the token lifetime is passed
    const current_time = ~~new Date();
    const expired =
      cookieTokenInfo.expire - current_time > REQUIREMENTS.token_life_long;

    if (expired) {
      unAuthorized(ERROR_CODES.token_is_expired);
      return;
    }

    resolve(cookieToken);
  });
}
