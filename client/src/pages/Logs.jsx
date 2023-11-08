import React, { useState, useEffect } from "react";
import { VscChevronDown } from "react-icons/vsc";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Dashboardview from "../components/Dashboardview";

const Logs = () => {
  const [logsdata, setlogsdata] = useState([]);
  const [newlogsdata, setNewlogsdata] = useState({
    lname: "Rems",
    fname: "Jams",
    mname: "A",
    ptime: "",
    pdate: "",
    description: "",
    link: "",
    img: "",
  });

  const [isDate, setIsDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState("All");
  const [filteredJob, setFilteredJob] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  const DateOptions = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filterEventsByMonth = (month) => {
    const selectedMonth = month.toLowerCase();

    if (selectedMonth === "all") {
      return logsdata; // Show all events
    } else {
      const filtered = logsdata.filter((event) => {
        const eventDate = new Date(event.pdate);
        const eventMonth = eventDate
          .toLocaleString("default", { month: "long" })
          .toLowerCase();
        return eventMonth === selectedMonth;
      });

      if (filtered.length === 0) {
        return ["None"]; // Set a special value to indicate no events for the selected month
      } else {
        return filtered;
      }
    }
  };

  const selectDate = (stat) => {
    setSelectedDate(stat);
    setIsDate(false);

    const filtered = filterEventsByMonth(stat);
    setFilteredJob(filtered);
  };

  const [searchTerm, setSearchTerm] = useState("");


  const closeDetailsModal = () => {
    setselectedLogs(null);
  };

  const handleChange = (e) => {
    setNewlogsdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      // If the search term is empty, display all events
      setFilteredJob(logsdata);
    } else {
      const filtered = logsdata.filter((event) =>
        event.fname.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filtered.length === 0) {
        setFilteredJob(["NONE"]); // Set a special value to indicate no matching events
      } else {
        setFilteredJob(filtered);
      }
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      CreateJob(e);
    }
  };

  const CreateJob = async () => {
    try {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const formattedDate = now.toLocaleDateString();

      const newLogs = {
        ...newlogsdata,
        ptime: formattedTime, // Posted time (automated)
        pdate: formattedDate, // Posted date (automated)
        img: imageFile,
      };
      const formData = new FormData();
      formData.append("lname", newlogsdata.lname);
      formData.append("fname", newlogsdata.fname);
      formData.append("mname", newlogsdata.mname);
      formData.append("ptime", formattedTime); // Use the formatted selected time
      formData.append("pdate", formattedDate); // Use the formatted current date
      formData.append("description", newlogsdata.description);
      formData.append("link", newlogsdata.link);
      formData.append("image", imageFile);

      await axios.post("http://localhost:3001/jobopp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Assuming your API returns the newly added event, you can update the state accordingly.
      fetchlogsdata();
      setNewlogsdata({
        lname: "",
        fname: "",
        mname: "",
        ptime: "", // Posted time (automated)
        pdate: "", // Posted date (automated)
        description: "", // Event description (if needed)
        link: "",
        img: "",
      });
      setImageFile(null);
      setIsOpen(false); // Reset form fields after creating an event
    } catch (err) {
      console.log(err);
    }
  };
  const fetchlogsdata = async () => {
    try {
      const res = await axios.get("http://localhost:3001/jobopp/alumnijob", {
        params: { status: true }, // Add this query parameter to filter by status=true
      });

      setlogsdata(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchlogsdata();
  }, []);

  const eventsToDisplay = filteredJob.length > 0 ? filteredJob : logsdata;
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <Dashboardview />
        <div className="flex-grow bg-gray-300 p-5 rounded-md container mx-auto overflow-x-auto h-full">
          <h3 className="text-2xl font-bold mb-3">Logs</h3>

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
                    {DateOptions.map((stat, index) => (
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

          <div className="container mx-auto p-4 overflow-y-scroll h-full w-full md:overflow-x-auto overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left font-medium">ID</th>
                  <th className="px-6 py-3 text-left font-medium">Alumni </th>
                  <th className="px-6 py-3 text-left font-medium">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left font-medium">
                      Date
                  </th>
                  <th className="px-6 py-3 text-left font-medium">Action</th>
                  <th className="px-6 py-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {eventsToDisplay.map((event, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{event.lname} {event.fname} {event.mname} </td>
                    <td className="px-6 py-4">
                      {event.ptime}
                    </td><td className="px-6 py-4">
                      {event.pdate}
                    </td>
                    <td className="px-6 py-4 cursor-pointer">Action
                    </td>
                    <td className="px-6 py-4">{event.description}</td>
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

export default Logs;

