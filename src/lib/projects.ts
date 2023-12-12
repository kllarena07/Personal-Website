import SumSum from '$lib/thumbnails/sumsum.avif';
import ADHDMag from '$lib/thumbnails/adhd.jpg';
import CriCri from '$lib/thumbnails/cricri.svg';
import NeuroScanAI from '$lib/thumbnails/neuroscanai.jpg';
import SKPB from '$lib/thumbnails/skpb.png';
import MiDevfest from '$lib/thumbnails/midevfest.png';

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
import Fly from '$lib/tech/flyio.svg';
import Docker from '$lib/tech/docker.svg';
import Mailgun from '$lib/tech/mailgun.svg';

export const Projects = [
	{
		name: 'Michigan DevFest 2023 Website',
		link: 'https://midevfest.com/',
		desc: 'The official website for the 2023 Michigan DevFest',
		thumbnail: MiDevfest,
		tech: [Tailwind, React, Javascript]
	},
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
		tech: [Svelte, Vercel, Typescript, Pocketbase, CSS, Figma]
	},
	{
		name: 'El Cri Cri Website',
		link: 'https://elcricri.com/',
		desc: 'Personal website for the Detroit musician, El Cri Cri',
		thumbnail: CriCri,
		tech: [Svelte, Vercel, Javascript, CSS, Figma]
	},
	{
		name: 'NeuroScan AI',
		link: 'https://github.com/kllarena07/Brain-Tumor-Detector',
		desc: 'Web app that detects brain tumors in an inputted MRI scan',
		thumbnail: NeuroScanAI,
		tech: [Svelte, Vercel, Javascript, Python, Figma, CSS]
	},
	{
		name: 'SKPB Techstack Demo',
		link: 'https://skpb-demo.fly.dev/',
		desc: 'An Instagram clone webapp that shows off capabilities of the SvelteKit and Pocketbase (SKPB) techstack',
		thumbnail: SKPB,
		tech: [Svelte, Typescript, Fly, Docker, CSS, Pocketbase, Mailgun]
	}
];
