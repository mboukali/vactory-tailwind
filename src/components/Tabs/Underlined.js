import React from "react";
// https://tailwindui.com/components/application-ui/navigation/tabs#component-aed2acb28998d158d7aa898cb19540e4

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
					<nav className="-mb-px flex space-x-8" aria-label="Tabs">
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
						>
							{/* <!-- Heroicon name: user --> */}
							<svg
								className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clipRule="evenodd"
								/>
							</svg>
							<span>My Account</span>
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
						>
							{/* <!-- Heroicon name: office-building --> */}
							<svg
								className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Company</span>
						</a>
						{/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
						<a
							href="#"
							className="border-indigo-500 text-indigo-600 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
							aria-current="page"
						>
							{/* <!-- Current: "text-indigo-500", Default: "text-gray-400 group-hover:text-gray-500" --> */}
							{/* <!-- Heroicon name: users --> */}
							<svg
								className="text-indigo-500 -ml-0.5 mr-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
							</svg>
							<span>Team Members</span>
						</a>
						<a
							href="#"
							className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
						>
							{/* <!-- Heroicon name: credit-card --> */}
							<svg
								className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
								<path
									fillRule="evenodd"
									d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
									clip-rule="Renodd"
								/>
							</svg>
							<span>Billing</span>
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};
