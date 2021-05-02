const CardStatus = ({ className, bg, title, total, icon }) => {
  return (
    <div className={className}>
      <div className={"card " + bg + ""}>
        <div className="card-body text-white d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title">{title}</h5>
            <h1 className="mb-0">{total}</h1>
            <p className="mb-0">Orang</p>
          </div>
          <div>
            <img src={icon} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardStatus;
