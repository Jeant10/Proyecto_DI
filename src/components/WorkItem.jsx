import React from 'react';

function WorkItem({ imgUrl, title, tech, url}) {
	return (
		<div className="card bg-slate-300 hover:bg-slate-200 dark:bg-sky-700dark:hover:bg-sky-500 hover:-translate-y-2 transform transition rounded-md p-2 text-center">
			<img src={imgUrl}>
			</img>
			<h1 className="font-bold text-lg text-gray-600 dark:text-gray-800 mb-1 pt-6">
				{title}
			</h1>
			<p className="text-md text-gray-600 dark:text-gray-800 pb-8">{tech}</p>
			<a href={url} className="outline outline-offset-2 outline-2"> Go to work</a>
		</div>
	);
}

export default WorkItem;
