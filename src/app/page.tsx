'use client';

import Image from 'next/image';
import { Chip, HeroUIProvider } from '@heroui/react';
import EmailIcon from '@/assets/email.svg';
import GitHubIcon from '@/assets/github.svg';
import PinIcon from '@/assets/pin.svg';
import SmartphoneIcon from '@/assets/smartphone.svg';

export default function Home() {
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
						Software engineer with 2+ years experience in full stack
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
					<h1 className='section-title'>Work Experience</h1>
					<div className='section-entry'>
						<h2 className='job title'>Software Engineer</h2>
						<h3 className='job subtitle'>
							GraceKennedy Financial Group Limited
						</h3>
						<p className='job label'>09/2023 - Present</p>
					</div>
					<div className='section-entry'>
						<h2 className='job title'>
							Software Engineer Associate
						</h2>
						<h3 className='job subtitle'>
							GraceKennedy Financial Group Limited
						</h3>
						<p className='job label'>09/2022 - 09/2023</p>
						<p className='job label'>Achievements/Tasks</p>
						<ul className='job points list-disc'>
							<li>
								Spearheaded the backend software architecture
								design and implementation for the motor
								insurance quote and buy feature, delivering the
								MVP in less than a year.
							</li>
							<li>
								Led the initiative to transition to event-driven
								architecture, including conducting a training
								series to educate colleagues on the
								implementation process and lessons learned.
							</li>
							<li>
								Implemented 5 microservices focused on
								delivering key stakeholder requirements while
								ensuring robustness and resilience due to
								unreliable 3rd party services.
							</li>
							<li>
								Architected a data dictionary generator that
								automated documentation extraction from
								codebases, streamlining the software development
								process and saving an estimated 15 hours of
								manual documentation efforts each month.
							</li>
							<li>
								Implemented frontend user flows in Flutter to
								satisfy stakeholder requirements and the
								specifications created by UI/UX designers.
							</li>
							<li>
								Collaborated within an Agile team to gather
								detailed requirements from stakeholders, respond
								rapidly to changing specifications, and produce
								deliverables.
							</li>
							<li>
								Mentored two peers newly introduced to backend
								development in ASP.NET and the best practices
								established sessions and code reviews.
							</li>
						</ul>
					</div>
					<div className='section-entry'>
						<h2 className='job title'>Lab Services Intern</h2>
						<h3 className='job subtitle'>Innovate10X</h3>
						<p className='job label'>05/2021 - 07/2021</p>
						<p className='job label'>Achievements/Tasks</p>
						<ul className='job points list-disc'>
							<li>
								Fixed bugs and added new features for Vue and
								Laravel web app projects.
							</li>
							<li>
								Revamped the GitHub workflow by implementing
								best practices for version control, which
								resulted in a significant improvement in code
								quality and accelerated code integration
								timelines for two web app projects.
							</li>
						</ul>
					</div>
					<div className='section-entry'>
						<h2 className='job title'>
							Adjunct Computing Laboratory Assistant
						</h2>
						<h3 className='job subtitle'>
							The University of the West Indies, Mona Campus
						</h3>
						<p className='job label'>09/2020 - 12/2020</p>
						<p className='job label'>Achievements/Tasks</p>
						<ul className='job points list-disc'>
							<li>
								Marked labs for Computing first-years and
								provided constructive feedback to the students.
							</li>
							<li>
								Facilitated in-depth study sessions for
								first-year computing students, addressing
								programming concepts and assignments.
							</li>
						</ul>
					</div>
					<div className='section-entry start-of-page'>
						<h2 className='job title'>
							2020 FST App Development Team Member
						</h2>
						<h3 className='job subtitle'>
							UWI Mona Computing Society
						</h3>
						<p className='job label'>07/2020</p>
						<p className='job label'>Achievements/Tasks</p>
						<ul className='job points list-disc'>
							<li>
								Developed new features for the FST App using
								Django and Flutter.
							</li>
							<li>
								Maintainer for GitHub frontend and backend
								repositories.
							</li>
						</ul>
					</div>
					<div className='section-title'>Education</div>
					<div className='section-entry'>
						<h2 className='job title'>BSc. Software Engineering</h2>
						<h3 className='job subtitle'>
							The University of the West Indies, Mona Campus
						</h3>
						<p className='job label flex flex-row justify-between'>
							<span>09/2019 - 07/2022</span>
							{/* <span>Degree GPA: 4.03 (3.99 Overall GPA)</span> */}
						</p>
						<p className='job label'>Achievements</p>
						<ul className='job points list-disc'>
							<li>
								Maintained Dean&apos;s Honour Roll for all 3 years of study,
								ultimately graduating with first-class honours.
							</li>
						</ul>
					</div>
					<div className='section-entry'>
						<h2 className='job title'>
							Caribbean Advanced Proficiency Examination
						</h2>
						<h3 className='job subtitle'>Campion College</h3>
						<p className='job label'>2018 - 2019</p>
						<p className='job label'>Subjects</p>
						<ul className='job points list-disc'>
							<li>
								Grade 1 - UNIT 1 & 2 Computer Science, UNIT 1 &
								2 Chemistry, UNIT 1 & 2 Digital Media, UNIT 1 &
								2 Biology, Caribbean Studies
							</li>
							<li>Grade 2 - Communication Studies</li>
						</ul>
					</div>
					<div className='section-entry'>
						<h2 className='job title'>
							Caribbean Secondary Education Certificate
						</h2>
						<h3 className='job subtitle'>Campion College</h3>
						<p className='job label'>2017</p>
						<p className='job label'>Subjects</p>
						<ul className='job points list-disc'>
							<li>
								Grade 1 - Biology, Chemistry, English A, English
								B, Information Technology, Physics, Mathematics,
								Additional Mathematics, Spanish
							</li>
						</ul>
					</div>

					<div className='section-title'>Volunteer experience</div>
					<div className='section-entry'>
						<h2 className='title'>Student Application Reviewer</h2>
						<h3 className='subtitle'>JamCoders</h3>
						<p className='label'>02/2023 - Present</p>
						<ul className='points list-disc'></ul>
					</div>
					<div className='section-entry'>
						<h2 className='title'>Teaching Assistant</h2>
						<h3 className='subtitle'>JamCoders</h3>
						<p className='label'>02/2022 - 07/2022</p>
						<p className='label'>Tasks</p>
						<ul className='points list-disc'>
							<li>
								Evaluated over 90 applications, in collaboration
								with other teaching assistants, to evaluate
								competency and cultural fit for the camp, select
								the top candidates and directly influence the 50
								students selected for admission.
							</li>
							<li>
								Collaborated with other Teaching Assistants to
								mentor students and create daily lab exercises
								and weekly exams to reinforce the concepts
								taught in the lectures.
							</li>
							<li>
								Crafted personalised farewell cards for each
								student filled with anecdotes, inspiration,
								advice and well-wishes from Teaching Assistants
								and other camp staff.
							</li>
						</ul>
					</div>
					<div className='section-entry start-of-page'>
						<h2 className='title'>
							UWI Faculty of Science and Technology Guild
							Committee Computing Department Representative
						</h2>
						<p className='label'>09/2020 - 06/2021</p>
						<ul className='points list-disc'>
							<li>
								Spearheaded a comprehensive coding workshop for
								first-year students, delivering targeted
								instruction on algorithm design and debugging
								techniques, resulting in improved coding
								proficiency among 60 participants.
							</li>
							<li>
								Executed a 4-day Coder&apos;s Toolkit workshop
								series that introduced hackathons and industry
								tools such as AWS, Git, Linux and Docker to new
								computing students.
							</li>
						</ul>
					</div>
					<div className='section-entry'>
						<h2 className='title'>
							Campion College Big Brother/Sister Programme
						</h2>
						<p className='label'>09/2017 - 06/2019</p>
						<ul className='points list-disc'>
							<li>
								Mentored incoming first-form students, easing
								the transition to high school life at Campion
								College.
							</li>
						</ul>
					</div>
					<div className='section-entry'>
						<h2 className='title'>Ministry Outreach Programme</h2>
						<p className='label'>09/2017 - 06/2019</p>
						<ul className='points list-disc'>
							<li>
								Visited the Golden Age Home weekly to spend time
								with the residents.
							</li>
							<li>
								Promoted Easter and Christmas drives and
								delivered the donated supplies to the residents
								of the Golden Age Home.
							</li>
						</ul>
					</div>
					<div className='section-entry'>
						<h2 className='title'>Teaching Karate</h2>
						<p className='label'>2008</p>
						<ul className='points list-disc'>
							<li>
								Empowered other children in my community to
								defend themselves using karate.
							</li>
						</ul>
					</div>
					<div className='section-title'>TECHNICAL SKILLS</div>
					<div className='section-entry dark'>
						<div className='flex flex-wrap flex-row gap-2 justify-start items-start'>
							<Chip radius='sm' className='bg-blue-950'>
								Azure Dev Ops
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Python
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Django
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Flutter
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Vue
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								PostgreSQL
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Java
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Git
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Digital Illustration
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Figma
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Software Testing
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								React.js
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Flask
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								MySQL
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								MongoDB
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								Kotlin
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								QML
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								C#
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								ASP.NET
							</Chip>
							<Chip radius='sm' className='bg-blue-950'>
								C
							</Chip>
						</div>
					</div>
					<div className='section-title'>Achievements</div>
					<div className='section-entry'>
						<h2 className='title'>Regional Placements - CSEC</h2>
						<p className='label'>2017</p>
						<p className='points'>
							8th in the Caribbean for Biology, 5th in Jamaica for
							Biology
						</p>
					</div>
					<div className='section-entry'>
						<h2 className='title'>Regional Placements - CAPE</h2>
						<p className='label'>2018 - 2019</p>
						<p className='points'>
							1st for Digital Media Unit 1, 4th for Digital Media
							Unit 2
						</p>
					</div>
					<div className='section-entry'>
						<h2 className='title'>Royal Academy of Dance</h2>
						<p className='points'>
							Grades 1 - 8 complete. At the vocational level:
							Intermediate complete.
						</p>
					</div>
					<div className='section-entry'>
						<h2 className='title'>
							Senior Brown Belt in Ningen Karate
						</h2>
					</div>
					<div className='section-title'>Languages</div>
					<div className='flex flex-row gap-x-8'>
						<div className='section-entry'>
							<h2 className='subtitle'>English</h2>
							<p className='label'>Native proficiency</p>
						</div>
						<div className='section-entry'>
							<h2 className='subtitle'>Spanish</h2>
							<p className='label'>Limited working proficiency</p>
						</div>
					</div>
				</main>
			</div>
		</HeroUIProvider>
	);
}
