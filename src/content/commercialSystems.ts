// Cross-link tile data for the commercial system pages. Each page imports
// this and filters out its own system, leaving 6 tiles to other systems.

import { imagery } from './imagery';
const v2 = imagery.v2;

export interface SystemTile {
	id: 'tpo' | 'epdm' | 'modBit' | 'bur' | 'metal' | 'coatings' | 'maintenance';
	eyebrow: string;
	heading: string;
	body: string;
	href: string;
	photo: typeof v2.systemTiles.tpo;
}

export const commercialSystems: SystemTile[] = [
	{
		id: 'tpo',
		eyebrow: 'TPO',
		heading: 'TPO single-ply.',
		body: 'White heat-welded membrane. The default re-roof for cooling-dominated buildings.',
		href: '/commercial/tpo-roofing',
		photo: v2.systemTiles.tpo,
	},
	{
		id: 'epdm',
		eyebrow: 'EPDM',
		heading: 'EPDM single-ply.',
		body: 'Black rubber membrane. Cold-climate workhorse. Right call on certain re-roofs.',
		href: '/commercial/epdm-roofing',
		photo: v2.systemTiles.epdm,
	},
	{
		id: 'modBit',
		eyebrow: 'Modified bitumen',
		heading: 'Modified bitumen.',
		body: 'Multi-ply asphalt-based system. Strong puncture and foot-traffic resistance.',
		href: '/commercial/modified-bitumen-roofing',
		photo: v2.systemTiles.modBit,
	},
	{
		id: 'bur',
		eyebrow: 'Built-up roofing',
		heading: 'BUR (tar and gravel).',
		body: 'Multi-layer asphalt-and-gravel. Decades of proven service life on flat roofs.',
		href: '/commercial/built-up-roofing',
		photo: v2.systemTiles.bur,
	},
	{
		id: 'metal',
		eyebrow: 'Metal',
		heading: 'Standing seam metal.',
		body: 'Concealed-fastener panels. The longest-warranty option on the commercial side.',
		href: '/commercial/metal-roofing',
		photo: v2.systemTiles.metal,
	},
	{
		id: 'coatings',
		eyebrow: 'Coatings',
		heading: 'Coatings + restoration.',
		body: 'Silicone or acrylic recoats over an existing system. Adds 10–15 years.',
		href: '/commercial/roof-coatings-and-restorations',
		photo: v2.systemTiles.coatings,
	},
	{
		id: 'maintenance',
		eyebrow: 'Maintenance',
		heading: 'Maintenance programs.',
		body: 'Scheduled inspection + minor-repair cadence. Protects the warranty.',
		href: '/commercial/maintenance-programs',
		photo: v2.systemTiles.maintenance,
	},
];

/** Return all systems except the one matching the given id. */
export function otherSystems(currentId: SystemTile['id']) {
	return commercialSystems.filter((s) => s.id !== currentId);
}
