const SingleProduct = ({ Product }) => {
  const {
    ProductName,
    ProductImage,
    Description,
    Price,
    Ratings,
    Brand,
    Category,
    DateTime,
  } = Product || {};

  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure className="h-80">
        <p className="absolute px-3 rounded-xl text-white bg-green-500 top-5 left-5 font-bold">
          {Price} $
        </p>
        <img src={ProductImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ProductName}</h2>
        <p>{Description}</p>
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Brand : </h1>
          <p className="font-medium">{Brand}</p>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Category : </h1>
          <p className="font-medium">{Category}</p>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Ratings : </h1>
          <p className="font-medium">{Ratings}</p>
        </div>
        <div className="flex  gap-2">
          <h1 className="font-bold">Released: </h1>
          <p className="font-medium break-all">{DateTime}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
