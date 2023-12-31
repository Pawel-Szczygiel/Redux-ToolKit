import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotal, getCartItems } from './features/cart/cartSlice';

function App() {
  const { cartItems, isLoading } = useSelector(store => store.cart);
  const { isOpen } = useSelector(store => store.modal)
  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(calculateTotal());
  },[cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);


  if(isLoading) {
    return (
      <div className='loading'>
        <h1>Loading</h1>
      </div>
    )
  }; 
  


  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
