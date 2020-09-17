const base = 8;

/**
 * Returns the size which is a multiple of the base of 8
 *
 * @param level
 *    0.5 (4), 1 (8), 1.5 (12), 2 (16), 2.5 (20), 3 (24),
 *    4 (32), 5 (40), 6 (48), 7 (56), 8 (64), 9 (72), 10 (80)
 */
export const size = (level) => level * base;
