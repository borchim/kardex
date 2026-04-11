import AppLogoIcon from './app-logo-icon';
import { useBrand } from '@/contexts/BrandContext';
import { useState } from 'react';

interface AppLogoProps {
    position?: 'left' | 'right';
    title?: string;
    iconClassName?: string;
    containerClassName?: string;
    textClassName?: string;
}

export default function AppLogo({
    position = 'left',
    title,
    iconClassName = 'size-5 fill-current text-white dark:text-black',
    containerClassName = 'bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md',
    textClassName = 'grid flex-1 truncate text-sm leading-none font-semibold'
}: AppLogoProps) {
    const { titleText, favicon } = useBrand();
    const [faviconError, setFaviconError] = useState(false);
    const isRight = position === 'right';
    const displayTitle = title || titleText;

    if (!favicon || faviconError) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="140" height="40">
                <rect x="4" y="14" width="46" height="62" rx="5" fill="none" stroke="#C9A84C" strokeWidth="1.5"/>
                <rect x="12" y="4" width="46" height="62" rx="5" fill="#0D0D0D"/>
                <line x1="20" y1="22" x2="48" y2="22" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="20" y1="30" x2="40" y2="30" stroke="#555555" strokeWidth="0.8" strokeLinecap="round"/>
                <circle cx="58" cy="35" r="2.5" fill="#C9A84C"/>
                <path d="M64 27 A10 10 0 0 1 64 43" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M70 21 A18 18 0 0 1 70 49" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M77 15 A26 26 0 0 1 77 55" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.45"/>
                <text x="96" y="43" fontFamily="Inter, -apple-system, sans-serif" fontSize="34" fontWeight="500" fill="#0D0D0D">{displayTitle}</text>
            </svg>
        );
    }

    return (
        <div className={`w-full flex items-center ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={containerClassName}>
                <img
                    src={favicon}
                    alt="Logo"
                    className={iconClassName.replace('fill-current', '')}
                    onError={() => setFaviconError(true)}
                />
            </div>
            <div className={`${textClassName} ${isRight ? 'mr-1 text-right' : 'ml-1 text-left'}`}>
                {displayTitle}
            </div>
        </div>
    );
}
