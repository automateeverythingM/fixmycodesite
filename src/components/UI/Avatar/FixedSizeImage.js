/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { forwardRef } from "react";

const FixedSizeImage = forwardRef(
  ({ src, size, alt, rounded, ...rest }, ref) => {
    return (
      <img
        ref={ref}
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
  }
);

export default FixedSizeImage;
