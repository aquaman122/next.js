import Link from 'next/link';

export default function Cart() {
  return (
    <>
      <div>
        <h4 className='title'>상품목록</h4>
        <CartItem />
      </div>
    </>
  )
}

function CartItem() {
  const cartItem = ['cart', 'apple', 'mango'];
  const money = ['$40','$30','$20'];
  return (
    <>
    {
      cartItem.map((item, i) => {
        return (
          <div className='cart-item'>
            <p>{item}</p>
            <p>{money[i]}</p>
            <p>1개</p>
          </div>
        )
      })
    }
  </>
  )
}