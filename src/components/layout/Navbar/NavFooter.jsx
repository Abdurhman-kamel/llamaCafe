import { SOCIAL_LINKS } from '@/components/constants/navbar';

export default function NavFooter() {
    return (
        <div className="w-full">
            <div className="border-t border-white/10 pt-6 md:pt-7">

                {/* INQUIRIES Section */}
                <div className="font-label mb-6 md:mb-8">
                    <p className="mb-3 text-[10px] tracking-[0.3em] text-white/40 uppercase">
                        INQUIRIES
                    </p>
                    <a
                        href="mailto:hello@studio.com"
                        className="block break-all font-heading text-[clamp(1rem,min(1.5vw,3vh),1.125rem)] tracking-wide text-white/85 transition-colors hover:text-white"
                    >
                        hello@studio.com
                    </a>
                </div>

                {/* SOCIAL LINKS Section */}
                <div className="font-label">
                    <p className="mb-3 text-[10px] tracking-[0.3em] text-white/40 uppercase">
                        SOCIALS
                    </p>
                    <ul className="flex flex-wrap gap-4 text-xs tracking-[0.2em] uppercase text-white/70">
                        {SOCIAL_LINKS.map((link) => (
                            <li key={link.id || link.key || link.label}>
                                <a
                                    href={link.path || link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-white"
                                >
                                    {link.label || link.key}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}