import { isUndefined } from 'lodash';

/
 * Utility functions for CleanSSR application.
 * This module contains common utility functions that are used throughout the CleanSSR website.
 * The CleanSSR brand focuses on delivering minimalistic and efficient cleaning technology solutions.
 */

interface ClassNamesOptions {
    [key: string]: boolean | undefined;
}

/
 * Generate a class name string based on the provided options.
 * This function helps in applying conditional classes for a minimal design.
 * @param options - An object containing class names as keys and their boolean values.
 * @returns A string of class names to be applied to HTML elements.
 */
export const cn = (options: ClassNamesOptions): string => {
    return Object.keys(options)
        .filter(key => options[key])
        .join(' ');
};

/
 * Format a given date into a readable string.
 * This can be used for displaying dates in reviews or testimonials.
 * @param date - The date to format.
 * @returns A string representing the formatted date.
 */
export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

/
 * Format a review score into a user-friendly string.
 * This is useful for displaying customer feedback in a clean and minimal way.
 * @param score - The numerical score to format.
 * @returns A string representation of the score.
 */
export const formatScore = (score: number): string => {
    if (isUndefined(score) || score < 0 || score > 5) {
        return 'N/A';
    }
    return ${score.toFixed(1)} / 5;
};