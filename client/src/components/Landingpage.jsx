import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
// import tbg1 from "../assets/tbg.png";
import bscslogs from "../assets/bscslogs.png";
import wmsulogs from "../assets/wmsulogs.png";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import axios from "axios";

const Landingpage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [data, setData] = useState([]); // Define the data state
  const [loading, setLoading] = useState(true);
  const [newsResponse, setNewsResponse] = useState([]); // Store news data
  const [eventsResponse, setEventsResponse] = useState([]); // Store events data
  const [jobOppResponse, setJobOppResponse] = useState([]); // Store job opportunities data

  const slides = [
    {
      url: pic1,
    },
    {
      url: pic2,
    },
    {
      url: pic3,
    },
    {
      url: pic4,
    },
    // Pictures Slideshow
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsResponse = await axios.get("http://localhost:3001/events");
        const jobOppResponse = await axios.get("http://localhost:3001/jobopp");
        const newsResponse = await axios.get("http://localhost:3001/news");

        const mergedData = [
          ...eventsResponse.data,
          ...jobOppResponse.data,
          ...newsResponse.data,
        ];

        setData(mergedData);
        setNewsResponse(newsResponse.data);
        setEventsResponse(eventsResponse.data);
        setJobOppResponse(jobOppResponse.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (category) => {
    setSelectedFilter(category);
  };

  // Filter the data based on the selected category
  // Determine which data to use based on the selected category
  let selectedData;
  if (selectedFilter === "all") {
    selectedData = data.sort((a, b) => a.title.localeCompare(b.title));
  } else if (selectedFilter === "News") {
    // Show the newest 5 news items
    selectedData = newsResponse
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(-5);
  } else if (selectedFilter === "Events") {
    // Show the newest 5 events
    selectedData = eventsResponse
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(-5);
  } else if (selectedFilter === "Job Opportunities") {
    // Show the newest 5 job opportunities
    selectedData = jobOppResponse
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(-5);
  } else {
    // Handle other categories or filters here
    selectedData = [];
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, nextSlide]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-green-300 p-8 rounded-lg shadow-md container mx-auto py-8">
        <div className="relative inline-block w-32 lg:w-32">
          <img src={wmsulogs} className="sm:w-auto" alt="WMSU Logs" />
        </div>
        <div className="relative inline-block float-right w-32 lg:w-32">
          <img src={bscslogs} className="sm:w-auto" alt="BSCS Logs" />
        </div>
        <div className="text-center px-20"></div>
        {/* Carousel*/}
        <div className="max-w-[700px] h-[400px] relative mx-auto">
          <div
            style={{
              backgroundImage: `url(${slides[currentSlide].url})`,
              backgroundSize: "contain", // This makes the image cover the container
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat", // Center the image within the container
            }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <span
            onClick={prevSlide}
            className="carousel-control prev absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-white"
          >
            <BiSolidChevronLeft size={30} />
          </span>
          <span
            className="carousel-control next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white"
            onClick={nextSlide}
          >
            <BiSolidChevronRight size={30} />
          </span>
        </div>
        <Link to="/Login">
          <div className="flex items-center gap-[10px] float-right bg-green-500 p-2 mt-1 rounded">
            <p className="text-[20px] leading-[20px] font-normal text-white ">
              Login
            </p>
          </div>
        </Link>
        <br />
        {/* Contents below*/}
        <div className="flex  mt-5">
          {/* Buttons left */}
          <div className="flex flex-col items-center mr-8">
            {["all", "News", "Job Opportunities", "Events"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 mb-2 rounded-md sm:w-full mt-2 ${
                  selectedFilter === category
                    ? "bg-yellow-500 text-white"
                    : "bg-blue-500 text-gray-700"
                } ${category === "all" && "mr-2"}`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {/* List of Contents */}
          <div className="container mx-auto overflow-y-scroll max-h-64  bg-gray-300 p-5 rounded-md">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Title</th>
                  <th className="px-6 py-3 text-left font-medium">
                    Posted Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedData.map((item, index) => (
                  <tr
                    key={`${item.Type}-${item.id}-${index}`}
                    className="bg-white p-4 rounded shadow-md"
                  >
                    <td className="text-gray-600">{item.title}</td>
                    <td className="text-gray-600">{item.pdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
