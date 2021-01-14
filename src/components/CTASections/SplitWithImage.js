import React from "react";

export default (props) => {
	return (
		<div className="relative bg-gray-800">
			<div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:ltr:left-0 md:rtl:right-0 md:h-full md:w-1/2">
				<img
					className="w-full h-full object-cover"
					src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
					alt=""
				/>
			</div>
			<div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="md:ltr:ml-auto md:rtl:mr-auto md:w-1/2 md:ltr:pl-10 md:rtl:pr-10">
					<h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
						Award winning support
					</h2>
					<p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
						We’re here to help
					</p>
					<p className="mt-3 text-lg text-gray-300">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Et, egestas tempus tellus etiam sed. Quam a scelerisque
						amet ullamcorper eu enim et fermentum, augue. Aliquet
						amet volutpat quisque ut interdum tincidunt duis.
					</p>
					<div className="mt-8">
						<div className="inline-flex rounded-md shadow">
							<a
								href="#"
								className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
							>
								Visit the help center
								{/* <!-- Heroicon name: external-link --> */}
								<svg
									className="ltr:-mr-1 rtl:-ml-1 ltr:ml-3 rtl:mr-3 h-5 w-5 text-gray-400 transform rtl:-scale-x-100"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
									<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}