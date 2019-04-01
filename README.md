# use-aspect-ratio
Simple react hook for forcing an element to have a specific aspect ratio

## Installation

```shell-script
npm install use-aspect-ratio --save
```

## useAspectRatio Usage
### Forces an image to have a 16:9 aspect ratio and fill its container
```
import { useAspectRatio } from 'use-aspect-ratio';

export const Test = () => {
  const aspectRatio = 16 / 9;
  const ref = useAspectRatio(aspectRatio);

  return <img src={SomeImage} style={{ width: '100%' }} ref={ref} />;
};
```

## useWindowSize Usage
### Run an optional callback on window resize and return the size of the window
```
import { useWindowSize } from 'use-aspect-ratio';

export const Test = () => {
  const callback = (size) => {
    doSomeTransformationOnResize();
  };

  const {
    innerHeight,
    innerWidth,
    outerHeight,
    outerWidth,
  } = useWindowSize(callback);

  return null;
};
```

## License
Uses the [MIT License](https://opensource.org/licenses/MIT)
