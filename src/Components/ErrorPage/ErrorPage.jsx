import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-72 ">
            <h2 className="text-5xl mb-10 text-red-500 font-bold">Oops.... Wrong Path</h2>
            <Link className="border-none px-4 py-4 rounded-lg text-white text-xl bg-red-300" to="/">Return Home</Link>
        </div>
    );
};

export default ErrorPage;