import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/locatstorage";

const Donation = () => {

  const donations = useLoaderData();

  const [dataLength, setDataLength] =useState(4);

  const [donationDetails, setDonationDetails] = useState([]);
  useEffect(() => {
    const storedDonationIds = getStoredDonation();
    if (donations.length > 0) {
      const donationAdd = donations.filter((donation) =>
        storedDonationIds.includes(donation.id)
      );
      // console.log(donations, storedDonationIds, donationAdd);
      setDonationDetails(donationAdd);
    }
  }, []);
  return (
    <div className="mb-32 w-[80%] mx-auto mt-10">
      {/* <h2>donate {donationDetails.length}</h2> */}
      <ul className="grid md:grid-cols-2 gap-5">
        {donationDetails.slice(0, dataLength).map((donation) => (
          <li key={donation.id}>
            <div style={{ backgroundColor: donation.card_color }} className="card card-side bg-base-100 shadow-xl rounded-lg">
              <figure>
                <img className="h-56 w-56"
                  src={donation.img_details}
                  alt="Movie"
                />
              </figure>
              <div className="card-body ">
                <h2 style={{backgroundColor: donation.title_color, color: donation.text_color}}  className="card-title border w-24 h-8 rounded-lg pl-4 text-base">{donation.title}</h2>
                <h2 className="card-title text-2xl">{donation.category_name}</h2>
                <p className="text-base font-semibold" style={{ color: donation.text_color }}>${donation.price}.00</p>
                <button style={{ backgroundColor: donation.text_color }} className="w-32 h-10 text-base text-white font-semibold rounded-md">View Details</button>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={dataLength === donations.length && 'hidden'} >
        <button onClick={() => setDataLength(donations.length)} className="bg-[#009444] w-[110px] h-[48px] rounded-xl text-[#FFF] text-lg font-bold ml-[47%] mt-10 mb-32">See All</button>
      </div>
    </div>
  );
};

export default Donation;
