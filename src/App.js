import "./categories.styles.scss"; 

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Accesories",
      
    },

    {
      id: 3,
      title: "Shoes",
      
    },

    {
      id: 2,
      title: "Jackets",
      
    },
   
    {
      id: 4,
      title: "Women",
      
    },

    {
      id: 5,
      title: "Men",
      
    },
  ]

  return (
   <div className="categories-container">
    {categories.map(({title}) => (
    <div className="category-container">
      <div className="background-image" />
      <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop now</p>
      </div>
    </div>
  ))}
  </div>
  );
}

export default App;
