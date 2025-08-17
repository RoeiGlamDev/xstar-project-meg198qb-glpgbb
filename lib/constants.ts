export const BRAND_NAME = "CleanSSR";
export const PRIMARY_COLOR = "#800080"; // Purple
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Defines the configuration settings for the CleanSSR application.
 * This includes branding information and site-wide constants.
 * 
 * @module constants
 */

/
 * Interface representing the general site configuration for CleanSSR.
 */
export interface SiteConfig {
    brandName: string;
    primaryColor: string;
    secondaryColor: string;
    slogan: string;
}

/
 * The configuration object for CleanSSR.
 * This object holds important branding and design constants.
 */
export const siteConfig: SiteConfig = {
    brandName: BRAND_NAME,
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    slogan: "Technology-Driven Cleaning Solutions",
};

/
 * Interface representing a customer review.
 */
export interface CustomerReview {
    customerName: string;
    reviewText: string;
    rating: number; // Rating out of 5
}

/
 * Sample customer reviews for CleanSSR.
 */
export const customerReviews: CustomerReview[] = [
    {
        customerName: "Alice Johnson",
        reviewText: "CleanSSR transformed our office space with their exceptional cleaning technology!",
        rating: 5,
    },
    {
        customerName: "Mark Smith",
        reviewText: "The team at CleanSSR is professional and efficient. Highly recommend their services!",
        rating: 4,
    },
    {
        customerName: "Sandra Lee",
        reviewText: "Impressed by the technology used in their cleaning process. Worth every penny!",
        rating: 5,
    },
];