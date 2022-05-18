import WapperProduct from '../components/WapperProduct'
import ListProduct from '../components/Product/ListProduct'
import { motion, AnimateSharedLayout } from "framer-motion";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/index';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...[ReduxThunk, ReduxLogger, apiMiddleware])
);
export default function Home() {
  return (
    <div className='bg-search'>
      <Provider store={store}>
        <AnimateSharedLayout>
          <motion.div
            className='container mx-auto px-4 py-10'>
            <WapperProduct />
            <ListProduct />
          </motion.div>
        </AnimateSharedLayout>
      </Provider>
    </div>
  )
}
