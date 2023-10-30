import CartItem from "./CartItem";

const CartList = (props) => {
  const removeItemHandler = (id, event) => {
    event.preventDefault();
    props.cartCtx.removeItem(id);
  };

  const addItemHandler = (item, event) => {
    event.preventDefault();
    if(item.amount <= 19){
      props.cartCtx.addItem({ ...item, amount: 1 });
    }
  };

  const deleteItemHandler = (id, event) => {
    event.preventDefault();
    props.cartCtx.deleteItem(id);
  };

  if (props.cartCtx.items.length === 0) {
    return <p>You have no Items in the Cart</p>;
  } else {
    return (
      <ul>
        {props.cartCtx.items.map((item) => (
          <CartItem
            key={"O" + item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            size={item.size}
            onRemove={removeItemHandler.bind(null, item.id)}
            onAdd={addItemHandler.bind(null, item)}
            onDelete={deleteItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
    );
  }
};

export default CartList;
