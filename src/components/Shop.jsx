import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../state/index';
import { bindActionCreators } from 'redux';

const Shop = () => {
  const dispatch = useDispatch();
    const balance = useSelector((state) => state.amount);
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="px-4 rounded-md py-2 bg-red-500 text-white mx-2"
        onClick={() => {
          dispatch(withdrawMoney(100));
        }}
      >
        {' '}
        -{' '}
      </button>
      Update Balance  ({balance})
      <button
        className="px-4 rounded-md py-2 bg-red-500 text-white mx-2"
        onClick={() => {
          dispatch(depositMoney(100));
        }}
      >
        {' '}
        +{' '}
      </button>
    </div>
  );
};

export default Shop;
