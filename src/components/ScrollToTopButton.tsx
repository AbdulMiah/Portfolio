import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        className="fixed bottom-5 right-8 z-50 p-5 rounded-xl bg-royal-blue-100"
        onClick={scrollToTop}
      >
        <IconArrowUp className="h-10 w-10" />
      </button>
    )
  );
}

export default ScrollToTopButton;
