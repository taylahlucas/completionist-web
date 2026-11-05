import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../assets/global.css";
import { availableGames, features } from "../utils/constants";
import WebView from "../components/WebView";

const IndexPage: React.FC<PageProps> = () => (
	<WebView
		heading="Welcome to"
		title="Completionist."
		subtitle="A simple way to track your gaming progress."
		availableGames={availableGames}
		features={features}
	/>
);

export default IndexPage;

export const Head: HeadFC = () => (
	<>
		<title>Completionist</title>
		<meta name="description" content="A simple way to track your gaming progress." />
		<meta name="theme-color" content="#17171D" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
		<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			rel="stylesheet"
		/>
	</>
);
