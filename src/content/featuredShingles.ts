// Brand-specific data for the three flagship architectural shingle lines
// Heritage Co. installs most often. Color names are pulled from each
// manufacturer's official documentation. Swatch image URLs are linked
// directly to the manufacturer's CDN where available — no copies are
// stored locally. Hex codes are industry-typical visual approximations
// used as the fallback fill when a swatch image is unavailable.

export interface FeaturedShingleColor {
	name: string;
	hex: string;
	/** Manufacturer-CDN swatch image URL (optional). Hot-linked, never copied. */
	imgUrl?: string;
	popular?: boolean;
}

export interface FeaturedShingle {
	brand: 'GAF' | 'CertainTeed' | 'IKO';
	brandUrl: string;
	product: string;
	productUrl: string;
	tagline: string;
	warranty: string;
	wind: string;
	impact?: string;
	notes?: string;
	heroUrl?: string;
	heroAlt?: string;
	colors: FeaturedShingleColor[];
}

export const featuredShingles: FeaturedShingle[] = [
	{
		brand: 'GAF',
		brandUrl: 'https://www.gaf.com',
		product: 'Timberline HDZ',
		productUrl: 'https://www.gaf.com/en-us/roofing-materials/residential-roofing-materials/shingles/timberline-hdz',
		tagline: '#1 selling architectural shingle in North America.',
		warranty: 'Lifetime limited',
		wind: 'Up to 130 mph (LayerLock)',
		impact: 'Class 3 (HDZ); Class 4 available on Timberline AS II',
		notes: 'Nine High Definition shades + four 2026 Bold Definition shades. StainGuard Plus algae protection on every color.',
		colors: [
			// High Definition collection (9)
			{ name: 'Charcoal', hex: '#262628', popular: true },
			{ name: 'Pewter Gray', hex: '#6b6f70', popular: true },
			{ name: 'Weathered Wood', hex: '#5a4f42', popular: true },
			{ name: 'Hickory', hex: '#6b4628' },
			{ name: 'Barkwood', hex: '#3a2820' },
			{ name: 'Shakewood', hex: '#7d6149' },
			{ name: 'Mission Brown', hex: '#4a2f20' },
			{ name: 'Slate', hex: '#414858' },
			{ name: 'Hunter Green', hex: '#2d4733' },
			// Bold Definition collection (4) — new for 2026
			{ name: 'Chestnut Valley', hex: '#5e3a25' },
			{ name: 'Cliffside', hex: '#6b6055' },
			{ name: 'Midnight Mesa', hex: '#1f1d1c' },
			{ name: 'Sierra Sand', hex: '#a89878' },
		],
	},
	{
		brand: 'CertainTeed',
		brandUrl: 'https://www.certainteed.com',
		product: 'Landmark',
		productUrl: 'https://www.certainteed.com/products/residential-roofing-products/landmark',
		tagline: "America's most popular architectural shingle line.",
		warranty: 'Lifetime limited (transferable)',
		wind: '110 mph standard, 130 mph w/ install spec',
		impact: 'Class 3 standard; Class 4 on Landmark IR',
		notes: 'Twenty-one Max Def colors with increased contrast and gradient blends. StreakFighter algae resistance.',
		heroUrl: 'https://certainteed.widen.net/content/t8a2qybnkx/web/landmark-drift-B12-lightbrick-dml.tif?crop=yes&k=c&w=1600&h=687',
		heroAlt: 'CertainTeed Landmark Driftwood installed roof',
		colors: [
			{ name: 'Moire Black', hex: '#222226', popular: true },
			{ name: 'Charcoal Black', hex: '#2c2c2e', popular: true },
			{ name: 'Georgetown Gray', hex: '#5e5f5d', popular: true },
			{ name: 'Pewter', hex: '#6b6f70' },
			{ name: 'Weathered Wood', hex: '#5a4f42' },
			{ name: 'Driftwood', hex: '#7a6c58' },
			{ name: 'Heather Blend', hex: '#5b5048' },
			{ name: 'Resawn Shake', hex: '#3a2f25' },
			{ name: 'Burnt Sienna', hex: '#7a3a26' },
			{ name: 'Hunter Green', hex: '#2d4733' },
			{ name: 'Atlantic Blue', hex: '#3a4a5e' },
			{ name: 'Cottage Red', hex: '#7a2e26' },
		],
	},
	{
		brand: 'IKO',
		brandUrl: 'https://www.iko.com/na',
		product: 'Cambridge',
		productUrl: 'https://www.iko.com/na/product/cambridge/',
		tagline: 'Architectural laminate with FastLock bonding.',
		warranty: 'Limited lifetime',
		wind: 'Up to 110 mph (Iko Wind-Resistance Limited Warranty)',
		impact: 'Class 3 standard; Cambridge IR carries Class 4',
		notes: 'Built-in blue-green algae resistance. Cool Colors variant available for Title 24 compliance.',
		heroUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_DBLK.webp',
		heroAlt: 'IKO Cambridge Dual Black installed roof',
		colors: [
			{ name: 'Dual Black', hex: '#1c1c1e', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_DBLK.webp' },
			{ name: 'Charcoal Grey', hex: '#3a3a3c', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/CHGY_IKO_CRC_CAMB_SWCH-upd-min.webp' },
			{ name: 'Dual Grey', hex: '#5a5a5c', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_DGRY-min.webp' },
			{ name: 'Harvard Slate', hex: '#414858', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_HRVD_SLTE-min.webp' },
			{ name: 'Weatherwood', hex: '#5a4f42', popular: true, imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/RGB-WTWD_IKO_CRC_CAMB_SWCH-upd-min.webp' },
			{ name: 'Driftwood', hex: '#7a6c58', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Cambridge_Driftwood.webp' },
			{ name: 'Beachwood', hex: '#a89878', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_Cambridge_Beachwood.webp' },
			{ name: 'Earthtone Cedar', hex: '#7d5a3b', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/RGB-ETC_IKO_CRC_CAMB_SWCH-upd-min.webp' },
			{ name: 'Dual Brown', hex: '#4a2f20', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/2048_IKO_CRC_CAMB_SWCH_DBWN-min.webp' },
			{ name: 'Dove White', hex: '#dfd9c8', imgUrl: 'https://www.iko.com/na/wp-content/uploads/2024/05/IKO_CRC_CAMB_SWCH_DOVE_WHTE_2048-min.webp' },
		],
	},
];
