/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { iconFinder } from "../../../../utils/icons";
import { Link } from "@reach/router";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  color: #f5f5f599;
  padding: 0.5em 1.5em;
  border-radius: 0.5rem;
  margin: 0.5rem 0;

  &:hover {
    color: white;
    text-decoration: none;
    /* background: #444; */
  }
`;

function DisplayProject({ projId, name, tags = [] }) {
  return (
    <Container
      as={Link}
      to={`${projId}`}
      className="align-items-center justify-content-between"
    >
      <div>{name}</div>
      <di>
        <div
          css={css`
            display: flex;
          `}
        >
          {tags.map((tag) =>
            iconFinder(tag.name, { size: "1.5rem", key: tag.id })
          )}
        </div>
      </di>
    </Container>
  );
}

export default DisplayProject;
