import React from "react";
import { Link } from "react-router-dom";
import bscslogs from "../assets/bscslogs.png";

const Login = () => {
	return (
		<div className="bg-emerald-400 flex justify-center items-center min-h-screen">
			<div className="bg-green-300 px-8 rounded-lg shadow-md sm:w-auto w-1/3 mx-auto py-8 mt-5">
				<div className="relative inline-block w-28 mt-5 mx-5 text-center sm:inline-block sm:w-28 md:w-40 sm:mx-auto">
					<img src={bscslogs} className="sm:w-auto lg:w-auto" alt="WMSU Logs" />
					<Link to="/Registration">
						<button className=" mt-2 p-1 w-full">
							{" "}
							<u>Create an Account</u>
						</button>
					</Link>
				</div>
				<div className="relative inline-block float-right m-5 sm:w-auto ">
					<form>
						<div className="mb-2">
							<label htmlFor="email" className="block mb-1 ">
								<strong>Email </strong>
							</label>
							<input
								type="email"
								name="email"
								className="w-full  border border-gray-300 p-2 rounded"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="password" className="block mb-1">
								<strong>Password</strong>
							</label>
							<input
								type="password"
								name="password"
								className="w-full border border-gray-300 p-2 rounded"
							/>
						</div>
						<Link to="/AProfile">
							<button
								type="submit"
								className="w-full bg-blue-500 text-black rounded hover:bg-blue-600 transition duration-300 mb-2 py-2"
							>
								<strong>Login as Alumni</strong>
							</button>
						</Link>

						<Link to="/Adminpage">
							<button
								type="submit"
								className="w-full bg-blue-500 text-black rounded hover:bg-blue-600 transition duration-300 py-2"
							>
								<strong>Log In Admin</strong>
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
