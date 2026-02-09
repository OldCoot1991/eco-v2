import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/shared/lib/hooks";
import { useTranslation } from "@/shared/lib/hooks/useTranslation";

export const useHeaderLogic = () => {
    const currentPath = usePathname();
    const { t } = useTranslation();
    const theme = useAppSelector((state) => state.theme.mode);
    const language = useAppSelector((state) => state.language.current);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactsOpen, setIsContactsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const handleNavigation = (path: string) => {
        // Future navigation logic can be added here
    };

    return {
        currentPath,
        t,
        theme,
        language,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isContactsOpen,
        setIsContactsOpen,
        isSettingsOpen,
        setIsSettingsOpen,
        handleNavigation
    };
};
