import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import orderConfirm from "/assets/checkout/icon-order-confirmation.svg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const pricePerUnit = cart.map((unit) => unit.price * unit.qty);

  const totalPrice = pricePerUnit.reduce((acc, num) => {
    return acc + num;
  }, 0);

  const shippingFee = 50;

  const commission = parseInt(((20 / 100) * totalPrice).toFixed(0));

  const grandTotal = totalPrice + shippingFee + commission;

  const cartIndexItem = cart[0];

  return (
    <div className="bg-custom-gray pb-[56px]">
      <div className="px-[24px] md:px-[40px] lg:px-[165px] pt-[60px]">
        <Link to="/" className="hover:text-brown">
          Go Back
        </Link>
        <div className="w-[100%] my-[38px] flex flex-col gap-4 lg:flex-row lg:gap-6 items-start">
          <div className="w-[100%] lg:w-[65%] bg-white px-[24px] py-[31px] lg:px-[48px] lg:py-[54px] rounded">
            <h1 className="uppercase font-bold text-[28px] md:text-[32px] tracking-[2px] leading-[36px] mb-[41px]">
              checkout
            </h1>
            <h3 className="mb-4 font-bold text-[13px] uppercase text-brown">
              billing details
            </h3>
            <div className=" grid md:grid-cols-2 md:grid-rows-2 gap-4 mb-[53px]">
              <div className="flex flex-col gap-[9px]">
                <label htmlFor="name" className="font-bold text-[12px]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Alexei Ward"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none "
                />
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="font-bold text-[12px]">
                    Email Address
                  </label>
                  <span></span>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="alexei@mail.com"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-[9px]">
                <label htmlFor="contact" className="font-bold text-[12px]">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="contact"
                  placeholder="+1 202-555-0136"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none"
                />
              </div>
            </div>
            <h3 className="mb-4 font-bold text-[13px] uppercase text-brown">
              shipping info
            </h3>
            <div className="grid md:grid-cols-2 md:grid-rows-3 gap-4 mb-[53px]">
              <div className="flex flex-col gap-[9px] md:col-span-2">
                <label htmlFor="address" className="font-bold text-[12px]">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="1137 Williams Avenue"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-[9px]">
                <label htmlFor="zip" className="font-bold text-[12px]">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip"
                  placeholder="100001"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-[9px]">
                <label htmlFor="city" className="font-bold text-[12px]">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="New York"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-[9px]">
                <label htmlFor="country" className="font-bold text-[12px]">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="United States"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none"
                />
              </div>
            </div>
            <h3 className="mb-4 font-bold text-[13px] uppercase text-brown">
              payment details
            </h3>
            <div className="grid md:grid-cols-2 md:grid-rows-3 gap-4 mb-[5px]">
              <div className="row-span-2">
                <h2 className="font-bold">Payment Method</h2>
              </div>
              <div className="border-2 border-input-gray rounded py-3 md:py-0 pl-6 flex gap-2 items-center">
                <input
                  type="radio"
                  name="e-money"
                  id="e-money"
                  checked
                  className="bg-brown"
                />
                <label htmlFor="e-money">e-Money</label>
              </div>
              <div className="border-2 border-input-gray rounded py-3 md:py-0 pl-6 flex gap-2 items-center">
                <input type="radio" name="cod" id="cod" />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
              <div className="flex flex-col gap-[9px]">
                <label htmlFor="e-number" className="font-bold text-[12px]">
                  e-Money Number
                </label>
                <input
                  type="number"
                  id="e-number"
                  placeholder="238521993"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-[9px]">
                <label htmlFor="e-pin" className="font-bold text-[12px]">
                  e-Money Pin
                </label>
                <input
                  type="number"
                  id="e-pin"
                  placeholder="6891"
                  className="border-2 border-input-gray rounded py-3 pl-6 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className=" w-[100%] lg:w-[35%] bg-white px-[33px] py-[32px]">
            <h2 className="mb-[2rem] font-bold text-[18px] uppercase">
              Summary
            </h2>
            <div>
              {cart.map((unit, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start mb-[1.5rem]"
                >
                  <div className="flex items-center gap-[1rem]">
                    <div>
                      <img
                        src={unit.image.desktop}
                        alt=""
                        className="h-[64px] w-[64px]"
                      />
                    </div>
                    <div>
                      <h2 className="uppercase font-bold mb-[2px]">
                        {unit.slug.split("-")[0]}
                      </h2>
                      <p className="uppercase font-medium">$ {unit.price}</p>
                    </div>
                  </div>

                  <div>
                    <p>x{unit.qty}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-[1rem] flex items-center justify-between">
              <p className="opacity-40 uppercase text-[15px]">Total</p>
              <p className="font-bold text-[18px]">$ {totalPrice}</p>
            </div>
            <div className="my-[1rem] flex items-center justify-between">
              <p className="opacity-40 uppercase text-[15px]">shipping</p>
              <p className="font-bold text-[18px]">$ {shippingFee}</p>
            </div>
            <div className="my-[1rem] flex items-center justify-between">
              <p className="opacity-40 uppercase text-[15px]">
                vat {"("}included{")"}
              </p>
              <p className="font-bold text-[18px]">$ {commission}</p>
            </div>
            <div className="my-[1.5rem] flex items-center justify-between">
              <p className="opacity-40 uppercase text-[15px]">grand total</p>
              <p className="font-bold text-[18px] text-brown">$ {grandTotal}</p>
            </div>

            <div>
              <button
                className="bg-brown uppercase w-[100%] text-white font-bold text-[13px] py-[15px]"
                onClick={onOpen}
              >
                continue {"&"} pay
              </button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader></ModalHeader>
                  <ModalBody>
                    <Box>
                      <img src={orderConfirm} alt="" />
                    </Box>
                    <h2 className="font-bold text-[32px] w-[67%] my-[1rem]">
                      THANK YOU FOR YOUR ORDER
                    </h2>
                    <p className="opacity-50 mb-[2rem]">
                      You will receive an email confirmation shortly.
                    </p>
                    <div className="w-[100%] flex mb-2">
                      <div className="w-[65%] bg-custom-gray rounded px-4">
                        <div className="flex justify-between items-center mb-[.5rem]">
                          <div className="flex items-center">
                            <div>
                              <img
                                src={cartIndexItem.image.desktop}
                                alt=""
                                className="h-[60px] w-[60px]"
                              />
                            </div>
                            <div>
                              <h2 className="uppercase font-bold mb-[2px] text-[14px]">
                                {cartIndexItem.slug.split("-")[0]}
                              </h2>
                              <p className="uppercase font-medium text-[15px]">
                                $ {cartIndexItem.price}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-[14px]">x{cartIndexItem.qty}</p>
                          </div>
                        </div>
                        <hr />
                        <p className="text-center text-[14px] py-2">
                          {cart.length >= 2
                            ? `and ${cart.length - 1} other item(s)`
                            : " "}
                        </p>
                      </div>
                      <div className=" flex justify-center items-center w-[35%] bg-black text-white text-center rounded">
                        <div>
                          <h2 className="uppercase text-[14px] opacity-70 font-bold">
                            grand total
                          </h2>
                          <p>$ {grandTotal}</p>
                        </div>
                      </div>
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    <Link
                      to="/"
                      className="px-[30px] py-[10px] bg-brown text-white text-[18px] w-[100%] text-center uppercase font-bold"
                      onClick={onClose}
                    >
                      back to home
                    </Link>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
