/**
 * Generate a random number, with optional floor.
 *
 * @param {number} max - Upper bound (inclusive).
 * @param {number} [floor] - Lower bound (inclusive). Defaults to `1`.
 * @returns {number} The random number.
 */
export function random(max: number, floor: number = 1): number {
  return Math.floor(Math.random() * max) + floor;
}
