import React from 'react';

function EducationItem({ title, icon, description}) {
	return (
		<div className="bg-slate-300 hover:bg-slate-200 dark:bg-sky-700dark:hover:bg-sky-500 hover:-translate-y-2 transform transition rounded-md p-5">
			<div className="text-gray-800 dark:text-gray-900 w-6 h-6 mb-3">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-gray-600 dark:text-gray-800 mb-1">
				{title}
			</h1>
			<p className="text-md text-gray-600 dark:text-gray-800">{description}</p>
		</div>
	);
}

export default EducationItem;