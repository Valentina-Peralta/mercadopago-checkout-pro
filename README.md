# MercadoPago Checkout Button Integration with Next.js

This repository demonstrates how to integrate the MercadoPago checkout button into a Next.js application. Follow the steps below to set up the project and implement the payment button.

## Prerequisites

- Node.js and npm installed
- A MercadoPago account

## MercadoPago Configuration

### Create a MercadoPago Account
If you don't already have a MercadoPago account, sign up [here](https://www.mercadopago.com).

### Get API Credentials
1. Navigate to the [MercadoPago Developers Dashboard](https://www.mercadopago.com.uy/developers/en/guides/).
2. Go to the "Credentials" section.
3. Copy your Public Key and Access Token.

### Set Up Environment Variables
Create a `.env.local` file in the root of your project and add your MercadoPago credentials:

```env
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=your_public_key
MERCADOPAGO_ACCESS_TOKEN=your_access_token
```
## More Information
For more details and advanced configurations, visit the [MercadoPago Documentation](https://www.mercadopago.com.uy/developers/es/docs/checkout-pro/landing).

