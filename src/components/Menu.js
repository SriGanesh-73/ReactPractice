function Menu() {
    const dishes = [
      { name: "Dish 1", description: "Delicious dish 1", image: "dish1.jpg" },
      { name: "Dish 2", description: "Delicious dish 2", image: "dish2.jpg" },
      // Add more dishes here
    ];
  
    return (
      <section id="menu">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          {dishes.map((dish, index) => (
            <div key={index} className="dish-card">
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  export default Menu;