import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCallbackForm } from "@/contexts/callbackFormContext";
import React from "react";

export default function CallBackPage() {
  const { formData, updateFormData, handleSubmit, isLoading } =
    useCallbackForm();

  return (
    <>
      <Header />
      <div className="min-h-screen overflow-x-hidden flex flex-col lg:py-5 mt-10 lg:flex-row items-center justify-center pb-5 sm:py-10 ">
        <div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-btn_hover mt-6 font-heavitas">
              Get A Call.
            </h1>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-btn_hover font-heavitas">
              Now.
            </h1>
          </div>
        </div>
        <div>
          <form class="login__form">
            <div>
              <h1 class="login__title">
                <span>Welcome</span>
              </h1>

              <p class="login__description">
                Welcome! Please write your details.
              </p>
            </div>

            <div>
              <div class="login__inputs">
                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                    }}
                    for="name"
                    class="login__label"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => updateFormData("name", e.target.value)}
                    value={formData.name}
                    class="login__input"
                    type="name"
                    id="email"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                    }}
                    for="email"
                    class="login__label"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => updateFormData("email", e.target.value)}
                    value={formData.email}
                    class="login__input"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                    }}
                    for="name"
                    class="login__label"
                  >
                    Phone
                  </label>
                  <input
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    value={formData.phone}
                    class="login__input"
                    type="tel"
                    id="email"
                    placeholder="Enter your Mobile Number"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <div class="login__buttons">
                <button
                  disabled={isLoading}
                  onClick={handleSubmit}
                  style={{
                    fontWeight: "bold",
                  }}
                  class="login__button"
                >
                  {isLoading ? "Loading" : "Log In"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
