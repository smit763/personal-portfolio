import React, { useRef, useEffect, useState, useCallback } from "react";

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default function AnimatedCursor({
  color = "157, 48, 251 ",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current.style.top = `${clientY}px`;
    cursorInnerRef.current.style.left = `${clientX}px`;
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(() => {
    coords.x += (endX.current - coords.x) / 8;
    coords.y += (endY.current - coords.y) / 8;
    cursorOuterRef.current.style.top = `${coords.y}px`;
    cursorOuterRef.current.style.left = `${coords.x}px`;
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, [coords]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuterCursor]);

  const handleMouseDown = useCallback(() => setIsActive(true), []);
  const handleMouseUp = useCallback(() => setIsActive(false), []);
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", handleMouseDown);
  useEventListener("mouseup", handleMouseUp);
  useEventListener("mouseenter", handleMouseEnter);
  useEventListener("mouseleave", handleMouseLeave);

  useEffect(() => {
    const clickableElements = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );

    const handleMouseOver = () => setIsActive(true);
    const handleMouseOut = () => {
      setIsActive(false);
      setIsActiveClickable(false);
    };
    const handleMouseDown = () => setIsActiveClickable(true);
    const handleMouseUp = () => setIsActive(true);

    clickableElements.forEach((el) => {
      el.style.cursor = "none";
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
      el.addEventListener("mousedown", handleMouseDown);
      el.addEventListener("mouseup", handleMouseUp);
    });

    return () => {
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
        el.removeEventListener("mousedown", handleMouseDown);
        el.removeEventListener("mouseup", handleMouseUp);
      });
    };
  }, []);

  useEffect(() => {
    const innerStyle = cursorInnerRef.current.style;
    const outerStyle = cursorOuterRef.current.style;

    if (isActive) {
      innerStyle.transform = `scale(${innerScale})`;
      outerStyle.transform = `scale(${outerScale})`;
    } else {
      innerStyle.transform = "scale(1)";
      outerStyle.transform = "scale(1)";
    }

    if (isActiveClickable) {
      innerStyle.transform = `scale(${innerScale * 1.3})`;
      outerStyle.transform = `scale(${outerScale * 1.4})`;
    }
  }, [isActive, isActiveClickable, innerScale, outerScale]);

  useEffect(() => {
    const innerStyle = cursorInnerRef.current.style;
    const outerStyle = cursorOuterRef.current.style;

    innerStyle.opacity = isVisible ? 1 : 0;
    outerStyle.opacity = isVisible ? 1 : 0;
  }, [isVisible]);

  const styles = React.useMemo(() => ({
    cursorInner: {
      position: "fixed",
      borderRadius: "50%",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      backgroundColor: `rgba(${color}, 1)`,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
      zIndex: 999,
    },
    cursorOuter: {
      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
      zIndex: 998,
    },
  }), [color, innerSize, outerSize, outerAlpha]);

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} className="hidden lg:block"></div>
      <div ref={cursorInnerRef} style={styles.cursorInner} className="hidden lg:block"></div>
    </>
  );
}
