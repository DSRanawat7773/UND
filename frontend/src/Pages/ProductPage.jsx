import CategoryCard from "../Components/CategoryCard";
import muralcl from "../assets/muralcl.jpg"; 
import Homedecor from "../assets/Homedecor.jpg"; 

const ProductPage = () => {
  const categories = [
    {
      title: "Mural Art",
      image: muralcl, // Use the imported image variable here
      route: "mural",
    },
    {
      title: "Home Decor",
      image: Homedecor, // Only works if placed in public folder
      route: "home-decor",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.route} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
