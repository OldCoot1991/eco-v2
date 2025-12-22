"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaSnowflake, FaRegSnowflake, FaMoon, FaStar } from "react-icons/fa";

type FlakeType = 'dot' | 'filled' | 'regular';

interface Flake {
    id: number;
    left: string;
    animationDuration: string;
    animationDelay: string;
    opacity: number;
    size: number;
    type: FlakeType;
}

// Canvas Firework Types
class Firework {
    x: number;
    y: number;
    sx: number;
    sy: number;
    tx: number;
    ty: number;
    distanceToTarget: number;
    distanceTraveled: number = 0;
    coordinates: [number, number][];
    coordinateCount: number = 3;
    angle: number;
    speed: number = 2;
    acceleration: number = 1.05;
    brightness: number;
    targetRadius: number = 1;
    hue: number;

    constructor(sx: number, sy: number, tx: number, ty: number, hue: number) {
        this.x = sx;
        this.y = sy;
        this.sx = sx;
        this.sy = sy;
        this.tx = tx;
        this.ty = ty;
        this.hue = hue;

        this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
        this.coordinates = [];
        this.coordinateCount = 3;

        // Populate initial coordinates
        while (this.coordinateCount--) {
            this.coordinates.push([this.x, this.y]);
        }

        this.angle = Math.atan2(ty - sy, tx - sx);
        this.brightness = Math.random() * 50 + 50;
    }

    update(index: number, fireworks: Firework[], particleSpawner: (x: number, y: number, hue: number) => void) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);

        // Speed up
        this.speed *= this.acceleration;

        const vx = Math.cos(this.angle) * this.speed;
        const vy = Math.sin(this.angle) * this.speed;

        this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);

        if (this.distanceTraveled >= this.distanceToTarget) {
            particleSpawner(this.tx, this.ty, this.hue);
            fireworks.splice(index, 1);
        } else {
            this.x += vx;
            this.y += vy;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = `hsl(${this.hue}, 100%, ${this.brightness}%)`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    coordinates: [number, number][];
    coordinateCount: number = 5;
    alpha: number = 1;
    decay: number;
    hue: number;
    brightness: number;
    gravity: number = 0.05; // Gravity effect
    friction: number = 0.95; // Air resistance

    constructor(x: number, y: number, hue: number) {
        this.x = x;
        this.y = y;
        this.hue = hue;
        this.coordinates = [];
        this.coordinateCount = 5;

        while (this.coordinateCount--) {
            this.coordinates.push([this.x, this.y]);
        }

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 2; // Increased Speed: 2-9

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.friction = 0.96; // Slightly less friction for better spread
        this.gravity = 0.04; // Slightly lower gravity for airier explosion

        this.hue = Math.random() * 20 + hue - 10;
        this.brightness = Math.random() * 50 + 50;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.015; // Fade speed
    }

    update(index: number, particles: Particle[]) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);

        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;

        this.alpha -= this.decay;

        if (this.alpha <= this.decay) {
            particles.splice(index, 1);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
        ctx.lineWidth = 1; // Thin elegant particles
        ctx.stroke();
    }
}

function calculateDistance(x1: number, y1: number, x2: number, y2: number) {
    const xDistance = x2 - x1;
    const yDistance = y1 - y2;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

const SnowEffect = () => {
    const [snowflakes, setSnowflakes] = useState<Flake[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Snowflakes setup (Keep existing logic)
        const flakes = Array.from({ length: 150 }).map((_, i) => {
            const typeRandom = Math.random();
            const type: FlakeType = typeRandom > 0.5 ? 'filled' : 'regular';

            const duration = Math.random() * 10 + 5;

            return {
                id: i,
                left: `${Math.random() * 100}%`,
                animationDuration: `${duration}s`,
                animationDelay: `-${Math.random() * duration}s`,
                opacity: Math.random() * 0.7 + 0.3,
                size: Math.random() * 5 + 3,
                type,
            };
        });
        setSnowflakes(flakes);
    }, []);

    // Canvas Loop
    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        let cw = window.innerWidth;
        let ch = window.innerHeight;

        canvas.width = cw;
        canvas.height = ch;

        const fireworks: Firework[] = [];
        const particles: Particle[] = [];

        // Timer for auto launch
        let timerTotal = 25; // Faster: 0.4s (approx)
        let timerTick = 0;

        // Spawner
        const createParticles = (x: number, y: number, hue: number) => {
            const particleCount = 80; // Denser explosion
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(x, y, hue));
            }
        };

        const loop = () => {
            // Clear canvas but leave a little trail for "motion blur" feel?
            // Actually standard clear is better for transparent overlay
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Fade out trails
            ctx.fillRect(0, 0, cw, ch);

            ctx.globalCompositeOperation = 'lighter';

            // Loop Fireworks
            for (let i = fireworks.length - 1; i >= 0; i--) {
                fireworks[i].draw(ctx);
                fireworks[i].update(i, fireworks, createParticles);
            }

            // Loop Particles
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].draw(ctx);
                particles[i].update(i, particles);
            }

            // Launch Logic
            if (timerTick >= timerTotal) {
                // Launch properties
                const startX = cw / 2 + (Math.random() * cw * 0.5) - (cw * 0.25); // Launch from center-ish area bottom
                const startY = ch;
                const targetX = Math.random() * cw;
                const targetY = Math.random() * ch * 0.5; // Top half of screen
                const randomHue = Math.floor(Math.random() * 360);

                fireworks.push(new Firework(startX, startY, targetX, targetY, randomHue));
                timerTick = 0;
                // Randomize next interval
                timerTotal = Math.random() * 20 + 10; // 10-30 frames interval
            } else {
                timerTick++;
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        const handleResize = () => {
            cw = window.innerWidth;
            ch = window.innerHeight;
            canvas.width = cw;
            canvas.height = ch;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [mounted]);

    if (!mounted) return null;

    return createPortal(
        <div className="fixed inset-0 pointer-events-none z-100 overflow-hidden bg-black transition-colors duration-700 fade-in"
            style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 15%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 15%)'
            }}
        >
            {/* Greeting Overlay Container - Fades out after 10s */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-110 animate-fadeOutContainer">

                {/* Main Greeting: Typewriter Effect */}
                <div className="flex space-x-1 md:space-x-2">
                    {"С Новым Годом!".split("").map((char, index) => (
                        <span
                            key={index}
                            className="text-3xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-500 drop-shadow-[0_0_25px_rgba(255,215,0,0.6)] animate-letterIn font-elegant"
                            style={{ animationDelay: `${index * 0.15 + 0.5}s` }} // Slow appearance
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div>

                {/* Sub Greeting: Fades in after main text */}
                <h2
                    className="mt-8 text-xl md:text-4xl text-white/90 font-light tracking-widest drop-shadow-md animate-subTextIn font-elegant"
                    style={{ animationDelay: "3.5s" }}
                >
                    Пусть сбудутся все мечты!
                </h2>

            </div>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
                
                .font-elegant {
                    font-family: 'Tenor Sans', sans-serif;
                    text-transform: uppercase; /* Tenor Sans looks best in caps for headers */
                    letter-spacing: 0.05em;
                }

                @keyframes letterIn {
                    0% { opacity: 0; transform: translateY(20px) scale(0.8); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }

                @keyframes subTextIn {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeOutContainer {
                    0%, 90% { opacity: 1; }
                    100% { opacity: 0; }
                }

                .animate-letterIn {
                    animation: letterIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                    opacity: 0; /* Hidden initially */
                }

                .animate-subTextIn {
                    animation: subTextIn 1.5s ease-out forwards;
                    opacity: 0; /* Hidden initially */
                }

                .animate-fadeOutContainer {
                    animation: fadeOutContainer 9s linear forwards; /* 9s total duration (appear + hold + fade) */
                }

                /* ... existing styles ... */
                @keyframes fall {
                    0% { transform: translateY(-10vh) rotate(0deg); }
                    100% { transform: translateY(110vh) rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1) rotate(-100deg); opacity: 1; text-shadow: 0 0 20px rgba(255, 255, 200, 0.5); }
                    50% { transform: scale(1.05) rotate(-100deg); opacity: 0.9; text-shadow: 0 0 30px rgba(255, 255, 200, 0.8); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                }
                .fade-in { animation: fadeIn 0.5s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `}</style>

            {/* Crescent Moon & Star */}
            <div className="absolute top-10 right-10 w-20 h-20">
                <div
                    className="absolute inset-0 text-[#ffffe0] text-6xl drop-shadow-[0_0_15px_rgba(255,255,224,0.6)]"
                    style={{
                        animation: 'pulse 4s ease-in-out infinite',
                    }}
                >
                    <FaMoon />
                </div>
                <div
                    className="absolute top-8 right-10 text-yellow-200 text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{ animation: 'twinkle 2s ease-in-out infinite' }}
                >
                    <FaStar />
                </div>
            </div>

            {/* Canvas Layer for Fireworks */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Snowflakes (DOM Layer) */}
            {snowflakes.map((flake) => {
                const style = {
                    left: flake.left,
                    opacity: flake.opacity,
                    animation: `fall ${flake.animationDuration} linear infinite`,
                    animationDelay: flake.animationDelay,
                };

                return (
                    <div
                        key={flake.id}
                        className="absolute top-0 text-white/80"
                        style={{
                            ...style,
                            fontSize: `${flake.size + 12}px`,
                        }}
                    >
                        {flake.type === 'filled' ? <FaSnowflake /> : <FaRegSnowflake />}
                    </div>
                );
            })}
        </div>,
        document.body
    );
};

export default SnowEffect;
