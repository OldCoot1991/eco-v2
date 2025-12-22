export interface GridItemProps {
    title: string;
    description: string;
    link?: string;
    className?: string;
    bgImage?: string;
    btnVariant?: "primary" | "secondary" | "outline" | "ghost";
    borderColors?: string;
    gradientClass?: string;
    colorClass?: string;
}

export interface GridItemData {
    id: number;
    title: string;
    description: string;
    link: string;
    className?: string;
    gradientClass?: string;
    colorClass?: string;
    borderColors: string;
}
