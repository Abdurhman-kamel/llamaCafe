import { MENU_LINKS } from '@/components/constants/navbar';

export default function NavLinks({ setIsOpen, onHoverChange }) {
    return (
        <div className="w-full">
            <div className="flex min-w-0 flex-col">
                {MENU_LINKS.map((item) => (
                    <a
                        key={item.id}
                        href={item.path}
                        onClick={() => setIsOpen && setIsOpen(false)}
                        onMouseEnter={() => onHoverChange && onHoverChange(item.id)}
                        onMouseLeave={() => onHoverChange && onHoverChange(null)}
                        onFocus={() => onHoverChange && onHoverChange(item.id)}
                        onBlur={() => onHoverChange && onHoverChange(null)}
                        className="group relative flex min-w-0 max-w-full items-end py-4 md:py-5"
                    >
                        {/* Number */}
                        <span className="font-label w-8 shrink-0 pb-2 text-xs tracking-normal text-white/25 transition-colors duration-300 group-hover:text-white sm:w-12 sm:pb-3 sm:text-sm">
                            {item.id}
                        </span>

                        {/* Label */}
                        <span className="font-heading min-w-0 wrap-break-word text-[clamp(2rem,min(5vw,7vh),4.5rem)] leading-[0.95] tracking-[-0.03em] text-white/40 transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:text-white">
                            {item.key}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}