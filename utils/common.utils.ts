import configs from "../configs.json";
// @ts-ignore
import { createConfig } from "next-i18next/dist/commonjs/config/createConfig";
// @ts-ignore
import { default as createClient } from "next-i18next/dist/commonjs/createClient";
import {
  CreateClientReturn,
  I18n,
  SSRConfig,
  TFunction,
  useTranslation,
} from "next-i18next";
import App, { AppContext, AppProps } from "next/app";
import React, { createContext, ReactElement } from "react";

export const getVarDataType = (data: any) => {
  const reg = /\[object |\]/g;
  return Object.prototype.toString.call(data)?.replace(reg, "").toLowerCase();
};

export const classNamesGen = (..._entry: any) => {
  let classNames = "";
  let entry: any = [..._entry];
  if (entry.length <= 1) entry = entry[0] || "";
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
  } else if (getVarDataType(entry) == "string") classNames += ` ${entry}`;
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

export const getLocaleLanguage = (i18n?: any) => {
  const lang = i18n?.language?.split("-")[0] || "fa";
  return lang;
};

export const getLocaleVarData = (
  i18n: Partial<I18n>,
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

export function strFormat(str: string) {
  var args = [].slice.call(arguments, 1),
    i = 0;

  return str.replace(/%s/g, () => args[i++]);
}

export const detectDevice = (ctx?: any) => {
  const userAgent = ctx.req?.headers["user-agent"] || "";
  const isLine = /\bLine\//i.test(userAgent) || false;
  const isMobile = /(iPad|iPhone|Android|Mobile)/i.test(userAgent) || false;
  const rules = [
    "WebView",
    "(iPhone|iPod|iPad)(?!.*Safari/)",
    "Android.*(wv|.0.0.0)",
  ];
  const regex = new RegExp(`(${rules.join("|")})`, "ig");
  const isInApp = Boolean(userAgent.match(regex));

  return {
    isLine,
    isMobile,
    isInApp,
  };
};
