import { footerText } from "../../utils/constants";

type FooterProp = {
  isDarkMode: boolean;
};

function Footer({ isDarkMode }: FooterProp) {
  return (
    <footer
      className={`${
        isDarkMode ? "bg-dark-200" : "bg-grey-100"
      } w-full text-center p-5 mt-auto`}
    >
      <small>{footerText}</small>
    </footer>
  );
}

export default Footer;
