import React from "react"
import Tag from "./Tag"
import { isMobile } from "react-device-detect"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointer } from "@fortawesome/free-solid-svg-icons"
import { TAG } from "../../constants"

class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.tagRef = React.createRef()
    this.state = {
      sticky: undefined,
      topPos: undefined,
      showSwipeIcon: false,
    }
  }

  componentDidMount() {
    if (isMobile) {
      this.setState({
        sticky: this.tagRef.current,
        topPos:
          this.tagRef.current.getBoundingClientRect().y + window.pageYOffset,
        horizontalScroll: this.tagRef.current.querySelector(".tag-list-inner"),
      })
      const width = this.tagRef.current.clientWidth
      const scroll = this.tagRef.current.querySelector(".tag-list-inner")
      const scrollWidth = scroll.scrollWidth
      // Scroll to saved position
      const scrollPos = sessionStorage.getItem("scrollX_") || 0
      scroll.scrollLeft = scrollPos
      let swipedCount = parseInt(localStorage.getItem("swiped_")) || 0

      // Display swipe icon animation for the first two sessions
      if (
        scrollWidth > width &&
        swipedCount < 2 &&
        !sessionStorage.getItem("swiped__")
      ) {
        this.setState({ showSwipeIcon: true })
        localStorage.setItem("swiped_", swipedCount + 1)
        sessionStorage.setItem("swiped__", true)
      }

      window.addEventListener("scroll", this.detectSticky)
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.detectSticky)
  }

  detectSticky = () => {
    const { sticky, topPos } = this.state
    const offset = topPos - window.pageYOffset
    const activated = offset <= 0
    const activatedNear = activated && offset >= -55

    if (activatedNear) {
      sticky.classList.add("moveToBotAnimate")
    } else if (activated) {
      sticky.classList.add("moveToBot")
    } else {
      this.unmountTagsAnimation()
    }
  }

  unmountTagsAnimation = () => {
    const sticky = this.tagRef.current
    sticky.classList.remove("moveToBot")
    sticky.classList.remove("moveToBotAnimate")
  }

  handleScrollX = () => {
    if (this.state.sticky && this.state.horizontalScroll) {
      const width = this.state.sticky.clientWidth
      const scrollWidth = this.state.horizontalScroll.scrollWidth
      if (scrollWidth > width) {
        const scrolledPos = this.state.horizontalScroll.scrollLeft
        sessionStorage.setItem("scrollX_", scrolledPos)
      }
    }
  }

  renderTag = tags => {
    const { selectTag, selectedTag } = this.props
    const keys = Object.keys(tags).filter(key => key !== "id")
    if (keys.length === 0) {
      return null
    }
    return keys.map(key => (
      <div className="tag-list">
        <Tag
          title={key}
          tagNode={tags[key]}
          selectTag={selectTag}
          selectedTag={selectedTag}
          selectCleanWork={this.cleanWork}
        />
        <ScrollContainer
          id={`tags-scroll-container-${tags[key].id}`}
          style={{ maxHeight: 0 }}
        >
          {this.renderTag(tags[key])}
        </ScrollContainer>
      </div>
    ))
  }

  cleanWork = (id, length) => {
    // toggle the children div
    if (id === TAG.ALL) return
    const childDiv = document.getElementById(`tags-scroll-container-${id}`)
    if (childDiv) {
      const prevMaxHeight = childDiv.style.maxHeight
      if (prevMaxHeight === "0px") {
        childDiv.style.maxHeight = `${length * 40}px`
      } else {
        childDiv.style.maxHeight = "0px"
      }
    }
  }

  render() {
    const { tags, selectTag, selectedTag } = this.props
    const childrenElement = (
      <div
        className="tag-list"
        onScroll={this.handleScrollX}
        style={{ top: 50 }}
      >
        {isMobile && this.state.showSwipeIcon && (
          <StyledFA className="icon-hand-ptr" icon={faHandPointer} />
        )}
        {/* Used to apply overflow to work with sticky */}
        <Tag
          title={TAG.ALL}
          tagNode={{ id: TAG.ALL }}
          selectTag={selectTag}
          selectedTag={selectedTag}
          selectCleanWork={this.cleanWork}
        />
        <ScrollContainer
          id={`tags-scroll-container-${TAG.ALL}`}
          style={{ maxHeight: "100%" }}
        >
          {this.renderTag(tags)}
        </ScrollContainer>
      </div>
    )

    return !isMobile ? (
      <StyledTagsVertical className="tags-vertical">
        {childrenElement}
      </StyledTagsVertical>
    ) : (
      <StyledTagsHorizontal className="tags-horizontal" ref={this.tagRef}>
        {childrenElement}
      </StyledTagsHorizontal>
    )
  }
}

export default Tags

const StyledTagsVertical = styled.div`
  margin-top: 0.5rem;
  background: none !important;
  .tag-list {
    // top: 50px;
    position: sticky;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 0.8rem;
    overflow: hidden;
    &-inner {
      width: 120px;
      overflow-x: auto;
    }
  }
  @media (max-width: 500px) {
    .tag-list {
      &-inner {
        width: 80px;
        font-size: 0.75rem;
      }
    }
  }
`

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
  // overflow: hidden;
`

const StyledTagsHorizontal = styled.div`
  position: static;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 1.5rem 0.2rem;
  width: 100%;
  height: 46px;
  translate: transform 500ms ease-in;

  .tag-list {
    position: relative;
    width: 100%;
    &-inner {
      display: flex;
      flex-direction: row;
      padding: 1.3rem 0rem;
      width: inherit;
      overflow-x: auto;
      /* Hide scrollbar */
      ::-webkit-scrollbar {
        width: 0px;
        display: none;
      }
    }
  }
`

const swipeLeft = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
    right: 35%;
    transform: translateX(-35%);
    bottom: 5px;
  }
  100% {
    opacity: 0;
    right: 35%;
    transform: translateX(-35%);
    bottom: 5px;
  }
`

const StyledFA = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 6px;
  right: 20%;
  transform: translateX(-20%);
  animation: ${swipeLeft} 2000ms forwards 1500ms ease-in;
`
