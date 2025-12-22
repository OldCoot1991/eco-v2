"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button";
import styles from "./BentoGrid.module.css";
import { GridItemProps } from "@/types/bentoGrid.types";
import { bentoGridItems } from "@/data/bentoGrid.data";

const GridItem = ({
    title,
    description,
    link,
    className = "",
    bgImage,
    btnVariant,
    borderColors = "conic-gradient(from 0deg, transparent 0 340deg, #000 360deg)",
    gradientClass,
    colorClass
}: GridItemProps) => {
    return (
        <div
            className={styles.gridItemWrapper}
            style={{ '--border-gradient': borderColors } as React.CSSProperties}
        >
            <div
                className={`${styles.gridItem} ${className} ${gradientClass ? styles[gradientClass] : ''} ${colorClass ? styles[colorClass] : ''}`}
            >

                {bgImage && (
                    <>
                        <div
                            className={styles.bgImage}
                            style={{ backgroundImage: `url(${bgImage})` }}
                        />
                        <div className={styles.overlay} />
                    </>
                )}

                <div className={styles.content}>
                    <div>
                        <h3 className={styles.title}>
                            {title}
                        </h3>
                        <p className={styles.description}>
                            {description}
                        </p>
                    </div>

                    {link && (
                        <div className={styles.buttonWrapper}>
                            <Button href={link} variant={btnVariant || "primary"} size="sm" icon={<FaArrowRight />}>
                                Подробнее
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function BentoGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {bentoGridItems.map((item) => (
                    <GridItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        className={item.className}
                        gradientClass={item.gradientClass}
                        colorClass={item.colorClass}
                        borderColors={item.borderColors}
                    />
                ))}
            </div>
        </section>
    );
}
