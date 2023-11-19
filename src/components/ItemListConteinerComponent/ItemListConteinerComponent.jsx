import React from 'react'
import { Card } from 'react-bootstrap'

const ItemListConteinerComponent = ({ products }) => {
  // Manejo de Casos Nulos
  if (!products) {
    return <div>Cargando...</div>;
  }

  // Manejo de Errores
  if (!Array.isArray(products)) {
    return <div>Error: Los productos no son válidos</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => (
        <Card key={product.id} style={{ width: "18rem", margin: 20, height: "500px" }}>
          {/* Asegurarse de que haya una imagen antes de intentar mostrarla */}
          {product.thumbnail && <Card.Img variant="top" src={product.thumbnail} />}
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ItemListConteinerComponent;