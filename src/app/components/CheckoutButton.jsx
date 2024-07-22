"use client";
import { useState, useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const CheckoutButton = () => {
    const [preferenceId, setPreferenceId] = useState(null);

    useEffect(() => {
        const createPreference = async () => {
            try {
                const response = await fetch("/api/create-preference", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: "Producto de ejemplo",
                        quantity: 1,
                        price: 1000,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setPreferenceId(data);
                }
            } catch (error) {
                console.error("Error crating preference:", error);
            }
        };

        createPreference();
    }, []);

    useEffect(() => {
        initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY, { locale: "es-UY" });
    }, []);
    useEffect(() => console.log(preferenceId), [preferenceId])
    return (
        <div>
            {preferenceId && (
                <Wallet
                    initialization={{ preferenceId }}
                    customization={{
                        texts: { valueProp: "Paga con MercadoPago" },
                        visual: {
                            buttonBackground: 'black',
                            borderRadius: '16px',
                        },
                    }}
                />
            )}
        </div>
    );
};

export default CheckoutButton;
