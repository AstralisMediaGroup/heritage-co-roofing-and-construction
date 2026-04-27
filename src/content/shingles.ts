// Asphalt shingle product browser data — types, brands, color palettes.
//
// Color names and hex codes are industry-typical for each tier. Heritage's
// stocked SKU list and exact brand color matches stay HeritagePlaceholder
// until Founder Input §2 confirms dealer-portal access (per Build Pack v2
// factual-integrity rule). The categories themselves are real.

export interface ShingleColor {
	name: string;
	hex: string;
	popular?: boolean;
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
		brands: ['GAF Royal Sovereign', 'Owens Corning Supreme', 'CertainTeed XT 25'],
		bestFor: 'Rentals · short-stay homes · like-for-like matches',
		colors: [
			{ name: 'Charcoal', hex: '#2c2c2e', popular: true },
			{ name: 'Weathered Wood', hex: '#5a4f42' },
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
		brands: ['GAF Timberline HDZ', 'Owens Corning Duration', 'CertainTeed Landmark', 'Atlas Pinnacle Pristine', 'Malarkey Highlander'],
		bestFor: 'Default for nearly every East Texas home',
		colors: [
			{ name: 'Charcoal', hex: '#262628', popular: true },
			{ name: 'Pewter Gray', hex: '#6b6f70', popular: true },
			{ name: 'Weathered Wood', hex: '#5a4f42', popular: true },
			{ name: 'Driftwood', hex: '#7a6c58' },
			{ name: 'Hickory', hex: '#6b4628' },
			{ name: 'Mission Brown', hex: '#4a2f20' },
			{ name: 'Slate', hex: '#414858' },
			{ name: 'Hunter Green', hex: '#2d4733' },
			{ name: 'Barkwood', hex: '#3a2820' },
			{ name: 'Shakewood', hex: '#7d6149' },
			{ name: 'Sand Dune', hex: '#a89878' },
			{ name: 'Birchwood', hex: '#8a7964' },
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
		brands: ['GAF Camelot II', 'GAF Grand Sequoia', 'Owens Corning Berkshire', 'CertainTeed Presidential', 'Atlas StormMaster Shake', 'Atlas Pinnacle Impact', 'Malarkey Legacy'],
		bestFor: 'Long-stay homes · hail-prone zips · architectural intent',
		colors: [
			{ name: 'Slate', hex: '#3a4555', popular: true },
			{ name: 'Cedar', hex: '#7d5a3b', popular: true },
			{ name: 'Black Granite', hex: '#1c1c1e', popular: true },
			{ name: 'Weathered Wood', hex: '#5a4f42' },
			{ name: 'Stonewood', hex: '#5a4d3d' },
			{ name: 'Aged Cedar', hex: '#4a382a' },
			{ name: 'Hunter Green', hex: '#2d4733' },
			{ name: 'Antique Slate', hex: '#4a4f5e' },
			{ name: 'Burnt Sienna', hex: '#7a3a26' },
			{ name: 'Driftwood', hex: '#8a7964' },
		],
	},
];
