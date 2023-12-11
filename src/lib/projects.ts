import SumSum from '$lib/thumbnails/sumsum.avif';
import ADHDMag from '$lib/thumbnails/adhd.jpg';
import CriCri from '$lib/thumbnails/cricri.svg';

import React from '$lib/tech/react.svg';
import Tailwind from '$lib/tech/tailwind.svg';
import Javascript from '$lib/tech/javascript.svg';
import Svelte from '$lib/tech/svelte.svg';
import Vercel from '$lib/tech/vercel.svg';
import Typescript from '$lib/tech/typescript.svg';
import Pocketbase from '$lib/tech/pocketbase.svg';

export const Projects = [
	{
		name: 'Summarization Nation',
		link: 'https://www.producthunt.com/products/summarization-nation',
		desc: 'A web app that generates recursive summaries from A/V files with adjustable user settings',
		thumbnail: SumSum,
		tech: [Tailwind, React, Javascript]
	},
	{
		name: 'ADHD Magazine',
		link: 'https://adhd-magazine.vercel.app/',
		desc: 'A blog website for the Detroit magazine, ADHD Magazine',
		thumbnail: ADHDMag,
		tech: [Svelte, Vercel, Typescript, Pocketbase]
	},
	{
		name: 'El Cri Cri Website',
		link: 'https://elcricri.com/',
		desc: 'Personal website for the Detroit musician, El Cri Cri',
		thumbnail: CriCri,
		tech: [Svelte, Vercel, Javascript]
	}
];
