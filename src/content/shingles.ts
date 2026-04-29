// Asphalt shingle product browser data — types, brands, color palettes.
//
// Color names are pulled from each tier's representative manufacturer
// product line so the visual matches reality:
//   3-tab        → IKO Marathon Plus AR
//   Architectural → IKO Cambridge
//   Designer     → IKO Royal Estate
// Swatch image URLs hot-link to IKO's CDN — no copies stored locally.
// The brands list still includes every manufacturer Heritage installs;
// the on-screen swatches just pick one canonical product line per tier
// to show real product texture instead of generic stock photos.
// Hex codes are visual fallbacks when a swatch image isn't available.

export interface ShingleColor {
	name: string;
	hex: string;
	popular?: boolean;
	/** Manufacturer-CDN swatch image URL (hot-linked, never copied). */
	imgUrl?: string;
}

export interface ShingleType {
	id: '3-tab' | 'architectural' | 'designer';
	name: string;
	tagline: string;
	tier: string;
	headline: string;
	blurb: string;
	warranty: string;
	wind: string;
	life: string;
	priceTier: string;
	brands: string[];
	colors: ShingleColor[];
	bestFor: string;
	/** Tier-representative shingle photo (manufacturer CDN). */
	heroUrl: string;
	heroAlt: string;
}

export const shingleTypes: ShingleType[] = [
	{
		id: '3-tab',
		name: '3-tab',
		tagline: 'The basic shingle.',
		tier: 'Budget',
		headline: 'Single-layer. Single warranty cycle.',
		blurb: 'Three flat tabs per shingle, one layer of asphalt. Cheapest material on the market and the shortest service life. Right for rentals, short-stay homes, and like-for-like repair matches on existing 3-tab roofs.',
		warranty: '25 years',
		wind: '60 mph',
		life: '15–18 yrs',
		priceTier: '$',
		brands: ['GAF Royal Sovereign', 'Owens Corning Supreme', 'CertainTeed XT 25', 'IKO Marathon Plus AR'],
		bestFor: 'Rentals · short-stay homes · like-for-like matches',
		heroUrl: 'https://www.iko.com/na/wp-content/uploads/2024/11/IKO_CRC_3TAB_SWCH_Dual-Black-2.webp',
		heroAlt: 'IKO Marathon Plus AR Dual Black 3-tab shingle close-up',
		colors: [
			{ name: 'Dual Black', hex: '#1c1c1e', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/11/IKO_CRC_3TAB_SWCH_Dual-Black-2.webp' },
			{ name: 'Weatherwood', hex: '#5a4f42', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/11/IKO_CRC_3TAB_SWCH_WTWD.webp' },
			{ name: 'Charcoal', hex: '#2c2c2e' },
			{ name: 'Driftwood', hex: '#7a6c58' },
			{ name: 'Estate Gray', hex: '#787673' },
			{ name: 'Autumn Brown', hex: '#5e4030' },
			{ name: 'White', hex: '#dfd9c8' },
		],
	},
	{
		id: 'architectural',
		name: 'Architectural',
		tagline: 'The default for East Texas.',
		tier: 'Standard',
		headline: 'Two layers. The Heritage default.',
		blurb: 'Laminated dual-layer construction creates depth and dimensionality, doubles the wind and impact rating of 3-tab, and pushes service life into the 20–25 year band. The default install on every Heritage residential job unless you specifically pick something else.',
		warranty: '30 yr to limited lifetime',
		wind: '110–130 mph',
		life: '20–25 yrs',
		priceTier: '$$',
		brands: ['GAF Timberline HDZ', 'Owens Corning Duration', 'CertainTeed Landmark', 'IKO Cambridge', 'Atlas Pinnacle Pristine', 'Malarkey Highlander'],
		bestFor: 'Default for nearly every East Texas home',
		heroUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_DBLK.webp',
		heroAlt: 'IKO Cambridge Dual Black architectural shingle close-up',
		colors: [
			{ name: 'Dual Black', hex: '#1c1c1e', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_DBLK.webp' },
			{ name: 'Charcoal Grey', hex: '#3a3a3c', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/CHGY_IKO_CRC_CAMB_SWCH-upd-min.webp' },
			{ name: 'Dual Grey', hex: '#5a5a5c', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_DGRY-min.webp' },
			{ name: 'Harvard Slate', hex: '#414858', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_HRVD_SLTE-min.webp' },
			{ name: 'Weatherwood', hex: '#5a4f42', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/RGB-WTWD_IKO_CRC_CAMB_SWCH-upd-min.webp' },
			{ name: 'Driftwood', hex: '#7a6c58', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Cambridge_Driftwood.webp' },
			{ name: 'Beachwood', hex: '#a89878', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Cambridge_Beachwood.webp' },
			{ name: 'Earthtone Cedar', hex: '#7d5a3b', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/RGB-ETC_IKO_CRC_CAMB_SWCH-upd-min.webp' },
			{ name: 'Dual Brown', hex: '#4a2f20', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_DBWN-min.webp' },
			{ name: 'Dove White', hex: '#dfd9c8', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_CRC_CAMB_SWCH_DOVE_WHTE_2048-min.webp' },
		],
	},
	{
		id: 'designer',
		name: 'Designer + impact',
		tagline: 'Slate, shake, or cedar — without the structural penalty.',
		tier: 'Premium',
		headline: 'Lifetime warranty. Class 4 impact.',
		blurb: 'Heavier shingles engineered to mimic slate, shake, or cedar. Upgraded mat carries Class 4 impact rating — significant insurance discounts in hail-prone zips. Lifetime warranty is standard. Right for the house you plan to keep.',
		warranty: 'Limited lifetime',
		wind: '130–150 mph',
		life: '30+ yrs',
		priceTier: '$$$',
		brands: ['GAF Camelot II', 'GAF Grand Sequoia', 'Owens Corning Berkshire', 'CertainTeed Presidential', 'IKO Royal Estate', 'IKO Crowne Slate', 'Atlas StormMaster Shake', 'Atlas Pinnacle Impact', 'Malarkey Legacy'],
		bestFor: 'Long-stay homes · hail-prone zips · architectural intent',
		heroUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Royal-Estate-Harvest-Slate-min.webp',
		heroAlt: 'IKO Royal Estate Harvest Slate designer shingle close-up',
		colors: [
			{ name: 'Harvest Slate', hex: '#5a4f42', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Royal-Estate-Harvest-Slate-min.webp' },
			{ name: 'Mountain Slate', hex: '#3a4555', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Royal-Estate-Mountain-Slate.webp' },
			{ name: 'Shadow Slate', hex: '#2c2f33', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Royal-Estate-Shadow-Slate-min.webp' },
			{ name: 'Taupe Slate', hex: '#7d6149', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Royal-Estate-Taupe-Slate-min.webp' },
			{ name: 'Royal Granite', hex: '#4a4f5e', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/Crowne-Slate_Royal-Granite-min-1.webp' },
			{ name: 'Black Granite', hex: '#1c1c1e' },
			{ name: 'Cedar', hex: '#7d5a3b' },
			{ name: 'Aged Cedar', hex: '#4a382a' },
			{ name: 'Hunter Green', hex: '#2d4733' },
			{ name: 'Burnt Sienna', hex: '#7a3a26' },
		],
	},
];
