import React from "react"
import styled from "styled-components"
import { theme } from "../../Shared/styles-global"
import { isMobile } from "react-device-detect"

const Tag = ({
  title,
  tagNode,
  selectTag,
  selectedTag,
  selectCleanWork,
  unmountTagsAnimation,
}) => {
  const handleClick = () => {
    selectTag(tagNode.id)
    selectCleanWork(tagNode.id, Object.keys(tagNode).length)
  }

  return !isMobile ? (
    <StyledTagVertical
      className="tag-vertical"
      onClick={handleClick}
      selected={selectedTag === tagNode}
    >
      {title}
    </StyledTagVertical>
  ) : (
    <StyledTagHorizontal
      className="tag-horizontal"
      onClick={handleClick}
      selected={selectedTag === tagNode}
    >
      {title}
    </StyledTagHorizontal>
  )
}

export default Tag

const StyledTagVertical = styled.div`
  height: 25px;
  cursor: pointer;
  padding: 0.07rem 0;
  margin: 0.2rem 0;
  padding-left: 0.5rem;
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: ${props =>
    props.selected ? `${theme.mintColor}` : "transparent"};
  font-weight: ${props => (props.selected ? "bold" : "400")};
  position: sticky;
  overflow: hidden;
  transition: none;
`

const StyledTagHorizontal = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0.9rem;
  margin: 0 0.3rem;
  font-size: 0.9rem;
  background: ${props => !props.selected && "none !important"};
  border-radius: 15px;
  font-weight: ${props => (props.selected ? "bold" : "400")};
  white-space: nowrap;
  transition: none;
`
