import React, { useContext, useEffect, useState } from "react";
import { getImageUrl } from "../../api/imageUpload";
import { AuthContext } from "../../contexts/AuthProvider";
import { getRole, hostRequest } from "../../api/user";
import BecomeHostForm from "../../Components/Form/BecomeHostForm";

const BecomeHost = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageUrl(image).then((data) => {
      const hostData = {
        location: location,
        documentIMG: data,
        role: "requested",
        email: user?.email,
      };
      hostRequest(hostData).then((data) => {
        console.log(data);
      });
    });
  };

  const handleImageChange = (image) => {
    console.log(image);
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image.name);
  };
  return (
    <>
      {role ? (
        <div className="h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
          Request Sent, wait for admin approval
        </div>
      ) : (
        <>
          {
            <BecomeHostForm
              handleImageChange={handleImageChange}
              preview={preview}
              uploadButtonText={uploadButtonText}
              handleSubmit={handleSubmit}
            />
          }
        </>
      )}
    </>
  );
};

export default BecomeHost;
