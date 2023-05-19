import React, { useEffect } from "react";

const AirVisualWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.iqair.com/script/widget_v3.0.js";
    const div = document.getElementsByName("airvisual_widget")[0];
    div.appendChild(script);
  }, []);

  return <div className="airvisual_widget" key="6426122dfa0a35d90eb74a9c"></div>;
};

export default AirVisualWidget;
