import { Button } from "@/components/ui/button";
import { BellIcon, ShoppingCartIcon } from "lucide-react";


const products = [
  {
    id: 1,
    name: "Sepatu Running Sport",
    price: "Rp 450.000",
    image: "https://source.unsplash.com/300x300/?running-shoes",
  },
  {
    id: 2,
    name: "Sneakers Kasual",
    price: "Rp 520.000",
    image: "https://source.unsplash.com/300x300/?sneakers",
  },
  {
    id: 3,
    name: "Sepatu Formal Kulit",
    price: "Rp 780.000",
    image: "https://source.unsplash.com/300x300/?leather-shoes",
  },
  {
    id: 4,
    name: "Sepatu Basket",
    price: "Rp 680.000",
    image: "https://source.unsplash.com/300x300/?basketball-shoes",
  },
  {
    id: 5,
    name: "Sepatu Lari Wanita",
    price: "Rp 490.000",
    image: "https://source.unsplash.com/300x300/?women-running-shoes",
  },
  {
    id: 6,
    name: "Sepatu Hiking",
    price: "Rp 850.000",
    image: "https://source.unsplash.com/300x300/?hiking-boots",
  },
  {
    id: 7,
    name: "Loafers Pria",
    price: "Rp 720.000",
    image: "https://source.unsplash.com/300x300/?loafers",
  },
  {
    id: 8,
    name: "Slip-On Kasual",
    price: "Rp 390.000",
    image: "https://source.unsplash.com/300x300/?slip-on-shoes",
  },
  {
    id: 9,
    name: "Sepatu Skateboard",
    price: "Rp 580.000",
    image: "https://source.unsplash.com/300x300/?skate-shoes",
  },
];

export default function HomePage() {
  return (
    <div className="min-w-80 min-h-screen bg-blue-100">
      <main className="flex-1 min-w-40 max-w-[1080px] mx-auto">
        <header className="flex flex-row justify-between py-8">
          <img className="w-24" src="/logo.jpg" />
          <div className="flex flex-row gap-4">
            <Button variant="ghost" size="icon">
              <BellIcon />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCartIcon />
            </Button>
          </div>
        </header>

        <section className="relative bg-gray-900 text-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Step Up in Style, Move with Confidence</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
              Discover the perfect blend of fashion and performance at Sepatune.com. Stay ahead with stylish and high-performance footwear designed for every step of your journey.
            </p>
            <a href="#shop" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300">
              Shop Now
            </a>
          </div>
        </section>

        <section className="w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=4018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
        </section>

        <section className="bg-gray-100 h-[500px] flex items-center justify-center px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Expertise</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how we deliver cutting-edge solutions to elevate your style and performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Premium Quality</h3>
                <p className="text-gray-700 mt-2">Our footwear is crafted with the finest materials to ensure durability and comfort.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Stylish Designs</h3>
                <p className="text-gray-700 mt-2">Stay on trend with our collection of modern and sleek footwear styles.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Performance-Driven</h3>
                <p className="text-gray-700 mt-2">Designed for both casual and athletic use, our shoes provide optimal support.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Produk Terbaru
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-blue-500 font-bold text-lg mt-2">{product.price}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </section>

        <footer className="bg-gray-100 py-10 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-900">
            <div>
              <img src="/logo.jpg" alt="Sarana Inovasi Bangsa" className="h-12 mb-4" />
              <h3 className="font-bold text-lg">SEPATUNE</h3>
              <p className="text-gray-700">sepatune@gmail.com</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">About</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li><a href="#">Team</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Privacy</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Social</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter/X</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div >
  );
}
