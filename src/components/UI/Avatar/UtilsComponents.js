import styled from "@emotion/styled/types/base";

export const AbsolutePosition = styled.div`
  position: absolute;
  top: ${(p) => p.top};
  right: ${(p) => p.right};
  left: ${(p) => p.left};
  bottom: ${(p) => p.bottom};

  ${(props) => props.customStyle}
`;
