import { useState, useMemo } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { useCart } from "../../hooks/CartContext";

function ShoppingCart() {
  const [show, setShow] = useState(false);
  const { cart, addToCart, removeFromCart, setCart, reduceFromCart } =
    useCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Tổng số lượng sản phẩm trong giỏ
  const totalItems = useMemo(
    () => cart.reduce((sum, product) => sum + product.quantity, 0),
    [cart]
  );

  // Tính tổng tiền
  const totalPrice = useMemo(
    () =>
      cart.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [cart]
  );
  return (
    <>
      {/* Nút mở modal */}
      <Button
        variant="primary"
        onClick={handleShow}
        className="position-relative"
      >
        🛒 Cart
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
            {totalItems}
          </span>
        )}
      </Button>

      {/* Modal Giỏ Hàng */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart ({totalItems} items)</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {cart.length === 0 ? (
            <p className="text-center text-muted">🛒 Your cart is empty</p>
          ) : (
            <>
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="d-flex align-items-center mb-3 border-bottom pb-2"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={50}
                    height={50}
                    rounded
                    className="me-3"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{product.title}</h6>
                    <p className="text-muted mb-0">⏳ {product.time}</p>
                    <strong>
                      ${(product.price * product.quantity).toFixed(2)}
                    </strong>
                  </div>
                  {/* Điều chỉnh số lượng */}
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => reduceFromCart(product.id)}
                    >
                      ➖
                    </Button>
                    <span className="mx-2">{product.quantity}</span>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => addToCart(product)}
                    >
                      ➕
                    </Button>
                  </div>
                  {/* Nút xóa */}
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => removeFromCart(product.id)}
                  >
                    ❌ Remove
                  </Button>
                </div>
              ))}
              {/* Hiển thị tổng tiền */}
              <div className="d-flex justify-content-between mt-3">
                <h5>Total:</h5>
                <h5 className="text-success">${totalPrice.toFixed(2)}</h5>
              </div>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShoppingCart;
