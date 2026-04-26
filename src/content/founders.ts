export interface Founder {
	name: string;
	role: string;
	cred: string;
	bio?: string;
}

// Cred lines are from Build Pack §5 (locked).
// Bios deliberately left undefined — real bios come from Founder Input page §7.
export const founders: Founder[] = [
	{ name: 'Jordy', role: 'Operator', cred: '15 years roofing.<br>East Texas.' },
	{ name: 'Peyton', role: 'Commercial PM', cred: 'Network of trusted craftsmen.' },
	{ name: 'Nishil', role: 'Managing partner', cred: 'Operations and customer care.' },
	{ name: 'Vivek', role: 'Finance', cred: 'Pricing fair, terms clear.' },
];
