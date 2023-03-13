import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

    const [counter,setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter((counter) => counter +value)
      },
      [],
    )
    // const incrementFather = () => {
    //     setCounter(counter +1)
    // }

  return (
    <>
        <h1>
            UseCallback Hook: {counter}
        </h1>
        <hr/>
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
