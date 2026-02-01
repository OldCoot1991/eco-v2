"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface CustomScrollbarProps {
    containerRef: React.RefObject<HTMLElement | null>;
    className?: string;
    thumbClassName?: string;
    trackClassName?: string;
}

export const CustomScrollbar: React.FC<CustomScrollbarProps> = ({
    containerRef,
    className = "",
    thumbClassName = "",
    trackClassName = ""
}) => {
    const [showScroll, setShowScroll] = useState(false);
    const [thumbWidth, setThumbWidth] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    const updateScrollState = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const { clientWidth, scrollWidth, scrollLeft: currentScrollLeft } = container;
        const isScrollable = scrollWidth > clientWidth;

        setShowScroll(isScrollable);

        if (isScrollable) {
            const ratio = clientWidth / scrollWidth;
            const newThumbWidth = Math.max(ratio * 100, 10);
            setThumbWidth(newThumbWidth);

            const maxScroll = scrollWidth - clientWidth;
            const scrollPercentage = maxScroll > 0 ? (currentScrollLeft / maxScroll) * 100 : 0;
            setScrollLeft(scrollPercentage);
        }
    }, [containerRef]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (!isDragging.current) {
                updateScrollState();
            }
        };

        const observer = new ResizeObserver(updateScrollState);
        observer.observe(container);
        window.addEventListener('resize', updateScrollState);
        container.addEventListener('scroll', handleScroll);

        updateScrollState();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateScrollState);
            container.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef, updateScrollState]);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
        const container = containerRef.current;
        if (container) startScrollLeft.current = container.scrollLeft;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        e.preventDefault();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        isDragging.current = true;
        startX.current = e.touches[0].clientX;
        const container = containerRef.current;
        if (container) startScrollLeft.current = container.scrollLeft;

        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging.current || !containerRef.current || !trackRef.current) return;

        const container = containerRef.current;
        const track = trackRef.current;
        const { scrollWidth, clientWidth } = container;

        const trackWidth = track.clientWidth;
        const maxScroll = scrollWidth - clientWidth;

        const thumbWidthPx = (trackWidth * thumbWidth) / 100;
        const availableTrack = trackWidth - thumbWidthPx;

        if (availableTrack <= 0) return;

        const deltaX = e.clientX - startX.current;
        const scrollDelta = (deltaX / availableTrack) * maxScroll;

        container.scrollLeft = startScrollLeft.current + scrollDelta;
    }, [thumbWidth]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isDragging.current || !containerRef.current || !trackRef.current) return;

        const container = containerRef.current;
        const track = trackRef.current;
        const { scrollWidth, clientWidth } = container;

        const trackWidth = track.clientWidth;
        const maxScroll = scrollWidth - clientWidth;

        const thumbWidthPx = (trackWidth * thumbWidth) / 100;
        const availableTrack = trackWidth - thumbWidthPx;

        if (availableTrack <= 0) return;

        const deltaX = e.touches[0].clientX - startX.current;
        const scrollDelta = (deltaX / availableTrack) * maxScroll;

        container.scrollLeft = startScrollLeft.current + scrollDelta;
    }, [thumbWidth]);

    const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
    };

    if (!showScroll) return null;

    return (
        <div
            className={`w-full h-3 mt-2 relative touch-none select-none ${className}`}
            ref={trackRef}
        >
            <div className={`absolute top-0 left-0 w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 ${trackClassName}`} />

            <div
                className={`absolute top-0 h-full rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors cursor-pointer ${thumbClassName}`}
                style={{
                    width: `${thumbWidth}%`,
                    left: `calc(${scrollLeft}% - (${scrollLeft} * ${thumbWidth / 100}%))` // Correct math to keep inside bounds
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            />
        </div>
    );
};
