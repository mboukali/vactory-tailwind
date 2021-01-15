import React from "react";
// https://tailwindui.com/components/application-ui/navigation/tabs#component-07e889de48dabb9e22d20353d7c02d16

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
				<nav className="flex space-x-4" aria-label="Tabs">
					<a
						href="#"
						className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
					>
						My Account
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
					>
						Company
					</a>
					{/* <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" --> */}
					<a
						href="#"
						className="bg-indigo-100 text-indigo-700 px-3 py-2 font-medium text-sm rounded-md"
						aria-current="page"
					>
						Team Members
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
					>
						Billing
					</a>
				</nav>
			</div>
		</div>
	);
};
