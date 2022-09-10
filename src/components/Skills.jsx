import React from 'react';
import skills from '../data/skills';
import SectionTitle from './SectionTitle';
import SkillsItem from './SkillsItem';

function Skills() {
	return (
		<div className="py-12">
			<SectionTitle>Habilidades</SectionTitle>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
				{skills.map(skill => (
					<SkillsItem
						key={skill.title}
						title={skill.title}
						icon={skill.icon}
					/>
				))}
			</div>
		</div>
	);
}

export default Skills;