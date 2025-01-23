import { useState } from "react"

const OpenCard = () => {

  const [expanedIndex, setExpandedIndex] = useState(null)
  
  const handleClick = (index: any) => {
    setExpandedIndex(index === expanedIndex ? -1 : index)
  }

  

  return (
    <div>OpenCard</div>
  )



}
export default OpenCard


