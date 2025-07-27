// src/utils/PaymentHandler.jsx
import { loadScript } from "./loadScript";

export async function displayRazorpay( amountInRupees,) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  // 👉 normally, you’d fetch an order from your backend here
  // const data = await fetch("http://localhost:5000/razorpay", { method: "POST" }).then(t => t.json());
    const amountInPaise = amountInRupees * 100;
    console.log("Amount in Paise:", amountInPaise);
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY, // ✅ Replace with your Razorpay Key ID
    amount: amountInPaise, // in paise (50000 = ₹500)
    currency: "INR",
    name: "Urban Design",
    description: "Test Transaction",
    // order_id: data.id, // if you generated an order in backend
    handler: function (response) {
      alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
    },
    prefill: {
      name: "Rohit Adwani",
      email: "rohit@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "My address",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
