/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { BaseButton } from "../../../components/UI/Button/MPButton";
import { projectsMock } from "../../../mocks/tags";
import DisplayProject from "./ProjectCard";

function AllProjects() {
  return (
    <div>
      <BaseButton as={Link} to="/profile/addproject" background="#cac9c9" block>
        Add Problem
      </BaseButton>
      {projectsMock.map(({ id, name, tags }) => (
        <DisplayProject key={id} projId={id} name={name} tags={tags} />
      ))}
    </div>
  );
}

export default AllProjects;
