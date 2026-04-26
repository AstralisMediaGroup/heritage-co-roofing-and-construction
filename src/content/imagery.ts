// Heritage Co. imagery manifest (Plan 007.0)
//
// Every URL in this file is REAL — surfaced via WebFetch from manufacturer or
// Unsplash search pages on 2026-04-26. No placeholder URLs, no fake CDN links.
// Slots without a verified URL are explicitly null + a `placeholderFact` —
// consumers render <HeritagePlaceholder> for those.
//
// Per the Plan 007 spec: hotlinked, not downloaded. Claude Code's WebFetch
// returns text/HTML; binary downloads are not how this works.
//
// Unsplash photos are licensed under the Unsplash License (free for commercial
// use, attribution recommended). Manufacturer photos linked under contractor-
// site convention with attribution shown in the footer.

export interface ImageRef {
	url: string | null;
	alt: string;
	source: 'unsplash' | 'manufacturer' | 'heritage' | null;
	photographer?: string;
	manufacturer?: string;
	productName?: string;
	placeholderFact?: string;
}

// Unsplash CDN params for predictable sizing
const u = (id: string, w = 1280) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const uPlus = (id: string, w = 1280) => `https://plus.unsplash.com/premium_photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const imagery = {
	// ── Hero candidates (Plan 007.8 will surface these in a Notion page; no
	//    automatic application to the homepage hero per locked constraint).
	heroCandidates: {
		residentialRoofA: {
			url: u('1519115226133-94046df0e272', 1600),
			alt: 'Green wooden house roof under blue sky',
			source: 'unsplash',
			photographer: 'Andrej Lišakov',
		} satisfies ImageRef,
		residentialRoofB: {
			url: u('1583345237708-add35a664d77', 1600),
			alt: 'Brown and white concrete house with shingle roof',
			source: 'unsplash',
			photographer: 'Giorgio Trovato',
		} satisfies ImageRef,
		residentialRoofC: {
			url: u('1755114203680-d39d95efa82c', 1600),
			alt: 'Aerial view of suburban house with grey shingle roof',
			source: 'unsplash',
			photographer: 'Paragon Exterior',
		} satisfies ImageRef,
	},

	// ── MaterialTabs imagery
	asphalt: {
		hero: {
			url: u('1755114203680-d39d95efa82c', 1280),
			alt: 'Aerial view of a residential asphalt shingle roof',
			source: 'unsplash',
			photographer: 'Paragon Exterior',
		} satisfies ImageRef,
		closeup: {
			url: u('1767281076251-de2ab49a1294', 1280),
			alt: 'Close-up of asphalt shingles with hexagonal pattern',
			source: 'unsplash',
			photographer: 'Bernd Dittrich',
		} satisfies ImageRef,
		manufacturerCred: {
			url: null,
			alt: '',
			source: null,
			placeholderFact: 'GAF Timberline HDZ / Owens Corning Duration / CertainTeed Landmark product photo. WebFetch on manufacturer pages returned 403 (GAF) or empty/JS-rendered output (Owens Corning, CertainTeed) on 2026-04-26. Slot stays HeritagePlaceholder until Heritage provides dealer-portal access (Founder Input §2).',
		} satisfies ImageRef,
	},

	metal: {
		hero: {
			url: u('1602193458517-db6caca8f1fe', 1280),
			alt: 'Standing seam metal roof against cloudy sky',
			source: 'unsplash',
			photographer: 'Ryunosuke Kikuno',
		} satisfies ImageRef,
		secondary: {
			url: u('1770910452211-2e8fd91bc347', 1280),
			alt: 'Modern building with metal roof and brick facade',
			source: 'unsplash',
			photographer: 'Matt Baker',
		} satisfies ImageRef,
		manufacturerCred: {
			url: null,
			alt: '',
			source: null,
			placeholderFact: 'McElroy Metal / Drexel Metals standing seam product photo. WebFetch on McElroy returned 404 on 2026-04-26. Slot stays HeritagePlaceholder until Heritage provides dealer-portal URLs or a confirmed brand relationship (Founder Input §2).',
		} satisfies ImageRef,
	},

	tile: {
		hero: {
			url: 'https://eagleroofing.com/wp-content/uploads/2023/10/Tapered_Slate_HERO-1-1024x768.jpg',
			alt: 'Eagle Roofing Tapered Slate concrete tile',
			source: 'manufacturer',
			manufacturer: 'Eagle Roofing Products',
			productName: 'Tapered Slate',
		} satisfies ImageRef,
		secondary: {
			url: 'https://eagleroofing.com/wp-content/uploads/2023/11/Copper_Series_HERO-1-1024x672.jpg',
			alt: 'Eagle Roofing Copper Series concrete tile',
			source: 'manufacturer',
			manufacturer: 'Eagle Roofing Products',
			productName: 'Copper Series',
		} satisfies ImageRef,
		swatchA: {
			url: 'https://eagleroofing.com/wp-content/uploads/2017/06/4679-light_gray_range-1024x685.jpg',
			alt: 'Eagle Roofing Light Gray Range tile color',
			source: 'manufacturer',
			manufacturer: 'Eagle Roofing Products',
			productName: 'Light Gray Range',
		} satisfies ImageRef,
		swatchB: {
			url: 'https://eagleroofing.com/wp-content/uploads/2020/11/HERO_image_4773-walnut_creek_blend-e1603478726140-1-1024x397.jpg',
			alt: 'Eagle Roofing Walnut Creek Blend tile color',
			source: 'manufacturer',
			manufacturer: 'Eagle Roofing Products',
			productName: 'Walnut Creek Blend',
		} satisfies ImageRef,
		swatchC: {
			url: 'https://eagleroofing.com/wp-content/uploads/2020/05/4634-kings_canyon_blend-3-1024x403.jpg',
			alt: 'Eagle Roofing Kings Canyon Blend tile color',
			source: 'manufacturer',
			manufacturer: 'Eagle Roofing Products',
			productName: 'Kings Canyon Blend',
		} satisfies ImageRef,
	},

	// ── Storm Damage before/after pairs
	beforeAfterPairs: {
		hailBefore: {
			url: u('1573876384005-dabc14a8ccbd', 1280),
			alt: 'Damaged asphalt shingle roof with bird perched on top',
			source: 'unsplash',
			photographer: 'Hal Gatewood',
		} satisfies ImageRef,
		hailAfter: {
			url: u('1755113717103-eceec858546a', 1280),
			alt: 'Suburban house with new asphalt shingle roof',
			source: 'unsplash',
			photographer: 'Paragon Exterior',
		} satisfies ImageRef,
		windBefore: {
			url: u('1533287255569-dbbc8be68ce4', 1280),
			alt: 'Wet roof in heavy rain',
			source: 'unsplash',
			photographer: 'Boris Misevic',
		} satisfies ImageRef,
		windAfter: {
			url: u('1583345237708-add35a664d77', 1280),
			alt: 'Brown and white house with completed shingle roof',
			source: 'unsplash',
			photographer: 'Giorgio Trovato',
		} satisfies ImageRef,
		waterBefore: {
			url: u('1694675041839-731a95902a33', 1280),
			alt: 'Close up of weathered roof building',
			source: 'unsplash',
			photographer: 'Adrien Olichon',
		} satisfies ImageRef,
		waterAfter: {
			url: u('1519115226133-94046df0e272', 1280),
			alt: 'Green wooden house roof under blue sky',
			source: 'unsplash',
			photographer: 'Andrej Lišakov',
		} satisfies ImageRef,
	},

	// ── Commercial project gallery (illustrative until Heritage's actual
	//    project photos arrive — Founder Input §10).
	projectGallery: [
		{ url: u('1771479755055-6a305f50845e', 1024), alt: 'Tiled rooftops of residential houses under sunlight', source: 'unsplash', photographer: 'Truong Tuyet Ly' } satisfies ImageRef,
		{ url: u('1760544137552-b225c3379c76', 1024), alt: 'Two different tiled rooftops seen from above', source: 'unsplash', photographer: 'engin akyurt' } satisfies ImageRef,
		{ url: u('1774281332843-264f649e8a8a', 1024), alt: 'City rooftops bathed in warm golden sunlight', source: 'unsplash', photographer: 'Marc Wieland' } satisfies ImageRef,
		{ url: uPlus('1683140940649-71864ae8156e', 1024), alt: 'Stacks of yellow ceramic roofing tiles', source: 'unsplash', photographer: 'Getty Images via Unsplash' } satisfies ImageRef,
		{ url: u('1755114203680-d39d95efa82c', 1024), alt: 'Aerial view of a suburban house with a grey roof', source: 'unsplash', photographer: 'Paragon Exterior' } satisfies ImageRef,
		{ url: u('1755113717103-eceec858546a', 1024), alt: 'Suburban house nestled among trees', source: 'unsplash', photographer: 'Paragon Exterior' } satisfies ImageRef,
	],

	// ── Heritage-specific people/projects — locked HeritagePlaceholder.
	//    Will not substitute Unsplash people for Heritage people.
	heritage: {
		founders: { url: null, alt: '', source: null, placeholderFact: 'Real founder portraits — Jordy, Peyton, Nishil, Vivek. See Founder Input §10.' } satisfies ImageRef,
		crewAtWork: { url: null, alt: '', source: null, placeholderFact: 'Heritage crew on the roof. See Founder Input §10.' } satisfies ImageRef,
		hqOffice: { url: null, alt: '', source: null, placeholderFact: 'Longview HQ exterior. See Founder Input §10.' } satisfies ImageRef,
	},
} as const;

// Footer attribution lines — pulled from a single source so credits stay consistent.
export const attribution = {
	footer: 'Photography via Unsplash contributors and Eagle Roofing Products. Material attribution per slot in MaterialTabs.',
	materialsSection: 'Tile imagery courtesy of Eagle Roofing Products. Asphalt and metal imagery via Unsplash contributors. Manufacturer-specific shingle photography (GAF / Owens Corning / CertainTeed / McElroy) lands once Heritage confirms dealer-portal access.',
};
