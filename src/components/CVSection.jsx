import React from 'react';
import Section from './Section';
import WorkSection from './sections/WorkSection';
import EducationSection from './sections/EducationSection'
import ToolsSection from './sections/ToolsSection';
import ProjectsSection from './sections/ProjectsSections';
import OtherSection from './sections/OtherSection';

function CVSection({ data }) {
	const { workExperience, education, tools, projects, other } = data;

	return (
		<>
			<WorkSection data={workExperience} />
			<ProjectsSection data={projects} />
			<EducationSection data={education} />
			<ToolsSection data={tools} />
			<OtherSection data={other} />
		</>
	)
}

export default CVSection;