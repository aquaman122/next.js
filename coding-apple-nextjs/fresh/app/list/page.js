import Link from 'next/link';

export default function List() {
  const 상품 = ['tomato', 'apple', 'mango'];

  return (
    <>
      <div>
        <h4 className='title'>상품목록</h4>
        {
          상품.map((item, i) => {
            return (
              <div className='food' key={i}>
                <img src={`/food${i}.png`} className='food-img'></img>
                <h4>{item} $40</h4>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
