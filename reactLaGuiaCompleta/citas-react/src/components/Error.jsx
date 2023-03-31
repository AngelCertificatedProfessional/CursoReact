export const Error = ({mensaje}) => {
  return (
    <div>
        <p className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
        {mensaje}
        </p>
    </div>
  )
}
