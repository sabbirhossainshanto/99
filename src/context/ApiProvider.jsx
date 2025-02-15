import { createContext, useEffect, useState } from "react";
import { getSetApis } from "../api/config";
import { API, Settings } from "../api";
import notice from "../../notice.json";
export const ApiContext = createContext(null);

const ApiProvider = ({ children }) => {
  const [noticeLoaded, setNoticeLoaded] = useState(false);
  const [logo, setLogo] = useState("");
  const baseUrl = notice?.result?.settings?.baseUrl;
  useEffect(() => {
    getSetApis(setNoticeLoaded, baseUrl);
  }, [noticeLoaded, baseUrl]);

  useEffect(() => {
    if (noticeLoaded) {
      /* Dynamically append  theme css  */
      const logo = `${API.assets}/${Settings.siteUrl}/logo.${Settings.logoFormat}`;
      setLogo(logo);
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";

      if (Settings.build === "production") {
        link.href = `${API.assets}/${Settings.siteUrl}/theme.css`;
        document.head.appendChild(link);
      } else {
        link.href = `/src/static/front/css/theme.css`;
        document.head.appendChild(link);
      }
      /* Dynamically append site logo  */
      const FavIconLink = document.createElement("link");
      FavIconLink.rel = "icon";
      FavIconLink.type = "image/png";
      FavIconLink.href = `${API.assets}/${Settings.siteUrl}/favicon.png`;
      document.head.appendChild(FavIconLink);
      document.title = Settings.siteTitle;

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [noticeLoaded]);

  if (!noticeLoaded) {
    return;
  }

  const stateInfo = { logo };
  return (
    <ApiContext.Provider value={stateInfo}>{children}</ApiContext.Provider>
  );
};

export default ApiProvider;
