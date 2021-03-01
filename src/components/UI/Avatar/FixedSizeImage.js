/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const FixedSizeImage = ({ src, size, alt, rounded, ...rest }) => {
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

export default FixedSizeImage;
