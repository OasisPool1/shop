import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { BellIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Sepatu Running Sport",
    price: "450000",
    image: "https://source.unsplash.com/300x300/?running-shoes",
  },
  {
    id: 2,
    name: "Sneakers Kasual",
    price: "520000",
    image: "https://source.unsplash.com/300x300/?sneakers",
  },
  {
    id: 3,
    name: "Sepatu Formal Kulit",
    price: "780000",
    image: "https://source.unsplash.com/300x300/?leather-shoes",
  },
  {
    id: 4,
    name: "Sepatu Basket",
    price: "680000",
    image: "https://source.unsplash.com/300x300/?basketball-shoes",
  },
  {
    id: 5,
    name: "Sepatu Lari Wanita",
    price: "490000",
    image: "https://source.unsplash.com/300x300/?women-running-shoes",
  },
  {
    id: 6,
    name: "Sepatu Hiking",
    price: "850000",
    image: "https://source.unsplash.com/300x300/?hiking-boots",
  },
  {
    id: 7,
    name: "Loafers Pria",
    price: "720000",
    image: "https://source.unsplash.com/300x300/?loafers",
  },
  {
    id: 8,
    name: "Slip-On Kasual",
    price: "390000",
    image: "https://source.unsplash.com/300x300/?slip-on-shoes",
  },
  {
    id: 9,
    name: "Sepatu Skateboard",
    price: "580000",
    image: "https://source.unsplash.com/300x300/?skate-shoes",
  },
];

export async function generateStaticParams() {
  const districts = require("../../../public/districts.json");

  return districts.map((name: string) => ({
    slug: name.replace(/\s/g, "-"),
  }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <>
      <Header title={`Sepatune ${slug.split("-").join(" ")}`} />
      <section className="relative bg-gray-900 px-6 py-20 text-white md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Step Up in Style, Move with Confidence
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Discover the perfect blend of fashion and performance at
            Sepatune.com. Stay ahead with stylish and high-performance footwear
            designed for every step of your journey.
          </p>
          <a
            href="#shop"
            className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600"
          >
            Shop Now
          </a>
        </div>
      </section>

      <section
        className="h-[500px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=4018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></section>

      <section className="flex h-[500px] items-center justify-center bg-gray-100 px-6 md:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Our Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
            Discover how we deliver cutting-edge solutions to elevate your style
            and performance.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Premium Quality
              </h3>
              <p className="mt-2 text-gray-700">
                Our footwear is crafted with the finest materials to ensure
                durability and comfort.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Stylish Designs
              </h3>
              <p className="mt-2 text-gray-700">
                Stay on trend with our collection of modern and sleek footwear
                styles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Performance-Driven
              </h3>
              <p className="mt-2 text-gray-700">
                Designed for both casual and athletic use, our shoes provide
                optimal support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Produk Terbaru
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 h-56 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 text-lg font-bold text-blue-500">
                {formatCurrency(product.price)}
              </p>
              <Link
                href={{
                  pathname: `${slug}/checkout`,
                  query: { name: product.name, price: product.price },
                }}
                className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-700"
              >
                Beli Sekarang
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-100 px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 text-gray-900 md:grid-cols-4">
          <div>
            <img
              src="/logo.jpg"
              alt="Sarana Inovasi Bangsa"
              className="mb-4 h-12"
            />
            <h3 className="text-lg font-bold">SEPATUNE</h3>
            <p className="text-gray-700">sepatune@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">About</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Privacy</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Social</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter/X</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
