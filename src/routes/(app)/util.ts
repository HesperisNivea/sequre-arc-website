import type { Snippet } from "svelte";

export type OurServivesSectionCard = {
		title: string;
		description: string;
		icon?: Snippet;
	};


export const cards: OurServivesSectionCard[] = [
    {        title: "Security Audits",
        description: "Comprehensive security audits to identify vulnerabilities and ensure robust protection.", 
        icon: undefined
    },
    {        title: "Penetration Testing",
        description: "Simulated cyber attacks to identify and fix security weaknesses.",
        icon: undefined
    },
    {        title: "Incident Response",
        description: "Rapid response to security incidents to minimize damage and restore operations.",
        icon: undefined
    },
    {        title: "Security Training",
        description: "Training programs to educate teams on best security practices and threat awareness.",
        icon: undefined
    },
       {        title: "Incident Response",
        description: "Rapid response to security incidents to minimize damage and restore operations.",
        icon: undefined
    },
       {        title: "Incident Response",
        description: "Rapid response to security incidents to minimize damage and restore operations.",
        icon: undefined
    }
];
