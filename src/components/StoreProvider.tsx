"use client";

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store';
import { initializeTheme } from '@/lib/features/theme/themeSlice';
import { initializeLanguage } from '@/lib/features/language/languageSlice';

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef<AppStore | undefined>(undefined);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    useEffect(() => {
        if (storeRef.current) {
            storeRef.current.dispatch(initializeTheme());
            storeRef.current.dispatch(initializeLanguage());
        }
    }, []);

    return storeRef.current ? <Provider store={storeRef.current}>{children}</Provider> : null;
}
