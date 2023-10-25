import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Dashboardview from "../../components/Dashboardview";
import * as StoriesData from "./StoriesData";
import Storiesitem from "./Storiesitem";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

const Stories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [createdSuccessfully, setCreatedSuccessfully] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // ... (previous code)

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/test",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newPortfolioItem = {
        id: StoriesData.portfolio.length + 1,
        img: response.data.imageUrl, // Use the URL returned from the backend
        title,
        details: [{ title: "Details:", desc: description }],
      };

      // Add the new portfolio item to StoriesData
      StoriesData.addPortfolioItem(newPortfolioItem);

      setTitle("");
      setImage(null);
      setDescription("");
      setCreatedSuccessfully(true);
      setTimeout(() => setCreatedSuccessfully(false), 3000);
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  // ... (rest of the code)

  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <Dashboardview />
        <div className="flex items-center justify-center font-bold gap-[15px] py-[20px]">
          <section className="portfolio section">
            <h2 className="section__title">
              Alumni <span>Stories</span>{" "}
              <AiOutlinePlusCircle
                className="plus-icon cursor-pointer"
                onClick={handleOpenModal}
              />
            </h2>

            <div className="portfolio__container container grid">
              {StoriesData.portfolio.map((item) => {
                return <Storiesitem key={item.id} {...item} />;
              })}
            </div>
          </section>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <h2 className="text-lg font-bold mb-4">Title</h2>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="border p-2 mb-4 w-full"
            />
            <h2 className="text-lg font-bold mb-4">Image</h2>
            <input
              type="file"
              onChange={handleImageChange}
              className="border p-2 mb-4 w-full"
            />
            {image && <div className="selected-image">{image.name}</div>}
            <h2 className="text-lg font-bold mb-4">Description</h2>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter Description"
              className="border p-2 mb-4 w-full resize-y"
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Close
              </button>
              <button
                onClick={handleCreate}
                className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      {createdSuccessfully && (
        <div className="alert-success">Created Successfully</div>
      )}
    </div>
  );
};

export default Stories;
