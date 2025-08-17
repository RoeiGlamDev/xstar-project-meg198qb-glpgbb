import { Review } from './reviews';

/
 * Interface representing a service offered by CleanSSR.
 * It includes a title, description, and price for the service.
 */
export interface Service {
    id: string;
    title: string;
    description: string;
    price: number; // Price in USD
}

/
 * Interface representing a customer of CleanSSR.
 * It includes a name, email, and a list of reviews given by the customer.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    reviews: Review[];
}

/
 * Interface representing the overall structure of the CleanSSR application.
 * It includes a list of services and a list of customers.
 */
export interface CleanSSRApp {
    services: Service[];
    customers: Customer[];
}

/
 * Constants for CleanSSR branding and design.
 */
export const CleanSSRBranding = {
    brandName: "CleanSSR",
    primaryColor: "#800080", // Purple
    secondaryColor: "#FFFFFF", // White
    minimalDesign: true,
};

/
 * Sample data for services offered by CleanSSR.
 * This data can be used to populate the service offerings on the website.
 */
export const sampleServices: Service[] = [
    {
        id: "1",
        title: "Home Cleaning",
        description: "Comprehensive cleaning service for your home, ensuring every corner is spotless.",
        price: 150,
    },
    {
        id: "2",
        title: "Office Cleaning",
        description: "Professional office cleaning service to maintain a clean and productive work environment.",
        price: 200,
    },
    {
        id: "3",
        title: "Deep Cleaning",
        description: "In-depth cleaning service that tackles all the hard-to-reach areas in your space.",
        price: 300,
    },
];

/
 * Sample data for customers of CleanSSR.
 * This data can be used to showcase customer reviews on the website.
 */
export const sampleCustomers: Customer[] = [
    {
        id: "1",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        reviews: [
            {
                rating: 5,
                comment: "Amazing service! My home has never looked better.",
                date: new Date("2023-08-15"),
            },
        ],
    },
    {
        id: "2",
        name: "Bob Smith",
        email: "bob.smith@example.com",
        reviews: [
            {
                rating: 4,
                comment: "Very professional and thorough. Will use again.",
                date: new Date("2023-09-10"),
            },
        ],
    },
];