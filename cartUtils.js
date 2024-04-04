// cartUtils.js

// Function to get the user's email after authentication
const getUserEmail = () => {
    // Your logic to get user's email from authentication system
    return "user@example.com"; // Example user email
};

const baseURL = "https://your-crud-api.com/221d16e1aa154a08bdf4b2d3dcba01bb"; // Replace this with your CRUD API base URL

// Function to add a movie to the cart
export const addToCart = async (movie) => {
    const userEmail = getUserEmail();
    const endpoint = `${baseURL}/cart/${userEmail}`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });

        if (!response.ok) {
            throw new Error('Failed to add movie to cart');
        }

        console.log('Movie added to cart successfully');
    } catch (error) {
        console.error('Error adding movie to cart:', error);
    }
};

// Function to get cart items
export const getCartItems = async () => {
    const userEmail = getUserEmail();
    const endpoint = `${baseURL}/cart/${userEmail}`;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error('Failed to fetch cart items');
        }

        const cartItems = await response.json();
        console.log('Cart items:', cartItems);
        return cartItems;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        return [];
    }
};
