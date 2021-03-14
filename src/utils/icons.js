import { Javascript } from "@emotion-icons/boxicons-logos/Javascript";
import { Css3 } from "@emotion-icons/boxicons-logos/Css3";
import { Html5 } from "@emotion-icons/boxicons-logos/Html5";
import { ReactLogo } from "@emotion-icons/boxicons-logos/ReactLogo";

export const iconFinder = (icon, rest) => {
  switch (icon) {
    case "javascript":
      return <Javascript color="#F0DB4F" {...rest} />;
    case "react":
      return <ReactLogo color="#1e4ace" {...rest} />;
    case "css":
      return <Css3 color="#11a4ee" {...rest} />;
    case "html":
      return <Html5 color="#ce961e" {...rest} />;
    default:
      break;
  }
};
