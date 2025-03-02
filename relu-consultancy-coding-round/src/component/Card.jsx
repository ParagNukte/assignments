// Card.js
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={` flex items-center justify-center bg-white shadow-md rounded-md max-w-lg mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
