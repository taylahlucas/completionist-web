import * as React from "react";
import "../assets/global.css";
import ImageDescription from "../components/ImageDescription";
import { gameImageMap } from "../utils/imageMap";
import { gameNames } from "../utils/constants";
import Button from "../components/Button";
import appStoreFilled from "../assets/images/app-store-filled.png";
import googlePlayFilled from "../assets/images/google-play-filled.png";
import trackGames from "../assets/images/track-games.png";
import { PageViewProps } from "../utils/types";

const progressPreview = [
	{ label: "Quests", value: 68, color: "var(--accent-light-violet)" },
	{ label: "Collectables", value: 42, color: "var(--accent-red)" },
	{ label: "Locations", value: 27, color: "var(--accent-green)" },
	{ label: "Miscellaneous", value: 15, color: "var(--accent-gold)" },
];

const Wordmark = ({ linked = false }: { linked?: boolean }) => {
	const content = (
		<>
			<span className="logo-mark" aria-hidden="true">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
					<path
						d="M5 12.5 9.2 16.8 19 7.2"
						stroke="currentColor"
						strokeWidth="2.6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			<span>
				Completionist<span className="dot">.</span>
			</span>
		</>
	);

	if (linked) {
		return (
			<a className="wordmark" href="#top">
				{content}
			</a>
		);
	}

	return <span className="wordmark">{content}</span>;
};

const StoreButtons = ({ compact = false }: { compact?: boolean }) => (
	<>
		<Button
			title="App Store"
			icon={appStoreFilled}
			variant="primary"
			compact={compact}
			disabled
			note="Coming soon"
		/>
		<Button
			title="Google Play"
			icon={googlePlayFilled}
			variant="secondary"
			compact={compact}
			disabled
			note="Coming soon"
		/>
	</>
);

const WebView = ({
	heading,
	title,
	subtitle,
	availableGames,
	features,
}: PageViewProps) => (
	<main className="page" id="top">
		<header className="nav">
			<Wordmark linked />
			<nav className="nav-links" aria-label="Page">
				<a href="#games">Games</a>
				<a href="#features">Features</a>
			</nav>
			<div className="nav-actions">
				<StoreButtons compact />
			</div>
		</header>

		<section className="hero">
			<div>
				<p className="kicker">In-game progress tracking</p>
				<p className="eyebrow">{heading}</p>
				<h1>
					{title.replace(".", "")}
					<span className="dot">.</span>
				</h1>
				<p className="lede">{subtitle}</p>
				<div className="cta-row">
					<StoreButtons />
				</div>
			</div>

			<div className="hero-stage">
				<div className="device">
					<img src={trackGames} alt="Quest list inside the Completionist app" />
				</div>
				<aside className="float-card" aria-label="Sample progress">
					<div className="float-card-head">
						<p>Progress</p>
						<span>Fallout 3</span>
					</div>
					{progressPreview.map((item) => (
						<div className="progress-row" key={item.label}>
							<div className="progress-meta">
								<span className="label">{item.label}</span>
								<span className="pct">{item.value}%</span>
							</div>
							<div className="track">
								<span className="fill" style={{ width: `${item.value}%`, background: item.color }} />
							</div>
						</div>
					))}
				</aside>
			</div>
		</section>

		<section className="section" id="games">
			<div className="section-head">
				<h2>Available Games</h2>
				<p>The worlds already supported in the app, ready to track.</p>
			</div>
			<div className="game-grid">
				{availableGames.map((game) => (
					<article className="game-tile" key={game}>
						<img src={gameImageMap[game]} alt="" />
						<span>{gameNames[game]}</span>
					</article>
				))}
			</div>
		</section>

		<section className="section" id="features">
			<div className="section-head">
				<h2>Features</h2>
				<p>The same screens you use in the app, built for finishing a game.</p>
			</div>
			<div className="features">
				{features.map((feature, index) => (
					<ImageDescription
						key={feature.id}
						id={feature.id}
						title={feature.title}
						description={feature.description}
						index={index}
					/>
				))}
			</div>
		</section>

		<section className="closing">
			<h2>
				Your game tracking journey starts here<span className="dot">.</span>
			</h2>
			<p className="lede">{subtitle}</p>
			<div className="cta-row">
				<StoreButtons />
			</div>
		</section>

		<footer className="footer">
			<Wordmark />
			<p>Track quests, collectables, locations, and more.</p>
		</footer>
	</main>
);

export default WebView;
