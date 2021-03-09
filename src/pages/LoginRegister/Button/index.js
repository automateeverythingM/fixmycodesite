import styled from "@emotion/styled";
import { useMemo } from "react";
import { Spinner } from "react-bootstrap";
import { BaseButton } from "../../../components/UI/Button/MPButton";

const HideShow = styled.div`
  /* visibility: ${(props) => (props.loading ? "hidden" : "visible")}; */
  opacity: 0.5;
`;

function ButtonWithIcon({ children, loading, ...rest }) {
  const renderThis = useMemo(() => {
    if (loading) {
      return (
        <div className="position-relative d-flex align-items-center w-100">
          <div className="position-absolute w-100">
            <Spinner animation="border" role="status" variant="light" />
          </div>
          <HideShow
            loading={loading}
            className="d-flex align-items-center justify-content-center w-100"
          >
            {children}
          </HideShow>
        </div>
      );
    } else {
      return (
        <div className="d-flex align-items-center justify-content-center w-100">
          {children}
        </div>
      );
    }
  }, [loading, children]);

  return <BaseButton {...rest}>{renderThis}</BaseButton>;
}

export default ButtonWithIcon;
