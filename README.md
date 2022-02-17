# Welcome to react-countdown-hook!

A simple react hook to towndown seconds between two date object

## Demo
codeSandbox: Demo[https://codesandbox.io/s/usecountdown-kwygye]

## install
```
npm install --save @kb_lee/react-countdown-hook
```

## Example
```javascript
import useCountDown from "@kb_lee/react-countdown-hook";

export default function App() {
  // useCountDown(${secdons}, ${init_time});
  const { useCountDownValue } = useCountDown(10000, 0);

  return (
    <div className="App">
      <h1>Countdown to Zero</h1>
      <span>remain seconds: {useCountDownValue}</span>
    </div>
  );
}
```
