import { SberbankLogo, TBankLogo } from "@/components/ui/BankLogos/BankLogos";

export interface Partner {
    id: string;
    name: string;
    description: string;
    icon: typeof SberbankLogo | typeof TBankLogo;
    iconClass: string;
}

export const partners: Partner[] = [
    {
        id: "sberbank",
        name: "Сбербанк Онлайн",
        description: "Оплата без комиссии",
        icon: SberbankLogo,
        iconClass: 'partnerIconGreen'
    },
    {
        id: "tbank",
        name: "Т-Банк",
        description: "Быстрые платежи",
        icon: TBankLogo,
        iconClass: 'partnerIconYellow'
    }
];
