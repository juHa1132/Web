import { createContext } from "react";

export const PageContext = createContext({
    isSideMenu: false,
    isDetail: true,
    detailSrc: '',
    detailTitle: '',
    detailDescription: '',
    // openSideMenu: () => {},
    // closeSideMenu: () => {},
});