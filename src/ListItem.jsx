export default function ListItem () {

    const products = [
        { title: 'Cabbage', id: 1, isColor: false},
        { title: 'Garlic', id: 2, isColor: true },
        { title: 'Apple', id: 3, isColor: false },
      ];

    const listItems = products.map(product => <li key={products.id} 
        style={{color: product.isColor ? 'red':'orange'}}>
        {product.title}
        </li>
      );
      
      return (
        <ul>{listItems}</ul>
      );
}