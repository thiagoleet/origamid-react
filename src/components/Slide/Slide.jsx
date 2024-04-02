import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
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
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button disabled={active === 0} onClick={slidePrev}>
          Anterior
        </button>
        <button disabled={active === slides.length - 1} onClick={slideNext}>
          Próximo
        </button>
      </nav>
    </section>
  );
};

export default Slide;
