import { useNavigate } from "react-router-dom";
import Card from "../component/Card";

const Homepage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className={"w-96 h-96 p-10"}>
        <div className="flex flex-col space-y-4 w-48">
          <button
            onClick={() => handleButtonClick("/login")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>

          <button
            onClick={() => handleButtonClick("/signup")}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Signup
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Homepage;
