import configs from "../configs.json";
// @ts-ignore
import { createConfig } from "next-i18next/dist/commonjs/config/createConfig";
// @ts-ignore
import { default as createClient } from "next-i18next/dist/commonjs/createClient";
import { CreateClientReturn, I18n, SSRConfig, TFunction } from "next-i18next";

export const getVarDataType = (data: any) => {
  const reg = /\[object |\]/g;
  return Object.prototype.toString.call(data).replace(reg, "").toLowerCase();
};

export const classNamesGen = (entry: any) => {
  let classNames = "";

  if (getVarDataType(entry) == "array") {
    for (const cName of entry) {
      if (getVarDataType(cName) == "string") classNames += ` ${cName}`;
      else if (getVarDataType(cName) == "object")
        classNames += ` ${classNamesGen(cName)}`;
    }
  } else if (getVarDataType(entry) == "object") {
    for (const [key, value] of Object.entries(entry)) {
      if (!!value) classNames += ` ${key}`;
    }
  }
  return classNames.trim();
};

export async function getServerSideT(config: SSRConfig): Promise<TFunction> {
  const internalConfig = createConfig({
    ...config._nextI18Next.userConfig,
    lng: config._nextI18Next.initialLocale,
  });
  const r: CreateClientReturn = await createClient(internalConfig);
  // @ts-ignore
  return await r.i18n.init(r.initPromise);
}

export const getLocaleLanguage = (i18n: I18n) => {
  const lang = i18n?.language.split("-")[0] || "fa";
  return lang;
};

export const getLocaleVarData = (
  i18n: I18n,
  data: Record<string, any>,
  varName: string
) => {
  if (configs.default_locale != i18n?.language) {
    const lang = getLocaleLanguage(i18n);
    const localeData = data[`${varName}_${lang}`];
    return localeData || data[varName];
  } else {
    return data[varName];
  }
};
