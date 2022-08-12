import configs from "../configs.json";
import { useTranslation } from "next-i18next";
import { NextPageContext } from "next";
import App, { AppContext, AppProps } from "next/app";
import { useContext } from "react";
import { DeviceContext } from "./appWithDevice.util";

export const useDetectDirection = () => {
  const { i18n } = useTranslation();

  return {
    isRtl: i18n.language == configs.default_locale,
  };
};

export function useDevice(): {
  isLine: boolean;
  isMobile: boolean;
  isInApp: boolean;
} {
  const device = useContext(DeviceContext);

  return device || {};
}
