import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 80">
            <rect x="4" y="14" width="46" height="62" rx="5" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
            <rect x="12" y="4" width="46" height="62" rx="5" fill="#0D0D0D"/>
            <line x1="20" y1="22" x2="48" y2="22" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="20" y1="30" x2="40" y2="30" stroke="#555555" strokeWidth="0.8" strokeLinecap="round"/>
            <circle cx="58" cy="35" r="2.5" fill="#C9A84C"/>
            <path d="M64 27 A10 10 0 0 1 64 43" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M70 21 A18 18 0 0 1 70 49" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M77 15 A26 26 0 0 1 77 55" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.45"/>
        </svg>
    );
}
