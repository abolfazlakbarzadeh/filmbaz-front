import { AppProps } from "next/app";
import React, { createContext } from "react";

export const DeviceContext = createContext({
    isLine: false, isMobile: false, isInApp: false
})

export function appWithDevice(App: any) {
    // eslint-disable-next-line react/display-name
    return (props: AppProps) => {
        return (
            <DeviceContext.Provider value={props.pageProps.device || {}}>
                <App {...props} />
            </DeviceContext.Provider>
        );
    };
}