import React from 'react';
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem';
import projects from '../data/projects';


function Works() {
	return (
		<div className="py-12">
			<SectionTitle>Proyectos</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{projects.map(project =>  
					<WorkItem
						key={project.title}
						title={project.title}
						imgUrl={project.imgUrl}
						tech={project.tech}
						url={project.url}
					/>
				)}
			</div>
		</div>
	);
}

export default Works;
