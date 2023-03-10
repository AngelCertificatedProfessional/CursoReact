export const Quote = ({name}) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-1">
                {name}
            </p>
            <footer className="blockquote-footer">
                {name}
            </footer>
        </blockquote>
  )
}
