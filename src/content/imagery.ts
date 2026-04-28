// Heritage Co. imagery manifest
//
// v1 slots (Plan 007.0) preserved at the bottom for backward compatibility
// with any old components still referencing them. v2 slots are the active
// surface for Build Pack v2 page rebuilds.
//
// All Unsplash IDs verified real on 2026-04-26. Slots are recycled across
// pages — the placeholder gradient rule from v2 still applies: photo slots
// must exist and be sized correctly. We're cycling 14 real Unsplash photos
// across ~30 page heroes; that's intentional for the placeholder pass.
//
// Per Plan 007 spec: hotlinked, not downloaded. Footer attribution rolls up
// from this manifest via the `attribution` export.

export interface ImageRef {
	url: string | null;
	alt: string;
	source: 'unsplash' | 'manufacturer' | 'heritage' | null;
	photographer?: string;
	manufacturer?: string;
	productName?: string;
	placeholderFact?: string;
}

const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const uPlus = (id: string, w = 1600) => `https://plus.unsplash.com/premium_photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

// ─── Verified real Unsplash IDs we cycle across page slots ───
// (id, alt, photographer)
const ROOF_GREEN_SKY: ImageRef = { url: u('1519115226133-94046df0e272', 1800), alt: 'Wooden roof under deep blue sky', source: 'unsplash', photographer: 'Andrej Lišakov' };
const HOUSE_BROWN_WHITE: ImageRef = { url: u('1583345237708-add35a664d77', 1800), alt: 'Two-story home with shingle roof', source: 'unsplash', photographer: 'Giorgio Trovato' };
const HOUSE_AERIAL_GREY: ImageRef = { url: u('1755114203680-d39d95efa82c', 1800), alt: 'Aerial view of suburban house with grey shingle roof', source: 'unsplash', photographer: 'Paragon Exterior' };
const ASPHALT_CLOSEUP: ImageRef = { url: u('1767281076251-de2ab49a1294', 1800), alt: 'Asphalt shingle roof close-up, hexagonal pattern', source: 'unsplash', photographer: 'Bernd Dittrich' };
const METAL_STANDING_SEAM: ImageRef = { url: u('1602193458517-db6caca8f1fe', 1800), alt: 'Standing seam metal roof against cloudy sky', source: 'unsplash', photographer: 'Ryunosuke Kikuno' };
const METAL_BRICK_BUILDING: ImageRef = { url: u('1770910452211-2e8fd91bc347', 1800), alt: 'Modern building with metal roof and brick facade', source: 'unsplash', photographer: 'Matt Baker' };
const STORM_DAMAGE: ImageRef = { url: u('1573876384005-dabc14a8ccbd', 1800), alt: 'Damaged asphalt shingle roof after a storm', source: 'unsplash', photographer: 'Hal Gatewood' };
const SHINGLE_NEW_TREES: ImageRef = { url: u('1755113717103-eceec858546a', 1800), alt: 'Newly shingled suburban home nestled in trees', source: 'unsplash', photographer: 'Paragon Exterior' };
const WET_ROOF_RAIN: ImageRef = { url: u('1533287255569-dbbc8be68ce4', 1800), alt: 'Roof in heavy rain', source: 'unsplash', photographer: 'Boris Misevic' };
const ROOF_WEATHERED: ImageRef = { url: u('1694675041839-731a95902a33', 1800), alt: 'Close-up of a weathered roof building', source: 'unsplash', photographer: 'Adrien Olichon' };
const ROOFTOPS_GOLDEN: ImageRef = { url: u('1771479755055-6a305f50845e', 1800), alt: 'Tiled rooftops in golden sunlight', source: 'unsplash', photographer: 'Truong Tuyet Ly' };
const ROOFTOPS_TWO: ImageRef = { url: u('1760544137552-b225c3379c76', 1800), alt: 'Two angled tiled rooftops viewed from above', source: 'unsplash', photographer: 'engin akyurt' };
const ROOFTOPS_CITY: ImageRef = { url: u('1774281332843-264f649e8a8a', 1800), alt: 'City rooftops bathed in warm golden sunlight', source: 'unsplash', photographer: 'Marc Wieland' };
const TILE_STACK_YELLOW: ImageRef = { url: uPlus('1683140940649-71864ae8156e', 1800), alt: 'Stacks of yellow ceramic roofing tiles', source: 'unsplash', photographer: 'Getty Images via Unsplash' };

export const imagery = {
	// ════════════════════════════════════════════════════════════════════
	// V2 — page hero + supporting slots (Build Pack v2)
	// ════════════════════════════════════════════════════════════════════
	v2: {
		// ── Tier 1 page heros
		pageHeros: {
			home: ROOF_GREEN_SKY,
			residential: HOUSE_BROWN_WHITE,
			commercial: METAL_BRICK_BUILDING,
			metalRoofing: METAL_STANDING_SEAM,

			// Tier 2 — commercial systems
			tpoRoofing: ROOFTOPS_CITY,
			epdmRoofing: ROOF_WEATHERED,
			modifiedBitumen: ROOFTOPS_TWO,
			builtUpRoofing: ROOFTOPS_GOLDEN,
			coatings: ROOFTOPS_GOLDEN,
			maintenance: ROOF_WEATHERED,

			// Tier 2 — residential materials
			asphaltShingle: ASPHALT_CLOSEUP,
			metalRoofs: METAL_STANDING_SEAM,
			tileRoofs: TILE_STACK_YELLOW,

			// Tier 2 — residential services
			roofReplacement: HOUSE_AERIAL_GREY,
			roofRepair: ASPHALT_CLOSEUP,
			roofInspection: HOUSE_BROWN_WHITE,
			stormDamage: STORM_DAMAGE,
			gutter: ROOF_GREEN_SKY,
			skylight: HOUSE_BROWN_WHITE,
			atticVentilation: SHINGLE_NEW_TREES,
			chimneyFlashing: ROOF_WEATHERED,

			// Tier 3 + utility
			about: HOUSE_AERIAL_GREY,
			reviews: SHINGLE_NEW_TREES,
			freeInspection: HOUSE_BROWN_WHITE,
			serviceAreas: ROOFTOPS_CITY,
			cityPage: HOUSE_BROWN_WHITE,
		},

		// ── Mid-page bleed photos (one per page to break long content blocks)
		bleeds: {
			home: SHINGLE_NEW_TREES,
			residential: HOUSE_AERIAL_GREY,
			commercial: ROOFTOPS_CITY,
			projects: ROOFTOPS_GOLDEN,
			crew: HOUSE_BROWN_WHITE,
			storm: STORM_DAMAGE,
			workmanship: ASPHALT_CLOSEUP,
		},

		// ── Project showcase pool — cycle for project grids
		projects: [
			{ ...HOUSE_AERIAL_GREY, alt: 'Residential asphalt re-roof, East Texas' },
			{ ...SHINGLE_NEW_TREES, alt: 'Suburban replacement, Tyler, TX' },
			{ ...METAL_STANDING_SEAM, alt: 'Standing seam metal install, commercial' },
			{ ...METAL_BRICK_BUILDING, alt: 'Standing seam over brick, retail' },
			{ ...ROOFTOPS_CITY, alt: 'Multi-building TPO project, Longview' },
			{ ...ROOFTOPS_TWO, alt: 'Roof replacement pair, residential' },
			{ ...HOUSE_BROWN_WHITE, alt: 'Architectural shingle replacement' },
			{ ...ROOF_GREEN_SKY, alt: 'Premium shingle install, East Texas' },
			{ ...ROOFTOPS_GOLDEN, alt: 'Commercial roof system overview' },
			{ ...ASPHALT_CLOSEUP, alt: 'Asphalt detail, recent install' },
		] as ImageRef[],

		// ── System tiles (Greenwood-style — small thumb per system)
		systemTiles: {
			tpo: ROOFTOPS_CITY,
			epdm: ROOF_WEATHERED,
			modBit: ROOFTOPS_TWO,
			metal: METAL_STANDING_SEAM,
			bur: ROOFTOPS_GOLDEN,
			coatings: ROOFTOPS_GOLDEN,
			maintenance: ROOF_WEATHERED,
		},

		// ── Material tiles (residential)
		materialTiles: {
			asphalt: ASPHALT_CLOSEUP,
			metal: METAL_STANDING_SEAM,
			tile: TILE_STACK_YELLOW,
		},

		// ── Service tiles (residential service grid)
		serviceTiles: {
			replacement: HOUSE_AERIAL_GREY,
			repair: ASPHALT_CLOSEUP,
			inspection: HOUSE_BROWN_WHITE,
			storm: STORM_DAMAGE,
			gutter: ROOF_GREEN_SKY,
			skylight: HOUSE_BROWN_WHITE,
			attic: SHINGLE_NEW_TREES,
			chimney: ROOF_WEATHERED,
		},

		// ── Trust marquee logos — text-based.
		//    Cert list per Founder Input §2.
		trustItems: [
			{ label: 'NRCA Member' },
			{ label: 'Texas Association of Builders' },
			{ label: 'GAF Master Elite · commercial' },
			{ label: 'CertainTeed Credentialed' },
			{ label: 'IKO Certified' },
			{ label: '10-year workmanship warranty' },
			{ label: 'Heritage Standard' },
			{ label: 'Insured + workers\' comp' },
			{ label: '4,000+ residential roofs' },
			{ label: 'Locally owned · East TX + Central AR' },
		],

		// ── Crew + process photos (placeholder slots — Heritage owns these)
		crew: {
			onRoof: { url: null, alt: '', source: null, placeholderFact: 'Heritage crew on a roof in East Texas. See Founder Input §10 — replace this with a real crew photo before launch.' } satisfies ImageRef,
			handsAtWork: { url: null, alt: '', source: null, placeholderFact: 'Hands working on a shingle install. See Founder Input §10.' } satisfies ImageRef,
			measuring: { url: null, alt: '', source: null, placeholderFact: 'Inspector measuring a roof, ladder visible. See Founder Input §10.' } satisfies ImageRef,
			truck: { url: null, alt: '', source: null, placeholderFact: 'Heritage Co. truck on a residential street. See Founder Input §10.' } satisfies ImageRef,
		},
	},

	// ════════════════════════════════════════════════════════════════════
	// V1 — preserved for any old component still wired in
	// ════════════════════════════════════════════════════════════════════
	heroCandidates: {
		residentialRoofA: ROOF_GREEN_SKY,
		residentialRoofB: HOUSE_BROWN_WHITE,
		residentialRoofC: HOUSE_AERIAL_GREY,
	},
	asphalt: {
		hero: HOUSE_AERIAL_GREY,
		closeup: ASPHALT_CLOSEUP,
		manufacturerCred: { url: null, alt: '', source: null, placeholderFact: 'GAF / Owens Corning / CertainTeed product photo. Pending dealer-portal access.' } satisfies ImageRef,
	},
	metal: {
		hero: METAL_STANDING_SEAM,
		secondary: METAL_BRICK_BUILDING,
		manufacturerCred: { url: null, alt: '', source: null, placeholderFact: 'McElroy / Drexel standing seam product photo. Pending dealer-portal access.' } satisfies ImageRef,
	},
	tile: {
		hero: { url: 'https://eagleroofing.com/wp-content/uploads/2023/10/Tapered_Slate_HERO-1-1024x768.jpg', alt: 'Eagle Roofing Tapered Slate concrete tile', source: 'manufacturer', manufacturer: 'Eagle Roofing Products', productName: 'Tapered Slate' } satisfies ImageRef,
		secondary: { url: 'https://eagleroofing.com/wp-content/uploads/2023/11/Copper_Series_HERO-1-1024x672.jpg', alt: 'Eagle Roofing Copper Series concrete tile', source: 'manufacturer', manufacturer: 'Eagle Roofing Products', productName: 'Copper Series' } satisfies ImageRef,
		swatchA: { url: 'https://eagleroofing.com/wp-content/uploads/2017/06/4679-light_gray_range-1024x685.jpg', alt: 'Eagle Roofing Light Gray Range tile color', source: 'manufacturer', manufacturer: 'Eagle Roofing Products', productName: 'Light Gray Range' } satisfies ImageRef,
		swatchB: { url: 'https://eagleroofing.com/wp-content/uploads/2020/11/HERO_image_4773-walnut_creek_blend-e1603478726140-1-1024x397.jpg', alt: 'Eagle Roofing Walnut Creek Blend tile color', source: 'manufacturer', manufacturer: 'Eagle Roofing Products', productName: 'Walnut Creek Blend' } satisfies ImageRef,
		swatchC: { url: 'https://eagleroofing.com/wp-content/uploads/2020/05/4634-kings_canyon_blend-3-1024x403.jpg', alt: 'Eagle Roofing Kings Canyon Blend tile color', source: 'manufacturer', manufacturer: 'Eagle Roofing Products', productName: 'Kings Canyon Blend' } satisfies ImageRef,
	},
	beforeAfterPairs: {
		hailBefore: STORM_DAMAGE,
		hailAfter: SHINGLE_NEW_TREES,
		windBefore: WET_ROOF_RAIN,
		windAfter: HOUSE_BROWN_WHITE,
		waterBefore: ROOF_WEATHERED,
		waterAfter: ROOF_GREEN_SKY,
	},
	projectGallery: [
		{ ...ROOFTOPS_GOLDEN, alt: 'Tiled rooftops of residential houses under sunlight' },
		{ ...ROOFTOPS_TWO, alt: 'Two different tiled rooftops seen from above' },
		{ ...ROOFTOPS_CITY, alt: 'City rooftops bathed in warm golden sunlight' },
		{ ...TILE_STACK_YELLOW, alt: 'Stacks of yellow ceramic roofing tiles' },
		{ ...HOUSE_AERIAL_GREY, alt: 'Aerial view of a suburban house with a grey roof' },
		{ ...SHINGLE_NEW_TREES, alt: 'Suburban house nestled among trees' },
	] as ImageRef[],
	manufacturerBrands: {
		atlasStormMaster: { url: 'https://www.atlasroofing.com/img/StormMaster-Shake-Logo-Homeowner_2024-01-31-211555_gogq.png', alt: 'Atlas StormMaster Shake', source: 'manufacturer', manufacturer: 'Atlas Roofing' } satisfies ImageRef,
		atlasPinnacleImpact: { url: 'https://www.atlasroofing.com/img/product-logos/LOGO-Pinnacle-Impact-BL.png', alt: 'Atlas Pinnacle Impact', source: 'manufacturer', manufacturer: 'Atlas Roofing' } satisfies ImageRef,
		atlasPinnaclePristine: { url: 'https://www.atlasroofing.com/img/product-logos/LOGO-Pinnacle-Pristine-BL_2023-01-26-170147_xntw.png', alt: 'Atlas Pinnacle Pristine', source: 'manufacturer', manufacturer: 'Atlas Roofing' } satisfies ImageRef,
		atlasPinnacleSun: { url: 'https://www.atlasroofing.com/img/product-logos/LOGO-Pinnacle-Sun-BL.png', alt: 'Atlas Pinnacle Sun (cool roof)', source: 'manufacturer', manufacturer: 'Atlas Roofing' } satisfies ImageRef,
		malarkeyLegacy: { url: 'https://www.malarkeyroofing.com/app/uploads/2021/02/legacy-midnight-black_camas-wa-20210119_Malarkey_0737-600x400.jpg', alt: 'Malarkey Legacy Scotchgard installed roof', source: 'manufacturer', manufacturer: 'Malarkey' } satisfies ImageRef,
		malarkeyWindsor: { url: 'https://www.malarkeyroofing.com/app/uploads/2021/04/windsor-scotchgard-natural-wood-16031-parker-CO-8-malarkey-600x448.jpg', alt: 'Malarkey Windsor Scotchgard installed roof', source: 'manufacturer', manufacturer: 'Malarkey' } satisfies ImageRef,
	},
	heritage: {
		founders: { url: null, alt: '', source: null, placeholderFact: 'Real founder portraits — Jordy, Peyton, Nishil, Vivek. See Founder Input §10.' } satisfies ImageRef,
		crewAtWork: { url: null, alt: '', source: null, placeholderFact: 'Heritage crew on the roof. See Founder Input §10.' } satisfies ImageRef,
		hqOffice: { url: null, alt: '', source: null, placeholderFact: 'Longview HQ exterior. See Founder Input §10.' } satisfies ImageRef,
	},
} as const;

export const attribution = {
	footer: 'Photography via Unsplash contributors and Eagle Roofing Products. Real Heritage project + crew photography lands once Founder Input §10 is supplied.',
	materialsSection: 'Tile imagery courtesy of Eagle Roofing Products. Asphalt and metal imagery via Unsplash contributors. Manufacturer-specific shingle photography (GAF / Owens Corning / CertainTeed / McElroy) lands once Heritage confirms dealer-portal access.',
};
