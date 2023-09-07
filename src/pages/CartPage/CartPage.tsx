import { useState } from 'react';

import Button from '@/components/common/Button/Button';
// import DefaultHeader from '@/components/common/Header/DefaultHeader';
import { CartItem } from './CartItem';
import * as S from './CartPage.styles';

type CartItem = {
  brand: string;
  mainImage: string;
  name: string;
  option: string;
  price1: number;
  price2: number;
  maxQuantity: number;
  quantity: number;
  optionList: string[];
};

export function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      brand: 'BADEE',
      mainImage:
        'https://cdn.eqlstore.com/goods/EQBR/23/08/29/GPEB23082930667_0_ORGINL_1693900884820.jpg?RS=389',
      name: 'Gothic Stalk Jacquard Knit',
      option: 'Cocoa(M)',
      price1: 109000,
      price2: 98100,
      maxQuantity: 7,
      quantity: 1,
      optionList: ['Cocoa(M)', 'Cocoa(L)', 'Khaki(M)', 'Khaki(L)', 'Cream(M)', 'Cream(L)'],
    },
    {
      brand: 'ETMON',
      mainImage:
        'https://cdn.eqlstore.com/goods/EQBR/23/08/29/GQ0G23082930545_0_ORGINL_1693299492553.jpg?RS=389',
      name: 'Slit Layered Knit Bustier',
      option: 'Wine Brown(FREE)',
      price1: 89000,
      price2: 76900,
      maxQuantity: 100,
      quantity: 1,
      optionList: [
        'Wine Brown(FREE)',
        'Black(FREE)',
        'Charcoal Gray(FREE)',
        'Light Lavender(FREE)',
      ],
    },
  ]);
  const quantityChangeHandler = (index: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item, idx) => (idx === index ? { ...item, quantity: newQuantity } : item)),
    );
  };

  const optionChangeHandler = (index: number, newOption: string) => {
    setCartItems(
      cartItems.map((item, idx) => (idx === index ? { ...item, option: newOption } : item)),
    );
  };

  const handleDelete = (indexToDelete: number) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToDelete));
  };

  const handleDeleteAll = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price2 * item.quantity, 0);

  let deliveryPrice;
  if (totalPrice === 0) {
    deliveryPrice = '0원';
  } else if (totalPrice < 80000) {
    deliveryPrice = '3,000원';
  } else {
    deliveryPrice = '무료배송';
  }

  let finalTotalPrice = totalPrice;
  if (deliveryPrice === '3,000원') {
    finalTotalPrice += 3000;
  }

  return (
    <S.CartPageContainer>
      {/* <DefaultHeader text={'Cart'} /> */}
      <S.AllDelete>
        <p onClick={handleDeleteAll}>전체삭제</p>
      </S.AllDelete>
      <CartItem
        cartItems={cartItems}
        onDelete={handleDelete}
        onQuantityChange={quantityChangeHandler}
        onOptionChange={optionChangeHandler}
      />
      <S.PriceWrapper>
        <S.AllPrice>
          <p>총 상품 금액</p>
          <p>{totalPrice.toLocaleString()}원</p>
        </S.AllPrice>
        <S.DeliveryPrice>
          <p>배송비</p>
          <p>{deliveryPrice}</p>
        </S.DeliveryPrice>
        <S.Coupon>
          <p>쿠폰</p>
          <Button
            variant="outlined"
            size="xsmall"
            width="50px"
            color="#6A8DFF"
            isCircle={false}
            isFullWidth={false}
          >
            쿠폰
          </Button>
        </S.Coupon>
      </S.PriceWrapper>
      <S.GoToPay>
        <S.FinalPrice>
          <S.FinalPriceTitle>총 결제 금액</S.FinalPriceTitle>
          <S.FinalPriceValue>{finalTotalPrice.toLocaleString()}원</S.FinalPriceValue>
        </S.FinalPrice>
        <Button variant="main" size="large" isFullWidth>
          구매하기({cartItems.length})
        </Button>
      </S.GoToPay>
    </S.CartPageContainer>
  );
}
