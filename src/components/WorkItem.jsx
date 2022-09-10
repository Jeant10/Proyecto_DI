import React from 'react';

function WorkItem({ imgUrl, title, tech, url}) {
	return (
		<div class="card card-side bg-green-400 grid grid-cols-2 gap-2 rounded-2xl">
			<figure><img src={imgUrl} alt="Movie" className="w-60 md:w-96 p-3"/></figure>
			<div class="card-body">
				<h2 class="card-title">{title}</h2>
				<p>{tech}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary p-4">
						<a href={url} className="outline outline-offset-2 outline-2 rounded-2xl"> Go to work</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default WorkItem;
