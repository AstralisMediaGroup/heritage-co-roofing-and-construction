// Asphalt shingle product browser data — types, brands, color palettes.
//
// Heritage no longer features 3-tab on the site (architectural is the
// default install on every residential job). The two tiers shown here
// pull color names from a representative manufacturer product line per
// tier so the visual matches reality:
//   Architectural → IKO Cambridge
//   Designer      → IKO Royal Estate
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
	id: 'architectural' | 'designer';
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
		id: 'architectural',
		name: 'Architectural',
		tagline: 'The default for East Texas.',
		tier: 'Standard',
		headline: 'Two layers. The Heritage default.',
		blurb: 'Laminated dual-layer construction creates real visual depth and pushes service life into the 20–25 year band with 110–130 mph wind ratings. The default install on every Heritage residential job unless you specifically pick something else.',
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
