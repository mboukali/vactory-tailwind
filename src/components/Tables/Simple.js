import React from "react";
import data from "./data.json";

export default (props) => {
	return (
		<div className="flex flex-col">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Name
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Title
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Email
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Role
									</th>
									<th scope="col" className="relative px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{data.map((row, i) => {
									return (
										<tr>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
												{row.a}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{row.b}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{row.c}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{row.d}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<a
													href="#!"
													className="text-indigo-600 hover:text-indigo-900"
												>
													Edit
												</a>
											</td>
										</tr>
									);
								} )}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
