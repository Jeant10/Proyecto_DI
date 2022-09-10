import React from 'react';


function SkillsItem({ title, icon}) {
	return (
		<div className="bg-slate-300 hover:bg-slate-200 dark:bg-cyan-600 dark:hover:bg-cyan-100 hover:-translate-y-2 transform transition rounded-md p-5">
			<div className="text-gray-800 dark:text-gray-900 w-6 h-6 mb-3">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-gray-600 dark:text-gray-800 mb-1">
				{title}
			</h1>
		</div>
	);
}

export default SkillsItem;