"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  X,
  Trash2,
  Plus,
  Minus,
  Tag,
  Truck,
  Star,
} from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  weight?: string;
}

interface SuggestedItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Sugarcane Jaggery Block",
      price: 281,
      originalPrice: 320,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
      weight: "900g",
    },
    {
      id: 2,
      name: "Organic Mango Pickle",
      price: 399,
      originalPrice: 450,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=100&h=100&fit=crop",
      weight: "500g",
    },
      {
      id: 3,
      name: "Organic Lemon Pickle",
      price: 566,
      originalPrice: 233,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=100&h=100&fit=crop",
      weight: "1000g",
    },
  ]);

  const suggestedItems: SuggestedItem[] = [
    {
      id: 3,
      name: "Truemato Ketchup",
      price: 129,
      originalPrice: 149,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Rajma Poha Gluten Free",
      price: 199,
      originalPrice: 225,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Organic Honey",
      price: 399,
      originalPrice: 450,
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=100&h=100&fit=crop",
      rating: 4.7,
    },
  ];

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const addSuggestedItem = (item: SuggestedItem) => {
    const cartItem: CartItem = {
      ...item,
      quantity: 1,
      weight: "250g",
    };
    setCartItems([...cartItems, cartItem]);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const freeShippingThreshold = 2500;
  const remainingForFreeShipping = Math.max(
    0,
    freeShippingThreshold - subtotal
  );
  const shippingCost = remainingForFreeShipping > 0 ? 99 : 0;
  const discount = Math.floor(subtotal * 0.1);
  const total = subtotal + shippingCost - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-gray-600" />
            <h1 className="text-xl font-semibold text-gray-800">
              Your cart • {cartItems.length} items
            </h1>
          </div>
          <X className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>

        {/* Free Shipping Progress */}
        {remainingForFreeShipping > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-green-800">
                Add ₹{remainingForFreeShipping} more for FREE Shipping!
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>₹{subtotal}</span>
              <span>₹{freeShippingThreshold}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    (subtotal / freeShippingThreshold) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-green-600" />
                <span className="text-green-700">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-orange-600" />
                <span className="text-orange-700">10% OFF</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    {item.weight && (
                      <p className="text-sm text-gray-500">{item.weight}</p>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                      <span className="font-semibold text-gray-800">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 hover:bg-gray-50 rounded-l-lg"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="px-4 py-2 font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-gray-50 rounded-r-lg"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Coupons Section */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-orange-600" />
                  <span className="font-medium text-gray-800">Coupons</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Apply →
                </button>
              </div>
            </div>

            {/* Suggested Items */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Frequently Bought Together
              </h3>

              <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                {suggestedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-36 bg-gray-50 hover:bg-white transition-colors rounded-lg border border-gray-200 hover:shadow-md p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-24 rounded-md object-cover mb-2"
                    />

                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                      {item.name}
                    </h4>

                    {item.rating && (
                      <div className="flex items-center gap-1 text-yellow-500 text-xs mb-1">
                        <Star className="w-4 h-4 fill-yellow-400" />
                        <span className="text-gray-600">{item.rating}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 mb-3">
                      {item.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                      <span className="text-sm font-semibold text-gray-800">
                        ₹{item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => addSuggestedItem(item)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-xs py-2.5 rounded-md font-medium transition-all"
                    >
                      + ADD
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 sticky top-4">
              <h3 className="font-semibold text-gray-800 mb-4">
                Order Summary
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">₹{subtotal}</span>
                </div>
                {shippingCost > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800">₹{shippingCost}</span>
                  </div>
                )}
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Discount (10%)</span>
                    <span className="text-green-600">-₹{discount}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">
                    ₹{total}
                  </span>
                  <span className="text-sm text-gray-500">Estimated total</span>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-colors mb-4">
                Checkout
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <span>🔒 Secured by</span>
                <span className="font-medium">shoplio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
