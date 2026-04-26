export interface Founder {
	name: string;
	role: string;
	cred: string;
	bio: string;
}

export const founders: Founder[] = [
	{
		name: 'Jordy',
		role: 'Operator',
		cred: '15 years roofing.<br>East Texas.',
		bio: 'Jordy runs the field. Fifteen years on East Texas roofs — residential tear-offs, storm work, and the kind of repeat customers you only get when the work holds up. If a crew is on your house, Jordy has already walked it.',
	},
	{
		name: 'Peyton',
		role: 'Commercial PM',
		cred: 'Network of trusted craftsmen.',
		bio: 'Peyton runs commercial. Bonded, insured, and connected to a tight network of craftsmen across the region — TPO, EPDM, modified bitumen, metal. The kind of relationships that get jobs done on schedule and on spec.',
	},
	{
		name: 'Nishil',
		role: 'Managing partner',
		cred: 'Operations and customer care.',
		bio: 'Nishil keeps the operation tight and the customer in the loop. If you call Heritage Co. and need an answer, he is one of the people you will hear back from. Same day, every time.',
	},
	{
		name: 'Vivek',
		role: 'Finance',
		cred: 'Pricing fair, terms clear.',
		bio: 'Vivek handles the numbers. Pricing fair, terms clear, no hidden line items. Insurance work or out-of-pocket, you see the math before you sign anything.',
	},
];
