import React, { useContext, useState } from "react";
import AddServiceForm from "../Components/Form/AddServiceForm";
import { AuthContext } from "../contexts/AuthProvider";
import { format } from "date-fns";
import { getImageUrl } from "../api/imageUpload";
import { addHome } from "../api/services";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddHome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const { user } = useContext(AuthContext);
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = format(arrivalDate, "P");
    const to = format(departureDate, "P");
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];
    setLoading(true);
    getImageUrl(image)
      .then((data) => {
        const homeData = {
          location,
          title,
          from,
          to,
          price,
          total_guest,
          bedrooms,
          bathrooms,
          description,
          image: data,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };

        addHome(homeData).then((data) => {
          console.log(homeData);
          setLoading(false);
          toast.success("Added Home");
          navigate("/Dashboard/manage-home");
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleImageChange = (image) => {
    console.log(image);
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image.name);
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">
        Add Home
      </h1>
      <AddServiceForm
        loading={loading}
        handleSubmit={handleSubmit}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        handleImageChange={handleImageChange}
        preview={preview}
        uploadButtonText={uploadButtonText}
      />
    </>
  );
};

export default AddHome;
