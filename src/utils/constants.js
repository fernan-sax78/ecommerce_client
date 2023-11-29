

export const ENV = {
    SERVER_HOST : "https://ecommerceserver-strapi-proj-1.up.railway.app ",
    API_URL : "https://ecommerceserver-strapi-proj-1.up.railway.app/api",
    ENDPOINTS : {
        AUTH : {
            REGISTER : "auth/local/register",
            LOGIN : "auth/local"
        },
        USERS_ME : 'users/me',
        USERS : 'users',
        PLATFORMS : 'platforms',
        ADDRESS : 'addresses',
        GAME : 'games',
        WISHLIST : "wishlists",
        PAYMENT_ORDER: 'payment-order',
        ORDER : 'orders',
    },
    TOKEN : 'token',
    CART : 'cart',
    STRIPE_TOKEN : process.env.NEXT_PUBLIC_STRIPE ,
}

