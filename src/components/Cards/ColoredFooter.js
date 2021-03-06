import React from "react";

export default (props) => {
	return (
		<div className="mt-12 relative text-base max-w-prose mx-auto">
			<svg
				className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							className="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width="404"
					height="384"
					fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
				/>
			</svg>
			<blockquote className="relative bg-white dark:bg-black rounded-lg shadow-lg">
				<div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
					<img
						referrerPolicy="no-referrer"
						src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
						alt="Workcation"
						className="h-8"
					/>
					<div className="relative text-lg text-gray-700 dark:text-gray-300 font-medium mt-8">
						<svg
							className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200 dark:text-gray-700"
							fill="currentColor"
							viewBox="0 0 32 32"
							aria-hidden="true"
						>
							<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
						</svg>
						<p className="relative">
							Tincidunt integer commodo, cursus etiam aliquam
							neque, et. Consectetur pretium in volutpat, diam.
							Montes, magna cursus nulla feugiat dignissim id
							lobortis amet. Laoreet sem est phasellus eu proin
							massa, lectus.
						</p>
					</div>
				</div>
				<cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
					<div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
						<img
							className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
							src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
							alt=""
						/>
					</div>
					<span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
						<p className="text-white font-semibold sm:inline ltr:mr-1 rtl:ml-1">
							Judith Black
						</p>
						<p className="sm:inline">CEO at Workcation</p>
					</span>
				</cite>
			</blockquote>
		</div>
	);
};
