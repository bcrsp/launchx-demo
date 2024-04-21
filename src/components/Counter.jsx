import { useState } from 'preact/hooks'


export const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <>
    <span class="text-yellow-500 mr-4">{counter}</span>
    <button class="border px-2" onClick={()=> setCounter(counter + 1 )}>+</button>
    <button class="border px-2" onClick={()=> setCounter(counter - 1)}>-</button>
    </>
  )
}
