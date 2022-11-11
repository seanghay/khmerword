/**
 * Convert an integer into Khmer word.
 * @param {number} value 
 * @param {string | undefined} sep separator
 * @returns {string}
 */
export declare function integer(value: number, sep?: string): string;

/**
 * Convert a decimal into Khmer word.
 * @param {number} value 
 * @param {string | undefined} sep separator
 * @param {string | undefined} del delimiter
 * @returns {string}
 */
export declare function decimal(
	value: string,
	sep?: string,
	del?: string
): string;
