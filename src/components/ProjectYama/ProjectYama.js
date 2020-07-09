import React, { useContext, useState, useRef, useEffect } from 'react';
import { useSpring } from 'react-spring';
import DetailHeader from '../DetailPage/DetailHeader';
import CalloutGroup from '../DetailPage/DetailCalloutGroup';
import CalloutGroupItem from '../DetailPage/CalloutGroupItem';
import DetailCallout from '../DetailPage/DetailCallout';
import SplitContent from '../DetailPage/SplitContent';
import ContentSection from '../DetailPage/ContentSection';
import ContentSectionItem from '../DetailPage/ContentSectionItem';
import SectionMaxWidth from '../SectionMaxWidth/SectionMaxWidth';
import Tag from '../Tag/Tag';
import { Styled } from './ProjectYama.styles';
import { Styled as SplitContentStyles } from '../DetailPage/SplitContent.styles';
import Text from '../Text/Text';
import Bold from '../Text/Bold';
import ScreenshotItem from '../ScreenshotItem/ScreenshotItem';
import { ThemeContext } from '../ThemeContext/ThemeContext';

import yamaHeaderImg from '../../assets/images/yama/yama_detail.svg';
import devices from '../../assets/images/yama/devices.jpg';
import ghAPI from '../../assets/images/yama/yama--gh-api.png';
import slack from '../../assets/images/yama/yama--slack.jpg';
import box from '../../assets/images/yama/yama--box.jpg';
import checkpoint from '../../assets/images/yama/yama--Checkpointibm.jpg';
import ghe from '../../assets/images/yama/yama--GHEibm.jpg';
import userflow from '../../assets/images/yama/yama--userflow.png';
import userflow2 from '../../assets/images/yama/yama--userflow2.jpg';
import wireframes from '../../assets/images/yama/yama--wireframes.png';
import workFeed from '../../assets/images/yama/yama--work-feed.jpg';
import upload from '../../assets/images/yama/yama--upload.jpg';
import upload2 from '../../assets/images/yama/yama--upload2.jpg';
import collaboratorsGif from '../../assets/images/yama/yama--collaborators.gif';
import portfolioLib from '../../assets/images/yama/yama--portfolio-lib.png';
import profile from '../../assets/images/yama/yama--profile.jpg';
import profileOverlay from '../../assets/images/yama/yama--profile-overlay.jpg';
import profileEmpty from '../../assets/images/yama/yama--profile-empty.jpg';

const pw = 'yama';
const ProjectYama = () => {
	const { colorMode } = useContext(ThemeContext);
	const inputRef = useRef();

	const [showPageContent, setShowPageContent] = useState(false);
	const [value, setValue] = useState('');

	useEffect(() => {
		if (inputRef && inputRef.current) inputRef.current.focus();
	}, []);

	const tagAnimation = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'translateX(0)',
				delay: 200,
				config: { duration: 400 },
			});
		},
		from: {
			opacity: 0,
			transform: 'translateX(-2rem)',
		},
	});

	const handleChange = event => {
		setValue(event.target.value);
	};

	const showYama = e => {
		e.preventDefault();
		if (value === pw) {
			setShowPageContent(true);
		}
	};
	return (
		<>
			{showPageContent ? (
				<div>
					<DetailHeader
						title="Project Yama for IBM"
						subtitle={
							<>
								<span role="img"
									aria-label="Television emoji">
									📺
								</span>{' '}
								Get instant feedback on your work
							</>
						}
						tags={
							<>
								<Tag style={tagAnimation}>
									<span style={{ marginRight: '0.5rem' }}
										role="img"
										aria-label="Crane emoji for Front end development">
										🏗️
									</span>{' '}
									Front end development*
								</Tag>
							</>
						}
						headerImage={{
							src: yamaHeaderImg,
							alt: 'Project Yama app screenshot',
						}}
					/>
					<DetailCallout
						header={
							<>
								IBM designers need a place to document and curate their process and outcomes, to be used for career advancement, mentorship discovery, and
								inspiration
							</>
						}
					>
						<CalloutGroup header="Objective">
							<CalloutGroupItem text="Design and develop a platform that allows IBM designers to share their design work internally." />
						</CalloutGroup>
						<CalloutGroup header="Team">
							<CalloutGroupItem text="Evan Maeda (Design/Strategy/Research)" />
							<CalloutGroupItem text="Hayley Hughes/James Rauhut (Advisory)" />
						</CalloutGroup>
						<CalloutGroup header="Duration">
							<CalloutGroupItem text="4 months" />
						</CalloutGroup>
					</DetailCallout>
					<ContentSection>
						<SectionMaxWidth>
							{/* Process */}
							<h4>Process</h4>
							<SplitContent>
								<SplitContentStyles.SplitContentItem>
									<h5>Define business need</h5>
									<p>
										The IBM Design Language team needs visibility into its adoption in design output of 1200 designers across 1,000 products sitting in 30+
										locations globally.
									</p>
								</SplitContentStyles.SplitContentItem>
								<Styled.SplitContentImg src={devices}
									alt="Products samples across devices" />
							</SplitContent>
							<SplitContent>
								<SplitContentStyles.SplitContentItem>
									<h5>Challenges</h5>
									<ol>
										<li>Limited resources: one designer and one developer</li>
										<li>Create a tool that complements current existing tools</li>
										<li>Introduces unique value that forms habit for longevity</li>
									</ol>
								</SplitContentStyles.SplitContentItem>
								<SplitContentStyles.SplitContentItem>
									<h5>What is the user problem?</h5>
									<p>
										IBM designers need a place to document and curate their process and outcomes, to be used for <Bold>career advancement</Bold>,{' '}
										<Bold>mentorship discovery</Bold>, and <Bold>inspiration</Bold>
									</p>
								</SplitContentStyles.SplitContentItem>
							</SplitContent>
							<ContentSectionItem header="Challenge 1: Limited resources"
								largeHeader>
								<Text medium
									margin>
									After development discussions, it was clear that we would need many resources that were not in our budget. File storage, individual profiles,
									and commenting called for a custom database, which we could not get approval for.
								</Text>
							</ContentSectionItem>
							<SplitContent>
								<SplitContentStyles.SplitContentItem>
									<h5>Solution</h5>
									<p>Build the platform using GitHub API.</p>
									<ul>
										<li>Allows confidential work to be shared, using GHE.</li>
										<li>Ability to utilize GHE user accounts as profiles</li>
										<li>Leverages issues as post submissions, commenting on a post/issue, image uploading.</li>
									</ul>
								</SplitContentStyles.SplitContentItem>
								<Styled.SplitContentImg src={ghAPI}
									alt="GitHub API" />
							</SplitContent>

							<ContentSectionItem header="Challenge 2: Tool differentiation"
								largeHeader>
								<Text medium
									margin>
									The thought of introducing another tool to the plethora of programs IBMers are using in their day-to-day was an important aspect to research
									before design/development started. I concentrated on the main tools used for sharing working, and conducted research on where we could create
									differentiation.
								</Text>
							</ContentSectionItem>
							<SplitContent>
								<Styled.SplitContentImg src={slack}
									alt="Slack"
									maxWidth />
								<Styled.SplitContentImg src={box}
									alt="Box"
									maxWidth />
							</SplitContent>
							<SplitContent>
								<SplitContentStyles.SplitContentItem maxWidth>
									<h5>Slack</h5>
									<p>
										The tool connects remote and co-located teams, and now serves as the place for communication of over 100,000 IBMers. Although easy to chat
										on, design work sharing and critiquing in virtual impossible in the fleeting nature of slack channel discussions.
									</p>
									<p>
										<Bold>Our tool should facilitate design critique that’s focused and documented.</Bold>
									</p>
								</SplitContentStyles.SplitContentItem>
								<SplitContentStyles.SplitContentItem maxWidth>
									<h5>Box</h5>
									<p>
										The tool is used by designers, researchers, and offering managers to sort assets, resources and deliverables. Although the tool serves as a
										great place to house your sketch files and presentation decks, its interface isnt set up for effectively viewing visual work, let alone
										contextual support.
									</p>
									<p>
										<Bold>Our tool should focus on visual discovery at speed, without the need to house assets in all formats.</Bold>
									</p>
								</SplitContentStyles.SplitContentItem>
							</SplitContent>

							<SplitContent>
								<Styled.SplitContentImg src={ghe}
									alt="Github enterprise"
									maxWidth />
								<Styled.SplitContentImg src={checkpoint}
									alt="Checkpoint"
									maxWidth />
							</SplitContent>
							<SplitContent>
								<SplitContentStyles.SplitContentItem maxWidth>
									<h5>Github Enterprise</h5>
									<p>
										The tool is used by teams, where designers and developers work together to build production-level code. In GitHub Enterprise, teams gauge in
										important product design critiques and is ultimately shaping the product outcomes. However, This discussions and design shares are done at a
										team level only.
									</p>
									<p>
										<Bold>Our tool should opens up design solutions for the community to learn from and leverage.</Bold>
									</p>
								</SplitContentStyles.SplitContentItem>
								<SplitContentStyles.SplitContentItem maxWidth>
									<h5>Box</h5>
									<p>
										The internal tool is used by designers and managers to assess product team goals and work output. The goals set in Checkpoint are ultimately
										measuring the designer&apos;s success in driving business outcomes, and can lead to career advancement. However, these goals are done in a
										text-based format, opposite of the visual outcomes designers come to.
									</p>
									<p>
										<Bold>Our tool should support you justifying goals delivered on, and shows you walked the walk.</Bold>
									</p>
								</SplitContentStyles.SplitContentItem>
							</SplitContent>

							<ContentSectionItem header="Challenge 3: unique habit forming value"
								largeHeader>
								<Text medium
									margin>
									After understanding how we could differentiate our tool from the others, we developed unique value propositions for the platform that would
									scope us during development, and build habit-forming experience that our designers could get behind.
								</Text>
								<Text medium
									margin>
									Value proposition 1: <Bold>Findability & Discovery</Bold>
								</Text>
								<Text medium
									margin>
									Value proposition 2: <Bold>Critique & Discussion</Bold>
								</Text>
								<Text medium
									margin>
									Value proposition 3: <Bold>Documentation & Curation</Bold>
								</Text>
							</ContentSectionItem>

							<ContentSectionItem header="Developing User flows"
								largeHeader>
								<SplitContent>
									<Styled.SplitContentImg src={userflow}
										alt="Userflow"
										maxWidth />
									<Styled.SplitContentImg src={userflow2}
										alt="Userflow"
										maxWidth />
								</SplitContent>
								<Text medium
									margin>
									In order to understand the best course of action for a designer moving through our platform, we developed a user flow for a &quot;Getting
									Started&quot; experience, and create wireframes for those pages. We then held in person feedback sessions allowing users to provide feedback
									on the frames and flow.
								</Text>
							</ContentSectionItem>

							<ContentSectionItem header="Wireframes"
								largeHeader>
								<ScreenshotItem title="App wireframes"
									src={wireframes} />
								<ScreenshotItem title="Work gallery experience"
									src={workFeed} />
								<Text>
									Our goal for the Work Gallery experience was to create opportunities for designers coming to the platform to engage in the way they wanted to
									as quickly as possible. Those scenarios included:
									<ul>
										<li>A designer looking for inspiration on a specific design element, component, or pattern they are currently working on.</li>
										<li>
											<Bold>Solution</Bold>: Increase tile size for easier investigation, more detailed hover information, and prominent search engine.
										</li>
										<li>A designer looking to engage in discussion by providing feedback to another designer&apos;s work</li>
										<li>
											<Bold>Solution</Bold>: Card corner icon soliciting feedback, helps distinguish the projects that are actively looking for interaction.
										</li>
									</ul>
								</Text>
								<ScreenshotItem title="Upload experience"
									src={upload} />
							</ContentSectionItem>
							<ContentSectionItem>
								<SplitContent>
									<SplitContentStyles.SplitContentItem maxWidth>
										<Text margin>
											My goal for the Upload Experience was to design a process that was quick enough that didn&apos;t consume too much time that interrupted
											their workflow, but also stressed the necessity of contextual support to generate effective discussion later on.
										</Text>
										<Text margin>Hightlights:</Text>
										<Text margin>
											<Bold>Collaborators</Bold> -- being able to tag others in an upload, showcasing the true nture of collaborative work.
										</Text>
										<Text margin>
											<Bold>WIP, SHIP, FLIP</Bold> -- designating different work types, allowing the designs to be seen for where they are in the process.
										</Text>
									</SplitContentStyles.SplitContentItem>
									<Styled.SplitContentImg src={collaboratorsGif}
										alt="Collaborators gif"
										maxWidth />
								</SplitContent>
								<ScreenshotItem title="Upload experience"
									src={upload2} />
							</ContentSectionItem>

							<ContentSectionItem header="Portfolio experience">
								<SplitContent>
									<SplitContentStyles.SplitContentItem maxWidth>
										<p>
											Our goal of the Portfolio experience was to design a personal space for the designer, while creating an environment that showcases their
											work and invites others to dive deeper into their projects.
										</p>
										<p>
											Metaphorical, we wanted the Portfolio experience to feel like your bookcase at home - it had to feel like a living, constantly updated
											mess of cleanliness.
										</p>
									</SplitContentStyles.SplitContentItem>
									<Styled.SplitContentImg src={portfolioLib}
										alt="Portfolio library"
										maxWidth />
								</SplitContent>
							</ContentSectionItem>
							<ContentSectionItem>
								<ScreenshotItem title="Profile"
									src={profile} />
								<Text margin>
									The bookcase feels were achieved through containing the designer&apos;s work uploads and creating uniformity to each card, as if they were
									cubby shelfs that contain your work and experiences.
								</Text>
								<ScreenshotItem title="Profile"
									src={profileOverlay} />
								<Text margin>
									The card design went through multiple iterations, but we kept it high level, just enough context to know if you should dive into the project.
									We also wanted to create visual emphasis on the card your considering, but having the hover state increase the white border.
								</Text>
								<ScreenshotItem title="Profile, empty state"
									src={profileEmpty} />
								<Text margin>
									Lastly, we wanted to share the empty state of the workspace in the portfolio. An illustration was created that lent itself to the call to
									action to get the designer to stop what they were doing to take the time to document their process.
								</Text>
							</ContentSectionItem>
						</SectionMaxWidth>
					</ContentSection>
				</div>
			) : (
				<Styled.PasswordOverlay colorMode={colorMode}>
					<div>
						<Styled.PasswordLockIcon colorMode={colorMode}
							viewBox="0 0 64 64">
							<path d="M40.2,29v-4c0-4.5-3.7-8.2-8.2-8.2s-8.2,3.7-8.2,8.2v4H21v15h22V29H40.2z M27.2,25 c0-2.6,2.1-4.8,4.8-4.8s4.8,2.1,4.8,4.8v4h-9.5V25z" />
						</Styled.PasswordLockIcon>
						<Styled.PasswordHeader>Project Yama</Styled.PasswordHeader>
						<Styled.PasswordInputContainer>
							<form onSubmit={event => showYama(event)}>
								<Styled.PasswordInput
									colorMode={colorMode}
									value={value}
									onChange={event => handleChange(event)}
									placeholder="Password"
									type="password"
									ref={inputRef}
								/>
								{value.length > 0 ? (
									<Styled.RevealButton colorMode={colorMode}
										type="submit">
										<svg>
											<path d="M15.293 10.707L19.586 15H8v2h11.586l-4.293 4.293 1.414 1.414L23.414 16l-6.707-6.707z" />
										</svg>
									</Styled.RevealButton>
								) : null}
							</form>
						</Styled.PasswordInputContainer>
					</div>
				</Styled.PasswordOverlay>
			)}
		</>
	);
};

export default ProjectYama;
