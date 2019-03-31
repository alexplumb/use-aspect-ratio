import { useState, useEffect, useRef, Ref, RefObject } from 'react';

interface WindowSize {
  readonly innerHeight: number;
  readonly innerWidth: number;
  readonly outerHeight: number;
  readonly outerWidth: number;
}

function getWindowSize(): WindowSize {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

/**
 * Retrieves the current size of the window
 * @param  {Function} callback
 * @return {WindowSize}
 */
export function useWindowSize(callback?: Function): WindowSize {
  let [windowSize, setWindowSize] = useState(getWindowSize());

  const resize = () => {
    const size = getWindowSize();

    callback(size);
    setWindowSize(size);
  };

  useEffect(
    () => {
      callback(windowSize);

      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    },
    [],
  );

  return windowSize;
}

export function useAspectRatio(ratio: number): RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);

  const [mediaWidth, setMediaWidth] = useState(600);
  useWindowSize(() => ref.current && setMediaWidth(ref.current.clientWidth));

  useEffect(
    () => {
      if (ref.current) {
        ref.current.style.height = `${Math.round(mediaWidth / ratio)}px`;
      }
    },
    [mediaWidth],
  );

  return ref;
}
