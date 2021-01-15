import React from "react";

export default (props) => {
	return (
		<div className="bg-gray-50">
			<div className="max-w-7xl mx-auto py-14 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-extrabold sm:text-4xl">
						Notre présence en afrique
					</h2>
					<p className="mt-3 text-xl text-gray sm:mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Repellendus repellat laudantium.
					</p>
				</div>
				<div className="mt-10 text-center flex flex-wrap justify-center sm:justify-around">
					<div className="flex flex-col justify-center bg-white border border-indigo rounded-lg w-48 px-8 py-14 box-content mx-4 mt-10">
						<span className="text-7xl font-black text-transparent text-stroked">
							1<sup>e</sup>
						</span>
						<span className="mt-2 leading-6 font-medium text-indigo-900">
							Banque digitale en afrique
						</span>
					</div>
					<div className="flex flex-col justify-center bg-white border border-indigo rounded-lg w-48 px-8 py-14 box-content mx-4 mt-10">
						<span className="text-7xl font-black text-transparent text-stroked">
							13
						</span>
						<span className="mt-2 leading-6 font-medium text-indigo-900">
							Pays de présence en afrique
						</span>
					</div>
					<div className="flex flex-col justify-center bg-white border border-indigo rounded-lg w-48 px-8 py-14 box-content mx-4 mt-10">
						<span className="text-7xl font-black text-transparent text-stroked">
							$3
						</span>
						<span className="mt-2 leading-6 font-medium text-indigo-900">
							Milliard de produits Net bancaire
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}