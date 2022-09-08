import React from 'react';
import SectionTitle from './SectionTitle';
import EducationItem from './EducationItem';
import education from '../data/education';

function Education() {
	return (
        <div className="py-12">
            <SectionTitle>Education</SectionTitle>
            <div id="education" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {education.map(item => (
					<EducationItem
						key={item.title}
						title={item.title}
						icon={item.icon}
                        description={item.description}
					/>
				))}
            </div>
        </div>
	);
}

export default Education;