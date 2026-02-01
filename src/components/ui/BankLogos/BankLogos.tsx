import { bankLogos } from './bankLogosData';

interface BankLogoProps {
    name: string;
    className?: string;
}

export const BankLogo = ({ name, className }: BankLogoProps) => {
    const logo = bankLogos.find(l => l.name === name);

    if (!logo) return null;

    return (
        <img
            src={logo.src}
            alt={logo.alt}
            className={className}
            style={{ width: '96px', height: 'auto' }}
        />
    );
};

export const SberbankLogo = ({ className }: { className?: string }) => (
    <BankLogo name="Sberbank" className={className} />
);

export const TBankLogo = ({ className }: { className?: string }) => (
    <BankLogo name="TBank" className={className} />
);

