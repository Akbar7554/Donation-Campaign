import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/locatstorage";

const DonationDetails = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const category = categories.find((category) => category.id === idInt);
  console.log(category);
  const handelDonationDetails = () => {
    saveDonation(idInt);
    toast.success('❤️Donation Success!👌', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  return (
    <div className="w-[80%] mx-auto ">
      <ToastContainer />
      <div className="relative">
        <img
          className="w-[920px] h-[480px] bg-no-repeat bg-center bg-contain rounded-lg overlay-50"
          src={category.img_details}
          alt=""
        />
        <div className="w-[920px] h-[100px] bg-[#0b0b0b80] rounded-b-lg opacity-50 absolute bottom-0 left-0 right-0"></div>
        <button onClick={handelDonationDetails}
          className="text-xl font-semibold text-white px-4 py-2 rounded-md absolute bottom-6  
        left-6 "
          style={{ backgroundColor: category.text_color }}
        >
          Donate ${category.price}
        </button>
      </div>

      <h2 className="text-4xl font-bold mt-5 mb-5">{category.category_name}</h2>
      <p className="mb-20">{category.category_description}</p>
    </div>
  );
};

export default DonationDetails;
