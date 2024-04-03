import React from "react";
import styled from "styled-components";

const SlideContainer = styled.section`
  overflow: hidden;
`;

const SlideNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  width: 80%;
`;

const SlideContent = styled.div`
  display: flex;
  transition: transform 0.3s;
`;

const SlideItem = styled.div`
  width: 80%;
  flex-shrink: 0;
  margin: 0 10%;
  background-color: #eee;
  border-radius: 4px;
  text-align: center;
`;

const SlideImg = styled.img`
  max-width: 100%;
`;

const Slide = ({ slides, productId }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  function slideNext() {
    if (active < slides.length - 1) {
      return setActive(active + 1);
    }
  }

  return (
    <SlideContainer>
      <SlideContent
        ref={contentRef}
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {slides.map((slide, index) => (
          <SlideItem key={`fotos-${productId}-${index}`}>
            <SlideImg src={slide.src} alt={slide.titulo} />
          </SlideItem>
        ))}
      </SlideContent>
      <SlideNav>
        <button disabled={active === 0} onClick={slidePrev}>
          &lt;
        </button>
        <button disabled={active === slides.length - 1} onClick={slideNext}>
          &gt;
        </button>
      </SlideNav>
    </SlideContainer>
  );
};

export default Slide;
