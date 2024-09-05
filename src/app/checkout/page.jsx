import CheckoutPage from "@/pages/CheckoutPage";

const CheckoutPageWrapper = () => {
  const orderItems = [
    { name: "Silk Saree", price: 99.99 },
    // Add more items as needed
  ];

  return <CheckoutPage orderItems={orderItems} />;
};

export default CheckoutPageWrapper;