export const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};
export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export const detailLeft = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};
export const detailRight = {
    hidden: { x: 20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};