import React from "react";
// https://tailwindui.com/components/application-ui/overlays/notifications#component-8960ebee918a39c1a753da4d378c0f96

export default (props) => {
	return (
		<div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
			{/*
				Notification panel, show/hide based on alert state.

				Entering: "transform ease-out duration-300 transition"
				From: "translate-y-2 opacity-0 sm:translate-y-0 sm:ltr:translate-x-2 sm:rtl:sm:-translate-x-2"
				To: "translate-y-0 opacity-100 sm:translate-x-0"
				Leaving: "transition ease-in duration-100"
				From: "opacity-100"
				To: "opacity-0"
			*/}
			<div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
				<div className="p-4">
					<div className="flex items-center">
						<div className="w-0 flex-1 flex justify-between">
							<p className="w-0 flex-1 text-sm font-medium text-gray-900">
								Discussion archived
							</p>
							<button className="ltr:ml-3 rtl:mr-3 flex-shrink-0 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Undo
							</button>
						</div>
						<div className="ltr:ml-4 rtl:mr-4 flex-shrink-0 flex">
							<button className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<span className="sr-only">Close</span>
								{/* Heroicon name: x */}
								<svg
									className="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
