export const GifGridItem = ({title,url}) => {
  return (
    <div className="card">
        GifGridItem
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}