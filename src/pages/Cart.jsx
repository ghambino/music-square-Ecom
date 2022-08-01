import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link } from 'react-router-dom'
import { incrementItem, decrementItem, removeItem } from "../redux/action";
// import { DataContext } from "../utilities/context";
import cartImg from "/assets/shared/desktop/icon-cart.svg";
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

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const pricePerUnit = cart.map((unit) => unit.price * unit.qty);
  const totalPrice = pricePerUnit.reduce((acc, num) => {
    return acc + num;
  }, 0);

  console.log(pricePerUnit)
  console.log(totalPrice);
  const commission = parseInt(((20 / 100) * totalPrice).toFixed(0));
  const sumTotal = (totalPrice + commission);

  console.log(sumTotal);

  console.log(cart);

  return (
    <>
      <Box onClick={onOpen} className="flex gap-[5px]">
        {" "}
        <img src={cartImg} alt="" />
        <span>{cart.length}</span>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="flex items-center justify-between">
            <Text>CART {"("}
            {cart.length}
            {")"}</Text>
            <button className="opacity-50 text-[14px] hover:text-brown" onClick={() => dispatch(removeItem)}>remove all</button>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            {cart.map((unit, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-[2rem]"
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
                  <button className="bg-custom-gray p-[10px] mr-[2px] font-bold" onClick={() => dispatch(decrementItem(unit.id))}>
                    -
                  </button>
                  <span className="bg-custom-gray p-[10px] mr-[2px] font-bold">
                    {unit.qty}
                  </span>
                  <button className="bg-custom-gray p-[10px] mr-[2px] font-bold" onClick={() => dispatch(incrementItem(unit.id))}>
                    +
                  </button>
                </div>
              </div>
            ))}
            <Box className="flex justify-between items-center">
              <h2 className="opacity-50 text-[15px font-medium]">Total</h2>
              <span className="font-bold text-[18px]">$ {" "}{totalPrice}</span>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Link to='/checkout' className="px-[30px] py-[15px] bg-brown text-white text-[18px] w-[100%] text-center" onClick={onClose}>
              checkout
            </Link>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cart;
