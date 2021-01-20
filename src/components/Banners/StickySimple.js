import React from "react";
// https://tailwindui.com/components/marketing/elements/banners#component-dbfc9202359bb505320d6e84646f2744

export default (props) => {
	return (
		<div className="relative bg-indigo-600">
			<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
				<div className="pr-16 sm:text-center sm:px-16">
					<p className="font-medium text-white">
						<span className="md:hidden">
							We announced a new product!
						</span>
						<span className="hidden md:inline">
							Big news! We're excited to announce a brand new
							product.
						</span>
						<span className="block sm:ltr:ml-2 sm:rtl:mr-2 sm:inline-block">
							<a
								href="#"
								className="text-white font-bold underline"
							>
								{" "}
								Learn more{" "}
								<span className="rtl:hidden" aria-hidden="true">
									&rarr;
								</span>
								<span className="ltr:hidden" aria-hidden="true">
									&larr;
								</span>
							</a>
						</span>
					</p>
				</div>
				<div className="absolute inset-y-0 ltr:right-0 rtl:left-0 pt-1 ltr:pr-1 rtl:pl-1 flex items-start sm:pt-1 sm:ltr:pr-2 sm:rtl:pl-2 sm:items-start">
					<button
						type="button"
						className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
					>
						<span className="sr-only">Dismiss</span>
						{/* <!-- Heroicon name: x --> */}
						<svg
							className="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};
