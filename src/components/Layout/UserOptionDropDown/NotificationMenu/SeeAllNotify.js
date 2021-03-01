import { Link } from "@reach/router";
import DropdownItemStyled from "../DropdownItemStyled";

const SeeAllNotify = () => {
  return (
    <DropdownItemStyled
      as={Link}
      to="/notifications"
      className="border-top justify-content-center"
      size="0.8rem"
    >
      See All Notifications
    </DropdownItemStyled>
  );
};

export default SeeAllNotify;
