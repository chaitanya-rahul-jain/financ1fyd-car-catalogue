const CarInventoryCard = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.imageUrl} alt="" />
      </div>
      <div>
        <h3>{data.name}</h3>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CarInventoryCard;
