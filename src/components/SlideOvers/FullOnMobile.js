import React from "react";
import { Transition } from "@headlessui/react";

export default (props) => {
	const panel = React.useRef(null);
	const [isOpen, setIsOpen] = React.useState(true);

	React.useEffect(() => {
		const tId = setTimeout(setIsOpen, 1000, true);
		return () => clearTimeout(tId);
	}, [isOpen]);

	// to close the panel when we click outside of it
	const handleClickOutside = (e) => {
		// if (!panel.current.contains(e.target))
		setIsOpen(!isOpen);
	};

	// attach click outside handler
	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<div className="fixed inset-0 overflow-hidden">
			<section
				ref={panel}
				className="absolute inset-y-0 left-0 md:pr-10 max-w-full flex"
				aria-labelledby="slide-over-heading"
			>
				{/*
					Slide-over panel, show/hide based on slide-over state.

					Entering: "transform transition ease-in-out duration-500 sm:duration-700"
					From: "translate-x-full"
					To: "translate-x-0"
					Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
					From: "translate-x-0"
					To: "translate-x-full"
					*/}
				<Transition
					show={isOpen}
					enter="transform transition ease-in-out duration-500 sm:duration-700"
					enterFrom="-translate-x-full"
					enterTo="translate-x-0"
					leave="transform transition ease-in-out duration-500 sm:duration-700"
					leaveFrom="translate-x-0"
					leaveTo="-translate-x-full"
					className="w-screen md:max-w-md"
				>
					<div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
						<div className="px-4 sm:px-6">
							<div className="flex items-start justify-between">
								<h2
									id="slide-over-heading"
									className="text-lg font-medium text-gray-900"
								>
									Panel title
								</h2>
								<div className="mr-3 h-7 flex items-center">
									<button
										onClick={() => setIsOpen(false)}
										className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										<span className="sr-only">
											Close panel
										</span>
										{/* Heroicon name: x */}
										<svg
											className="h-6 w-6"
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
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="mt-6 relative flex-1 px-4 sm:px-6">
							{/* Replace with your content */}
							<div className="absolute inset-0 px-4 sm:px-6">
								<div
									className="h-full border-2 border-dashed border-gray-200"
									aria-hidden="true"
								/>
							</div>
							{/* /End replace */}
						</div>
					</div>
				</Transition>
			</section>
		</div>
	);
};
