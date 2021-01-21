import React from "react";
import { Transition } from "@headlessui/react";
// https://tailwindui.com/components/application-ui/overlays/notifications#component-755581b198213fbd8058c85f7f18cb39

export default (props) => {
	const [isOpen, setIsOpen] = React.useState(true);

	React.useEffect(() => {
		const tout = setTimeout(() => {
			setIsOpen(true);
		}, 1000);

		return () => clearTimeout(tout);
	}, [isOpen]);

	return (
		<div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
			{/*
			Notification panel, show/hide based on alert state.

				Entering: "transform ease-out duration-300 transition"
				From: "translate-y-2 opacity-0 sm:translate-y-0 sm:ltr:translate-x-2 sm:rtl:-translate-x-2"
				To: "translate-y-0 opacity-100 sm:translate-x-0"
				Leaving: "transition ease-in duration-100"
				From: "opacity-100"
				To: "opacity-0"
			*/}
			<Transition
				show={isOpen}
				enter="transform ease-out duration-300 transition"
				enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:ltr:translate-x-2 sm:rtl:-translate-x-2"
				enterTo="translate-y-0 opacity-100 sm:translate-x-0"
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
			>
				<div className="p-4">
					<div className="flex items-start">
						<div className="flex-shrink-0">
							{/* Heroicon name: inbox */}
							<svg
								className="h-6 w-6 text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
								/>
							</svg>
						</div>
						<div className="ltr:ml-3 rtl:mr-3 w-0 flex-1 pt-0.5">
							<p className="text-sm font-medium text-gray-900">
								Discussion moved
							</p>
							<p className="mt-1 text-sm text-gray-500">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit oluptatum tenetur.
							</p>
							<div className="mt-2">
								<button className="bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Undo
								</button>
								<button className="ltr:ml-6 rtl:mr-6 bg-white rounded-md text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Dismiss
								</button>
							</div>
						</div>
						<div className="ltr:ml-4 rtl:mr-4 flex-shrink-0 flex">
							<button
								onClick={() => setIsOpen(false)}
								className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
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
			</Transition>
		</div>
	);
};
