import React, { useState, useEffect } from "react";
import { VscChevronDown } from "react-icons/vsc";
import axios from "axios";
import ASidebar from "../../components/AlumniSide/ASidebar";
import AAlumniboardView from "../../components/AlumniSide/AAlumniboardView";

const AAlumni = () => {
  const [alumnidata, setAlumniData] = useState([]);
  const [newAlumniData, setNewAlumniData] = useState({
    aname: "",
    yeargrad: "",
    address: "",
    birthdate: "",
  });

  const [isDate, setIsDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState("All");
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  const YearOptions = [
    "All", // Add "All" option
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  const filterAlumnibyYear = (year) => {
    if (year === "All") {
      return alumnidata; // Show all alumni
    } else {
      const filtered = alumnidata.filter((alumni) => alumni.yeargrad === year);
      return filtered;
    }
  };

  const selectDate = (stat) => {
    setSelectedDate(stat);
    setIsDate(false);

    const filtered = filterAlumnibyYear(stat);
    setFilteredAlumni(filtered);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const openDetailsModal = (alumni) => {
    setSelectedAlumni(alumni);
  };

  const closeDetailsModal = () => {
    setSelectedAlumni(null);
  };

  const toggleAlumni = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setNewAlumniData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      // If the search term is empty, display all alumni
      setFilteredAlumni(alumnidata);
    } else {
      const filtered = alumnidata.filter((alumni) =>
        alumni.aname.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredAlumni(filtered);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const fetchAlumniData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/alumni");
      setAlumniData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlumniData();
  }, []);

  const eventsToDisplay =
    filteredAlumni.length > 0 ? filteredAlumni : alumnidata;

  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <ASidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <AAlumniboardView />
        <div className="flex-grow bg-gray-300 p-5 rounded-md container w-auto mx-auto overflow-x-auto h-full">
          <h3 className="text-2xl font-bold mb-3">Alumni</h3>

          {/* Search Bar */}
          <div className="container mx-auto w-auto flex justify-between items-center">
            <div className="inline-block">
              <input
                type="text"
                className="bg-zinc-100 h-10  outline-none pl-4 w-[70px] sm:w-64 rounded-full sm:rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal ml-2"
                placeholder="Search for..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="inline-block">
                <button
                  className="py-2 px-2 bg-white rounded-lg focus:outline-none w-auto flex"
                  onClick={() => setIsDate(!isDate)}
                >
                  {selectedDate} <VscChevronDown size={25} className="pl-1" />
                </button>
                {isDate && (
                  <ul className="absolute  bg-white border rounded-lg shadow-md overflow-x-auto max-h-40">
                    {YearOptions.map((stat, index) => (
                      <li
                        key={index}
                        className="cursor-pointer py-2 px-4 hover:bg-blue-100"
                        onClick={() => selectDate(stat)}
                      >
                        {stat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="container mx-auto p-4 overflow-x-auto max-w-full">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Event No</th>
                  <th className="px-6 py-3 text-left font-medium">Name</th>
                  <th className="px-6 py-3 text-left font-medium">
                    Year Graduate
                  </th>
                  <th className="px-6 py-3 text-left font-medium">Birthdate</th>
                  <th className="px-6 py-3 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {eventsToDisplay.map((alumni) => (
                  <tr
                    key={alumni.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-6 py-4">{alumni.id}</td>
                    <td className="px-6 py-4">{alumni.aname}</td>
                    <td className="px-6 py-4">{alumni.yeargrad}</td>
                    <td className="px-6 py-4">{alumni.birthdate}</td>
                    <td className="px-6 py-4 cursor-pointer">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => openDetailsModal(alumni)}
                      >
                        View
                      </button>

                      {/* Alumni Details Modal */}
                      {selectedAlumni && (
                        <div className="fixed inset-0 flex items-center justify-center z-10">
                          <div className="bg-white w-full sm:w-2/3 p-4 rounded shadow-lg z-20">
                            <h2 className="text-lg font-semibold mb-2 text-center">
                              Alumni Details
                            </h2>
                            <div className="mb-4 float">
                              <strong>Alumni no:</strong> {selectedAlumni.id}
                            </div>
                            <div className="mb-4 ">
                              <strong>Name:</strong> {selectedAlumni.aname}
                            </div>
                            <div className="mb-4">
                              <strong>Year Graduate:</strong>{" "}
                              {selectedAlumni.yeargrad}
                            </div>
                            <div className="mb-4">
                              <strong>Address:</strong> {selectedAlumni.address}
                              <strong className="ml-16">Birthdate:</strong>{" "}
                              {selectedAlumni.birthdate}
                            </div>
                            <button
                              className="bg-blue-500 text-white px-4 py-2 rounded"
                              onClick={closeDetailsModal}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
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

export default AAlumni;
