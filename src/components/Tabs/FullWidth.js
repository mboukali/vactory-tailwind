import React from "react";
// https://tailwindui.com/components/application-ui/navigation/tabs#component-7c429fe94a1fc0801cfd429c3b507c12

export default (props) => {
	return (
		<div>
			<div className="sm:hidden">
				<label for="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					id="tabs"
					name="tabs"
					className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
				>
					<option>My Account</option>
					<option>Company</option>
					<option selected>Team Members</option>
					<option>Billing</option>
				</select>
			</div>
			<div className="hidden sm:block">
				<div className="border-b border-gray-200">
					<nav className="-mb-px flex" aria-label="Tabs">
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"
						>
							My Account
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"
						>
							Company
						</a>
						{/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
						<a
							href="#"
							className="border-indigo-500 text-indigo-600 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"
							aria-current="page"
						>
							Team Members
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm"
						>
							Billing
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};
