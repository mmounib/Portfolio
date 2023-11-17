"use client";

import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  CSSProperties,
} from "react";

function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element: HTMLElement | Document = document
) {
  const savedHandler = useRef<((event: Event) => void) | null>(null);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function AnimatedCursor({
  color = "121, 200, 210",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = useRef<HTMLDivElement | null>(null);
  const cursorInnerRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback((event: Event) => {
    const { clientX, clientY } = event as MouseEvent;
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = clientY + "px";
      cursorInnerRef.current.style.left = clientX + "px";
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== null) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = coords.y + "px";
          cursorOuterRef.current.style.left = coords.x + "px";
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef]
  );

  useEffect(() => {
    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    }
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener("mousemove", onMouseMove, document);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener("mousedown", onMouseDown, document);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener("mouseup", onMouseUp, document);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener("mouseenter", onMouseEnter, document);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEventListener("mouseleave", onMouseLeave, document);
  }

  useEffect(() => {
    if (isActive) {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `scale(${outerScale})`;
      }
    } else {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = "scale(1)";
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = "scale(1)";
      }
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable) {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
      }
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (isVisible) {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.opacity = "1";
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.opacity = "1";
      }
    } else {
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.opacity = "0";
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.opacity = "0";
      }
    }
  }, [isVisible]);

  useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );

    const handleMouseOver = () => {
      setIsActive(true);
    };

    const handleClick = () => {
      setIsActive(true);
      setIsActiveClickable(false);
    };

    const handleMouseDown = () => {
      setIsActiveClickable(true);
    };

    const handleMouseUp = () => {
      setIsActive(true);
    };

    const handleMouseOut = () => {
      setIsActive(false);
      setIsActiveClickable(false);
    };

    clickables.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.cursor = "none";
        el.addEventListener("mouseover", handleMouseOver);
        el.addEventListener("click", handleClick);
        el.addEventListener("mousedown", handleMouseDown);
        el.addEventListener("mouseup", handleMouseUp);
        el.addEventListener("mouseout", handleMouseOut);
      }
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("click", handleClick);
        el.removeEventListener("mousedown", handleMouseDown);
        el.removeEventListener("mouseup", handleMouseUp);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [isActive]);

  const styles: {
    cursor: CSSProperties;
    cursorInner: CSSProperties;
    cursorOuter: CSSProperties;
  } = {
    cursor: {
      zIndex: 999,
      position: "fixed",
      opacity: 1,
      pointerEvents: "none" as "none",
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
    cursorInner: {
      zIndex: 999,
      position: "fixed",
      borderRadius: "50%",
      width: "15px",
      height: "15px",
      pointerEvents: "none" as "none",
      backgroundColor: `rgba(${color}, 1)`,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
    },
    cursorOuter: {
      zIndex: 999,

      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none" as "none",
      width: "15px",
      height: "15px",
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
  };

  return (
    <>
      <div
        ref={cursorOuterRef}
        style={styles.cursorOuter}
        className="max-sm:hidden"
      ></div>
      <div
        ref={cursorInnerRef}
        style={styles.cursorInner}
        className="max-sm:hidden"
      ></div>
    </>
  );
}

export default AnimatedCursor;
