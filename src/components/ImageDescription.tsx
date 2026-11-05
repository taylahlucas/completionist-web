import * as React from "react";
import { imageMap, imageMapKey } from "../utils/imageMap";

interface ImageDescriptionProps {
	id: imageMapKey;
	title: string;
	description: string;
	index: number;
}

const accents = ["violet", "gold", "green"] as const;

const ImageDescription = ({ id, title, description, index }: ImageDescriptionProps) => (
	<article className={`feature feature--${accents[index % accents.length]}`}>
		<div className="feature-copy">
			<span className="feature-index">0{index + 1}</span>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
		<div className="feature-frame">
			<img src={imageMap[id]} alt={title} />
		</div>
	</article>
);

export default ImageDescription;
