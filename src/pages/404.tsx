import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import "../assets/global.css";

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main className="not-found">
			<div className="not-found-card">
				<span className="wordmark" style={{ justifyContent: "center" }}>
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
				</span>
				<h1>Page not found</h1>
				<p>That page isn’t part of the journey.</p>
				<Link className="text-link" to="/">
					Back to Completionist
				</Link>
			</div>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => (
	<>
		<title>Page not found · Completionist</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
		<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
			rel="stylesheet"
		/>
	</>
);
