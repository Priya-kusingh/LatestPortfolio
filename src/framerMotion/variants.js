export const fadeIn = (direction = "up", delay = 0) => {
    return {
        hidden: {
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.50, 0.50, 0.50, 0.75], // Corrected 'else' to 'ease'
            },
        },
    };
};