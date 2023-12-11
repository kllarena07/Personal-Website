import SumSum from '$lib/thumbnails/sumsum.avif';
import ADHDMag from '$lib/thumbnails/adhd.jpg';
import CriCri from '$lib/thumbnails/cricri.svg';
import NeuroScanAI from '$lib/thumbnails/neuroscanai.jpg';

import React from '$lib/tech/react.svg';
import Tailwind from '$lib/tech/tailwind.svg';
import Javascript from '$lib/tech/javascript.svg';
import Svelte from '$lib/tech/svelte.svg';
import Vercel from '$lib/tech/vercel.svg';
import Typescript from '$lib/tech/typescript.svg';
import Pocketbase from '$lib/tech/pocketbase.svg';
import CSS from '$lib/tech/css.svg';
import Python from '$lib/tech/python.svg';
import Figma from '$lib/tech/figma.svg';

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
		tech: [Svelte, Vercel, Typescript, Pocketbase, CSS]
	},
	{
		name: 'El Cri Cri Website',
		link: 'https://elcricri.com/',
		desc: 'Personal website for the Detroit musician, El Cri Cri',
		thumbnail: CriCri,
		tech: [Svelte, Vercel, Javascript, CSS]
	},
	{
		name: 'NeuroScan AI',
		link: 'https://github.com/kllarena07/Brain-Tumor-Detector',
		desc: 'Web app that detects brain tumors in an inputted MRI scan',
		thumbnail: NeuroScanAI,
		tech: [Svelte, Vercel, Javascript, Python, Figma]
	}
];
