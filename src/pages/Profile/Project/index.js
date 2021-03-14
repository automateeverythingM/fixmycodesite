/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { projectsMock } from "../../../mocks/tags";
import DisplayProject from "./ProjectCard";

function AllProjects() {
  return (
    <div>
      {projectsMock.map(({ id, name, tags }) => (
        <DisplayProject key={id} projId={id} name={name} tags={tags} />
      ))}
    </div>
  );
}

export default AllProjects;
