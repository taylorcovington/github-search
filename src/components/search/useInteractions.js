import { useState } from "react"

export default function useInteractions() {
  const [data, setData] = useState()
  const [count, setCount] = useState(0)

  const onAfterGetResults = ({ data, count }) => {
    console.log('data: ', data)
    console.log('count: ', count)
    setData(data)
    setCount(count)
  }
  return { data, count, onAfterGetResults }
}
