import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Places() {
  const { action } = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [perks, setPerks] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  const addPhotoLink = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/upload-by-link",
        {
          link: photoLink,
        }
      );
      console.log("data = ", data);
      setAddedPhotos([...addedPhotos, data.url]);
      setPhotoLink("");
    } catch (error) {
      console.log("Failed to upload image: ", error);
    }
  };

  const addPlace = (e) => {
    e.preventDefault();
    const place = {
      title,
      address,
      description,
      photos: addedPhotos,
      perks,
      checkIn,
      checkOut,
      maxGuests,
      extraInfo,
    };
    console.table(place);
  };

  return (
    <div className=" border-0 border-blue-500">
      {action !== "new" && (
        <div className="border-2 border-green-500 text-center">
          <Link to={"/account/places/new"}>
            <button className="flex items-center gap-2 bg-pink-500 text-white hover:bg-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span>Add new place</span>
            </button>
          </Link>
        </div>
      )}
      {action === "new" && (
        <form className="px-4 py-4 mx-4">
          <h2 className="text-xl mt-4">Title</h2>
          <input
            type="text"
            placeholder="title, (eg. my lovely apartment)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h2 className="text-xl mt-4">Address</h2>
          <input
            type="text"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <h2 className="text-xl mt-4">Photos</h2>
          <div className=" w-full flex gap-2">
            <input
              type="text"
              placeholder="add using a link"
              value={photoLink}
              onChange={(e) => setPhotoLink(e.target.value)}
            />
            <button
              className="bg-gray-300 rounded-2xl hover:bg-gray-400"
              onClick={addPhotoLink}
            >
              Add Photo
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 m-2">
            {addedPhotos.map((photo, index) => (
              <div className="flex mx-1 h-28 rounded-xl overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  key={index}
                  src={photo}
                  alt={`Added Photo ${index}`}
                />
              </div>
            ))}
            <label className="flex items-center gap-1 border bg-transparent p-8 rounded-2xl hover:bg-gray-100">
              <input type="file" className="hidden h-0" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>
              Upload
            </label>
          </div>

          <h2>Description</h2>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h2>Perks</h2>
          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Your perks checkboxes here */}
          </div>
          <div className="mt-4 grid sm:grid-cols-3 gap-2">
            <div>
              <h3>Check In</h3>
              <input
                type="text"
                placeholder="16:00"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <h3>Check Out</h3>
              <input
                type="text"
                placeholder="16:00"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div>
              <h3>Max Guests</h3>
              <input
                type="text"
                placeholder="16:00"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>
          </div>
          <h2>Extra Info</h2>
          <textarea
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
          <div>
            <button
              onClick={addPlace}
              className="mx-auto mt-4 w-full rounded-lg bg-pink-500 hover:bg-pink-600 text-white"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Places;
