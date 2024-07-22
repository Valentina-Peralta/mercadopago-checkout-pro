import { MercadoPagoConfig, Preference } from 'mercadopago';

// This function handles POST requests to create a payment preference in MercadoPago.
export const POST = async (request) => {
    const { title, quantity, name, price } = await request.json();

    // Initialize the MercadoPago client with the access token.
    const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
    const URL = process.env.URL;

    try {
        // Define the preference body, which includes payment methods, items, and URLs for redirection after payment.
        const body = {
            payment_methods: {
                excluded_payment_methods: [], // No excluded payment methods.
                excluded_payment_types: [], // No excluded payment types.
                installments: 12 // Maximum number of installments.
            },
            items: [{
                title: title, // Title of the item.
                quantity: Number(quantity), // Quantity of the item.
                unit_price: Number(price), // Price per unit.
                currency_id: "UY" // Currency code.
            }],
            back_urls: {
                success: `${URL}`, // URL to redirect on successful payment.
                failure: `${URL}`, // URL to redirect on payment failure.
                pending: `${URL}` // URL to redirect if payment is pending.
            },
            auto_return: "approved", // Automatically return to the success URL if payment is approved.
            notification_url: `${URL}/api/notify` // URL to receive payment notifications.
        };

        // Create a new payment preference using the defined body.
        const preference = new Preference(client);
        const result = await preference.create({ body });

        // Return the preference ID in the response.
        return new Response(JSON.stringify(result.id), { status: 201 });
    } catch (error) {
        // Handle any errors by returning a failure response.
        return new Response("failed to create preference");
    }
}
