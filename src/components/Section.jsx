import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const Styled = styled(motion.div)`
  min-height: 100vh; // 섹션의 높이를 뷰포트 높이의 100%로 설정합니다.
  width: 100%; // 섹션의 너비를 100%로 설정합니다.
  // 여기에 추가적인 스타일을 정의할 수 있습니다.
`;

function Section({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          // 뷰포트에서 벗어났을 때 애니메이션을 hidden 상태로 설정
          controls.start("hidden");
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <Styled
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 1 },
      }}
    >
      {children}
    </Styled>
  );
}

export default Section;
