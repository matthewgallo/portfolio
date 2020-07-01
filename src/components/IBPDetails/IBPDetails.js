import React, { useEffect } from 'react';
import { useSpring } from 'react-spring';
import DetailHeader from '../DetailPage/DetailHeader';
import IBPheaderImg from '../../assets/images/ibp_details_header.svg';
import SectionMaxWidth from '../SectionMaxWidth/SectionMaxWidth';
import Text from '../Text/Text';
import Tag from '../Tag/Tag';
import GradientLink from '../GradientLink/GradientLink';
// import ibpVideo from '../../assets/images/blockchain/ibp_screenshots.mp4';
// import ToggleIcon from './ToggleIcon';
import reactlogo from '../../assets/images/blockchain/react.svg';
import reduxlogo from '../../assets/images/blockchain/redux.svg';
import sasslogo from '../../assets/images/blockchain/sass.svg';
import hyperledgerlogo from '../../assets/images/blockchain/hyperledger_icon.svg';
import FooterLogoLink from '../FooterLogoLink/FooterLogoLink';

const BlockchainPage = () => {
	// const videoRef = useRef();
	// const [paused, setPaused] = useState(false);
	// const [hoveringVideoIcon, setHoveringVideoIcon] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// const toggleVideo = () => {
	// 	if (videoRef.current) {
	// 		if (paused) {
	// 			setPaused(false);
	// 			videoRef.current.play();
	// 			videoRef.current.muted = false;
	// 		} else {
	// 			setPaused(true);
	// 			videoRef.current.pause();
	// 			videoRef.current.muted = true;
	// 		}
	// 	}
	// };

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
	const tagAnimation2 = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'translateX(0)',
				delay: 250,
				config: { duration: 400 },
			});
		},
		from: {
			opacity: 0,
			transform: 'translateX(-2rem)',
		},
	});
	const tagAnimation3 = useSpring({
		to: async next => {
			await next({
				opacity: 1,
				transform: 'translateX(0)',
				delay: 300,
				config: { duration: 400 },
			});
		},
		from: {
			opacity: 0,
			transform: 'translateX(-2rem)',
		},
	});

	return (
		<>
			<DetailHeader
				title="IBM Blockchain Platform"
				subtitle={
					<>
						#1 ranked Blockchain platform by{' '}
						<GradientLink external
							url="https://www.juniperresearch.com/press/press-releases/ibm-ranked-no-1-blockchain-technology-leader">
							Juniper Research
						</GradientLink>{' '}
						and{' '}
						<GradientLink external
							url="https://www.ibm.com/account/reg/us-en/signup?formid=urx-37667">
							HFS Research
						</GradientLink>
					</>
				}
				tags={
					<>
						<Tag style={tagAnimation}>
							<span
								style={{
									marginRight: '0.5rem',
								}}
								role="img"
								aria-label="Crane emoji for Front end development"
							>
								🏗️
							</span>{' '}
							Front end development*
						</Tag>
						<Tag style={tagAnimation2}>
							<span
								style={{
									marginRight: '0.5rem',
								}}
								role="img"
								aria-label="Magnifying glass emoji for user research"
							>
								🔍
							</span>{' '}
							User research
						</Tag>
						<Tag style={tagAnimation3}>
							<span
								style={{
									marginRight: '0.5rem',
								}}
								role="img"
								aria-label="Tools emoji for user experience design"
							>
								🛠️
							</span>{' '}
							UX design
						</Tag>
					</>
				}
				headerImage={{
					src: IBPheaderImg,
					alt: 'IBM Blockchain Platform screenshot',
				}}
			/>
			<div className="project--call-out">
				<SectionMaxWidth>
					<h4 className="project-call-out-header">
						The <strong>next generation</strong> of blockchain for business. Proven, flexible and built to run on <strong>any</strong> cloud. Deploy the leading
						Hyperledger Fabric platform in the environment that’s right for <strong>your</strong> enterprise.
					</h4>
					<div className="project--overview">
						<div className="project-overview-item">
							<h5>Objective</h5>
							<Text>Help businesses operate and scale more seamlessly through the use of blockchain</Text>
						</div>
						<div className="project-overview-item">
							<h5>Tools</h5>
							<Text>
								<span className="tool-item">
									<img
										src={reactlogo}
										style={{
											width: '1.25rem',
											marginRight: '0.5rem',
										}}
										alt="React logo"
										aria-label="React logo"
									/>
									React
								</span>
								<span className="tool-item">
									<span style={{ marginRight: '0.5rem' }}
										role="img"
										aria-label="Crane emoji for Front end development">
										🎣
									</span>
									React hooks
								</span>
								<span className="tool-item">
									<img src={reduxlogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Redux logo"
										aria-label="Redux logo" />
									Redux
								</span>
								<span className="tool-item">
									<img src={sasslogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Sass logo"
										aria-label="Sass logo" />
									Sass
								</span>
								<span className="tool-item">
									<span style={{ marginRight: '0.5rem' }}
										role="img"
										aria-label="Artist palette emoji for Carbon Design system">
										🎨
									</span>
									<GradientLink paddingBottom
										block
										external
										url="https://www.carbondesignsystem.com">
										Carbon Design System
									</GradientLink>
								</span>
								<span className="tool-item">
									<img src={hyperledgerlogo}
										style={{ width: '1.25rem', marginRight: '0.5rem' }}
										alt="Hyperledger logo"
										aria-label="Hyperledger logo" />
									<GradientLink paddingBottom
										flex
										external
										url="https://www.hyperledger.org/use/fabric"
										className="flex--link">
										Hyperledger Fabric
									</GradientLink>
								</span>
							</Text>
						</div>
						<div className="project-overview-item">
							<h5>Duration</h5>
							<Text>2017 - current</Text>
						</div>
					</div>
				</SectionMaxWidth>
			</div>
			<div className="project--details-section">
				<SectionMaxWidth>
					<div className="project--section">
						<h5>Target users</h5>
						<Text medium
							margin>
							Our primary target users included enterprise clients from industries such as trade finance, global trade, food safety, identity management/digital
							identity, and many more.
						</Text>
						<Text medium>
							Users can build solutions on their own through the use of the IBM Blockchain Platform, or they can choose to work with the IBM Cloud Garage who
							will help users to build a fully functioning prototype for their business use case, from design research and ideation through to technical
							implementation.
						</Text>
					</div>
					<div className="project--section">
						<h5>Objective</h5>
						<Text medium
							margin>
							“IBM Blockchain is more than technology. It’s a movement to help you redefine your most important business relationships through trust,
							transparency and newfound collaboration.”
						</Text>
						<Text medium
							margin>
							Traditionally, enterprise businesses have struggled with automating certain parts of their work and in most cases to the detriment of their users.
							The IBM Blockchain Platform is a technology which aims to solve that painpoint through a secured, permissioned, immutable transaction ledger.
						</Text>
						<Text medium>
							The newest version of the{' '}
							<GradientLink external
								url="https://cloud.ibm.com/catalog/services/blockchain-platform">
								IBM Blockchain Platform
							</GradientLink>{' '}
							aims to meet you where you are, literally, allowing you to deploy the technology on the cloud of your choice. The only requirement is that you
							have a kubernetes cluster to host your components. You can even use a Red Hat OpenShift cluster to deploy your blockchain platform and as the
							leading Hyperledger Fabric platform this is one of the key reasons users choose the IBM Blockchain Platform to build their networks together,
							collaboration is easy and it just works.
						</Text>
					</div>
					<div className="project--section">
						<h5>Process</h5>
						<Text medium
							margin>
							My primary role on this project was contributing to and leading the front end development of the IBM Blockchain Platform. I was an integral part
							of our team’s decision to move over to React, in replace of the existing Angular app. This started by presenting all of the benefits we would have
							in switching, the much improved developer experience and defining a set of best practices that our team would follow regarding React development,
							standardizing application file/component structure, and guidelines as to how we would write our sass/css. As our application grew, building
							reusable components allowed us to work much faster and made it easier for developers on the team to focus on business level logic and not worry
							about building a brand new side panel for example. Not to mention the design consistency that precented further issues down the road.
						</Text>
						<Text medium
							margin>
							As an IBM Cloud service, our product is required to use the{' '}
							<GradientLink external
								url="https://www.carbondesignsystem.com">
								Carbon design system
							</GradientLink>
							, IBM’s open source design system for all IBM digital experiences. I was responsible for ensuring that our team adhered to and properly
							implemented Carbon&apos;s{' '}
							<GradientLink external
								url="http://github.com/carbon-design-system/carbon/tree/master/packages/react">
								react components
							</GradientLink>{' '}
							and also led our migration to the Carbon 10 library version, which featured IBM’s new{' '}
							<GradientLink external
								url="http://ibm.com/design/language">
								design language guidelines
							</GradientLink>
							.
						</Text>
						<Text medium
							margin>
							I have been able to also help interatively improve our user experience by helping run user research sessions and speaking with users at various
							events such as the IBM THINK conference, meetup events, IBM Blockchain Platform board of advisor meetings, and speaking directly with users to
							further understand how we can improve their user experience.
						</Text>
						<Text medium>
							Another key experience that I delivered was an updated purchasing experience within IBM Cloud for the IBM Blockchain Platform. This included
							building a completely new micro-service within IBM Cloud for which blockchain customers use to purchase our product using the newly released{' '}
							<GradientLink external
								url="https://www.ibm.com/cloud/blog/announcements/enhanced-user-experience-patterns-in-ibm-cloud">
								user experience pattern library
							</GradientLink>{' '}
							for IBM Cloud. One of the painpoints this new experience solved was being able to create your kubernetes cluster while simultaneously creating
							your blockchain service. Through user research and NPS feedback, this was a point in our experience that caused confusion and was difficult for
							user’s to piece together the steps they needed to take. Finally, with this new service creation experience, there is no more context switching and
							you can do everything you need to do to create you blockchain service and the required prerequisites all from one place. My responsibilities on
							this project included building the React front end (using react hooks{' '}
							<span role="img"
								aria-label="Hook emoji for react hooks">
								🎣
							</span>
							) as well as the Node backend.
						</Text>
					</div>
					{/* <div className="video--wrapper">
						<video ref={videoRef}
							playsInline
							loop
							autoPlay
							muted
							className="mg--video">
							<source src={ibpVideo}
								type="video/mp4" />
						</video>
						<button
							type="button"
							onMouseEnter={() => setHoveringVideoIcon(true)}
							onMouseLeave={() => setHoveringVideoIcon(false)}
							aria-label="play pause toggle"
							className="video--controls"
							onClick={toggleVideo}
						>
							<ToggleIcon hovering={hoveringVideoIcon}
								paused={paused} />
						</button>
					</div> */}
				</SectionMaxWidth>
			</div>
			<FooterLogoLink backgroundColor="gray" />
		</>
	);
};

export default BlockchainPage;
