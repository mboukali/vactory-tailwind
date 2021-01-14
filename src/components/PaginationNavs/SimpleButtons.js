import React from "react";
// https://tailwindui.com/components/application-ui/navigation/pagination#component-0797a02a34692167c369d134e7a6f9c5

export default (props) => {
	return (
		<nav
			class="mt-20 mx-20 bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
			aria-label="Pagination"
		>
			<div class="hidden sm:block">
				<p class="text-sm text-gray-700">
					Showing <span class="font-medium">1</span> to{" "}
					<span class="font-medium">10</span> of{" "}
					<span class="font-medium">20</span> results
				</p>
			</div>
			<div class="flex-1 flex justify-between sm:justify-end">
				<a
					href="#!"
					class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Previous
				</a>
				<a
					href="#!"
					class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Next
				</a>
			</div>
		</nav>
	);
};
