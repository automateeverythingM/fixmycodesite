/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

const Avatar = ({ src, size, alt, rounded = true, ...rest }) => {
  return (
    <img
      src={src}
      css={css`
        min-height: ${size};
        max-height: ${size};
        max-width: ${size};
        min-width: ${size};
        border-radius: ${rounded && "50%"};
      `}
      alt={alt}
      {...rest}
    />
  );
};

export default Avatar;
