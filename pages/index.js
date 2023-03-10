import Head from 'next/head';
import Image from 'next/image';
import {Inter} from '@next/font/google';
import styles from '../styles/Home.module.css';
import {Player} from '@remotion/player';
import {HelloWorld} from '../remotion/HelloWorld';
import {useEffect, useRef, useState} from 'react';
import {AbsoluteFill} from 'remotion';

const inter = Inter({subsets: ['latin']});

export default function Home() {
	const [playing, setPlaying] = useState(false);
	const player = useRef();

	useEffect(() => {
		const {current} = player;
		if (!current) {
			return;
		}

		const onPause = () => {
			setPlaying(false);
		};

		const onEnded = () => {
			setPlaying(false);
		};

		const onPlay = () => {
			setPlaying(true);
		};

		current.addEventListener('pause', onPause);
		current.addEventListener('ended', onEnded);
		current.addEventListener('play', onPlay);

		return () => {
			current.removeEventListener('pause', onPause);
			current.removeEventListener('ended', onEnded);
			current.removeEventListener('play', onPlay);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Player
					ref={player}
					component={HelloWorld}
					durationInFrames={120}
					compositionWidth={1920}
					compositionHeight={1080}
					fps={30}
					inputProps={{
						titleText: 'Welcome to Remotion',
						titleColor: 'black',
					}}
				></Player>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						display: 'flex',
						cursor: 'pointer',
					}}
					onClick={(e) => {
						player.current.toggle(e);
					}}
				>
					{playing ? null : (
						<div
							className="play-button"
							style={{
								backgroundColor: 'white',
								borderRadius: '50%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<svg
								className="play-button-icon"
								style={{
									transform: `translateX(3px)`,
								}}
								viewBox="0 0 448 512"
							>
								<path
									// fill={theme.mainColor}
									d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
								></path>
							</svg>
							<br />
							<div
								style={{
									color: 'black',
									fontFamily: 'MonaSans',
									fontSize: 18,
									fontWeight: 500,
								}}
							>
								Click to play
							</div>
						</div>
					)}
				</AbsoluteFill>
				<div className={styles.description}>
					<p>
						Get started by editing&nbsp;
						<code className={styles.code}>pages/index.js</code>
					</p>
					<div>
						<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							By{' '}
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								className={styles.vercelLogo}
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
				</div>

				<div className={styles.center}>
					<Image
						className={styles.logo}
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
					<div className={styles.thirteen}>
						<Image
							src="/thirteen.svg"
							alt="13"
							width={40}
							height={31}
							priority
						/>
					</div>
				</div>

				<div className={styles.grid}>
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>
							Docs <span>-&gt;</span>
						</h2>
						<p className={inter.className}>
							Find in-depth information about Next.js features and&nbsp;API.
						</p>
					</a>

					<a
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>
							Learn <span>-&gt;</span>
						</h2>
						<p className={inter.className}>
							Learn about Next.js in an interactive course with&nbsp;quizzes!
						</p>
					</a>

					<a
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>
							Templates <span>-&gt;</span>
						</h2>
						<p className={inter.className}>
							Discover and deploy boilerplate example Next.js&nbsp;projects.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={inter.className}>
							Deploy <span>-&gt;</span>
						</h2>
						<p className={inter.className}>
							Instantly deploy your Next.js site to a shareable URL
							with&nbsp;Vercel.
						</p>
					</a>
				</div>
			</main>
		</>
	);
}
