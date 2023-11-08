import React from "react";

import Sidebar from "../components/Sidebar";
import Dashboardview from "../components/Dashboardview";

const Logs = () => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <Dashboardview />
        <div>HEllo</div>

        <div className="container mx-auto p-4 overflow-y-scroll h-full w-full md:overflow-x-auto overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left font-medium">ID</th>
                <th className="px-6 py-3 text-left font-medium">Alumni</th>
                <th className="px-6 py-3 text-left font-medium">Date</th>
                <th className="px-6 py-3 text-left font-medium">Time</th>
                <th className="px-6 py-3 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {eventsToDisplay.map((event) => (
                <tr
                  key={event.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="px-6 py-4">{event.id}</td>
                  <td className="px-6 py-4">{event.title}</td>
                  <td className="px-6 py-4">{event.description}</td>
                  <td className="px-6 py-4">
                    {event.ptime} {event.pdate}
                  </td>
                  <td className="px-6 py-4 cursor-pointer">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => openDetailsModal(event)}
                    >
                      View
                    </button>

                    {/* Event Details Modal */}
                    {selectedJob && (
                      <div className="fixed inset-0 flex items-center justify-center z-10">
                        <div className="bg-white w-[50%] p-4 rounded shadow-lg z-20 ">
                          <h2 className="text-lg font-semibold mb-2 text-center">
                            Job Details
                          </h2>
                          <div className="mb-4 flaot">
                            <strong>Event Number:</strong> {selectedJob.id}
                          </div>
                          <div className="mb-4 ">
                            <strong>Title:</strong> {selectedJob.title}
                          </div>
                          <div
                            className="mb-4"
                            style={{ maxHeight: "100px", overflowY: "auto" }}
                          >
                            <strong>Description:</strong>{" "}
                            {selectedJob.description}
                          </div>
                          <div className="mb-4">
                            <strong>Posted Time:</strong> {selectedJob.ptime}
                            <strong className="ml-16">Date:</strong>{" "}
                            {selectedJob.pdate}
                          </div>
                          <div className="mb-4">
                            <strong>Link:</strong> {selectedJob.link}
                          </div>
                          <div className="mb-4">
                            <strong>Validation Image:</strong>
                            {selectedJob.imagePath && (
                              <div className="w-full h-48 rounded border overflow-hidden">
                                <img
                                  src={selectedJob.imagePath}
                                  alt="Validation"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>

                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                            onClick={() => {
                              window.open(selectedJob.link, "_blank");
                            }}
                          >
                            Visit Link
                          </button>
                          <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={closeDetailsModal}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                    <button
                      className="text-red-500 hover:underline ml-2"
                      onClick={() => handleStatusUpdate(eventToModify)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logs;
