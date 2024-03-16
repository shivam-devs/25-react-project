const Product = ({data:{thumbnail,title,brand}}) => {
  return (
    <div className='flex flex-col gap-2 border p-1' key={title}>
        <img src={thumbnail} alt={brand} className="md:h-[8rem] h-[5rem]" />
        <div className="text-xs md:text-base">{title}</div>
    </div>
  )
}

export default Product