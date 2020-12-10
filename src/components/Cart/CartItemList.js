// import React from 'react';
// import { FlatList } from 'react-native';

// import CartItem from './CartItem';
// import CartQtyButton from '../UI/CartQtyButton';

// const CartItemList = ({ cartItems, navigation }) => {
//   const renderCartItem = ({ item }) => {
//     return (
//       <CartItem
//         item={item}
//         onSelect={() => {
//           navigation.navigate({
//             routeName: 'ProductDetail',
//             params: { itemId: item.id, itemName: item.title },
//           });
//           {
//             /* <CartQtyButton quantity={item.quantity} itemId={item.id} /> */
//           }
//         }}
//       />
//     );
//   };

//   return <FlatList data={cartItems} renderItem={renderCartItem} />;
// };

// export default CartItemList;
