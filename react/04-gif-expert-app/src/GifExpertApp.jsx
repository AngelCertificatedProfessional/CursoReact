import { useState } from "react"

export const GifExpertApp = () => {

  const [categories,setCategories] = useState(['One Punch','Dragon Ball']);

  console.log(categories)

  const onAddCategory = () => {
    setCategories([...categories,'Valorant'])
  }

  return (
    <>
        <h1>
            GitExpertApp
        </h1>
        <button onClick={onAddCategory}>
          Agregar
        </button>
        <ol>
          {categories.map(category => {
            return <li key={category}>{category}</li>
          })}
        </ol>
    </>
  )
}
