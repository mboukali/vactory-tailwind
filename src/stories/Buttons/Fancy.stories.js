import React from "react";

export default {
	title: "Primitives/Buttons",
};

export const FancyButton = () => {
	const theFancyStuff =
		"border-b-4 active:border-b-2 active:translate-y-0.5 transform-gpu border-indigo-900";
	return (
		<>
			{["px-3 py-2 text-sm leading-4", "px-6 py-3 text-base"].map(
				(size) => (
					<div className="flex flex-col md:flex-row flex-wrap space-y-2 md:space-y-0 my-5 space-x-5 rtl:space-x-reverse justify-center items-center">
						<div>
							<button
								type="button"
								className={`inline-flex items-center ${size} border-b-4 active:border-b-2 active:translate-y-0.5 active:mb-0.5 transform-gpu border-indigo-900 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
							>
								Button Primary
							</button>
						</div>

						<div>
							<button
								type="button"
								className={`inline-flex items-center border ${size} border-b-4 active:border-b-2 active:translate-y-0.5 active:mb-0.5 transform-gpu border-indigo-900 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
							>
								Button Secondary
							</button>
						</div>

						<div>
							<button
								type="button"
								className={`inline-flex items-center border border-gray-300 shadow-sm ${size} border-b-4 active:border-b-2 active:mb-0.5 active:translate-y-0.5 transform-gpu border-indigo-900 font-medium rounded-md text-indigo-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
							>
								Button Transparent
							</button>
						</div>

						<div>
							<button
								type="button"
								className={`${theFancyStuff} inline-flex items-center border border-transparent ${size} font-medium rounded-full active:mb-0.5 shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
							>
								Rounded Corners
							</button>
						</div>
					</div>
				)
			)}
		</>
	);
};
