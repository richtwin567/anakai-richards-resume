'use client';

import Image from 'next/image';
import { Chip, HeroUIProvider } from '@heroui/react';
import EmailIcon from '@/assets/email.svg';
import GitHubIcon from '@/assets/github.svg';
import PinIcon from '@/assets/pin.svg';
import SmartphoneIcon from '@/assets/smartphone.svg';
import { technicalSkills } from '@/data/skills';
import { workExperience } from '@/data/work';
import { education } from '@/data/education';
import { volunteerExperience } from '@/data/volunteer';
import { achievements } from '@/data/achievements';
import { projects } from '@/data/projects';
import { languages } from '@/data/languages';
import { isEducationEntry, ResumeEntry } from '@/types/resume_entry';

export default function Home() {
	let lines = 5;
	const maxLines = 50;

	function estimateLines(entry: ResumeEntry) {
		let estimatedLines = 0;
		estimatedLines += entry.title ? 1 : 0;
		estimatedLines += entry.subtitle ? 1 : 0;
		estimatedLines += entry.startDate || entry.endDate ? 1 : 0;
		estimatedLines += entry.achievements?.length ?? 0 > 0 ? 1 : 0;
		for (const achievement of entry.achievements ?? []) {
			estimatedLines += Math.ceil(achievement.length / 110);
		}
		estimatedLines += 1; // for space after the entry
		if (isEducationEntry(entry)) {
			estimatedLines += entry.subjects?.length ?? 0 > 0 ? 1 : 0;
			for (const subject of entry.subjects ?? []) {
				estimatedLines += Math.ceil(subject.length / 110);
			}
			estimatedLines += entry.grade ? 1 : 0;
		}
		return estimatedLines;
	}

	function shouldStartANewPage(entry: ResumeEntry) {
		const estimate = estimateLines(entry);
		let className = '';
		if (lines + estimate > maxLines) {
			lines = estimate;
			className = ' start-of-page';
		} else {
			lines += estimate;
		}
		return className;
	}

	function createSectionTitle(title: string) {
		lines += 2;
		return <h1 className='section-title'>{title}</h1>;
	}

	return (
		<HeroUIProvider>
			<div className='main-content'>
				<div className='grid grid-cols-[70%,_30%] py-[0.35in]'>
					<header className='flex flex-row pl-[0.6in]'>
						<div className='flex flex-col'>
							<h1 className='doc-title'>
								Anakai
								<br />
								Richards
							</h1>
							<h2 className='doc-subtitle'>Software Engineer</h2>
							{/* <p>
						Software engineer with 3 years experience in full stack
						development at GraceKennedy&apos;s Digital Factory.
						Achievements include leading the backend implementation
						for the motor insurance feature of the GKOne app and
						leading the transition to event-driven architecture
						while conducting training sessions for colleagues on
						best practices. Promoted from Software Engineer
						Associate to Software Engineer within one year due to
						demonstrated impact on project outcomes.
					</p> */}
						</div>
					</header>
					<div className=' flex pr-[0.4in]'>
						<div className='list-none contact points grid grid-cols-[auto,_auto] gap-2 auto-rows-min content-center items-center'>
							<Image src={EmailIcon} alt='email' />
							<a
								className='contact'
								href='mailto:anakai.richards@gmail.com'>
								anakai.richards@gmail.com
							</a>
							<Image src={GitHubIcon} alt='github' />
							<a
								href='https://github.com/richtwin567'
								className='contact'>
								github.com/richtwin567
							</a>
							<Image src={SmartphoneIcon} alt='phone' />
							<a className='contact' href='tel:+1-876-426-4970'>
								+1 (876) 426-4970
							</a>
							<Image src={PinIcon} alt='location' />
							<span className='contact'>St Andrew, Jamaica</span>
						</div>
					</div>
				</div>
				<main className='pl-[0.6in] pr-[0.5in]'>
					{createSectionTitle('Work Experience')}
					{workExperience
						.filter((work) => work.show)
						.map((work, index) => {
							let className = shouldStartANewPage(work);
							return (
								<div
									key={work.title + index}
									className={'section-entry' + className}>
									<h2 className='job title'>{work.title}</h2>
									<h3 className='job subtitle'>
										{work.subtitle}
									</h3>
									<p className='job label'>
										{work.startDate} - {work.endDate}
									</p>
									{(work.achievements?.length ?? 0) > 0 && (
										<p className='job label'>
											Achievements/Tasks
										</p>
									)}
									<ul className='job points list-disc'>
										{work.achievements?.map(
											(achievement) => (
												<li key={achievement}>
													{achievement}
												</li>
											)
										)}
									</ul>
								</div>
							);
						})}
					{createSectionTitle('Education')}
					{education
						.filter((edu) => edu.show)
						.map((edu, index) => {
							let className = shouldStartANewPage(edu);

							return (
								<div
									key={edu.title + index}
									className={'section-entry' + className}>
									<h2 className='job title'>{edu.title}</h2>
									<h3 className='job subtitle'>
										{edu.subtitle}
									</h3>
									<p className='job label flex flex-row justify-between'>
										<span>
											{edu.startDate}
											{edu.endDate
												? ` - ${edu.endDate}`
												: ''}
										</span>
										{edu.grade && <span> {edu.grade}</span>}
									</p>
									{edu.achievements && (
										<p className='job label'>
											Achievements
										</p>
									)}
									{edu.achievements && (
										<ul className='job points list-disc'>
											{edu.achievements.map(
												(achievement, index) => (
													<li key={index}>
														{achievement}
													</li>
												)
											)}
										</ul>
									)}
									{edu.subjects && (
										<p className='job label'>Subjects</p>
									)}
									{edu.subjects && (
										<ul className='job points list-disc'>
											{edu.subjects.map(
												(subject, index) => (
													<li key={index}>
														{subject}
													</li>
												)
											)}
										</ul>
									)}
								</div>
							);
						})}

					{createSectionTitle('Projects')}
					{projects
						.filter((project) => project.show)
						.map((project, index) => {
							let className = shouldStartANewPage(project);

							return (
								<div
									key={project.title + index}
									className={'section-entry' + className}>
									<h2 className='title'>{project.title}</h2>
									<h3 className='subtitle'>
										{project.subtitle}
									</h3>
									<p className='label'>
										{project.startDate}
										{project.endDate
											? ` - ${project.endDate}`
											: ''}
									</p>
									{(project.achievements?.length ?? 0) >
										0 && (
										<p className='label'>
											Achievements/Tasks
										</p>
									)}
									<ul className='points list-disc'>
										{project.achievements?.map(
											(achievement, index) => (
												<li key={index}>
													{achievement}
												</li>
											)
										)}
									</ul>
								</div>
							);
						})}
					{createSectionTitle('Volunteer Experience')}
					{volunteerExperience
						.filter((volunteer) => volunteer.show)
						.map((volunteer, index) => {
							let className = shouldStartANewPage(volunteer);

							return (
								<div
									key={volunteer.title + index}
									className={'section-entry' + className}>
									<h2 className='title'>{volunteer.title}</h2>
									<h3 className='subtitle'>
										{volunteer.subtitle}
									</h3>
									<p className='label'>
										{volunteer.startDate}
										{volunteer.endDate
											? ` - ${volunteer.endDate}`
											: ''}
									</p>
									{(volunteer.achievements?.length ?? 0) >
										0 && <p className='label'>Tasks</p>}
									<ul className='points list-disc'>
										{volunteer.achievements?.map(
											(achievement, index) => (
												<li key={index}>
													{achievement}
												</li>
											)
										)}
									</ul>
								</div>
							);
						})}
					{createSectionTitle('TECHNICAL SKILLS')}

					<div className='section-entry dark'>
						<div className='flex flex-wrap flex-row gap-2 justify-start items-start'>
							{technicalSkills
								.filter((skill) => skill.show)
								.map((skill) => (
									<Chip
										key={skill.name}
										radius='sm'
										className='bg-blue-950'>
										{skill.name}
									</Chip>
								))}
						</div>
					</div>

					{createSectionTitle('Achievements')}
					{achievements
						.filter((achievement) => achievement.show)
						.map((achievement, index) => {
							let className = shouldStartANewPage(achievement);

							return (
								<div
									key={achievement.title + index}
									className={'section-entry' + className}>
									<h2 className='title'>
										{achievement.title}
									</h2>
									<p className='label'>
										{achievement.startDate || ''}
										{achievement.endDate
											? ` - ${achievement.endDate}`
											: ''}
									</p>
									<p className='points'>
										{...achievement.achievements ?? []}
									</p>
								</div>
							);
						})}

					{createSectionTitle('Languages')}
					<div className='flex flex-row gap-x-8'>
						{languages
							.filter((lang) => lang.show)
							.map((lang, index) => {
								let className = shouldStartANewPage(lang);
								return (
									<div
										key={lang.title + index}
										className={'section-entry' + className}>
										<h2 className='subtitle'>
											{lang.title}
										</h2>
										<p className='label'>{lang.subtitle}</p>
									</div>
								);
							})}
					</div>
				</main>
			</div>
		</HeroUIProvider>
	);
}
