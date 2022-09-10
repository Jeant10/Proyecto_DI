import React from 'react';

function ServiceItem({ title, icon, description, im }) {
	return (
		<div className="bg-emerald-300 hover:bg-sky-200 dark:bg-green-600 dark:hover:bg-green-300 hover:-translate-y-2 transform transition rounded-md p-5">
			<div className="text-gray-800 dark:text-gray-900 w-6 h-6 mb-3">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-gray-600 dark:text-gray-800 mb-1">
				{title}
			</h1>
			<p className="text-md text-gray-600 dark:text-gray-900">{description}</p>
			<img
				className="w-24 h-24 rounded-lg p-2"
				src={im}
				alt = "services"
			/>
		</div>
	);
}

export default ServiceItem;
