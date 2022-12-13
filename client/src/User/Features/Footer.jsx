import React from "react";

export default function Footer() {
  return (
    <footer className=" inset-x-0 bottom-0 p-5 bg-gray-900 sm:p-6 dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="asdas" className="flex items-center">
            {/* <img src="asdasd" className="mr-3 h-8" alt="Icono nuestro" /> */}
            <span className="self-center text-2xl font-cursive-titles font-semibold whitespace-nowrap text-white">
              Tienda Nuestra
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Links
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="" className="hover:underline">
                  Fashion A
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Fashion B
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              CONTACT
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://github.com/" className="hover:underline ">
                  Github
                </a>
              </li>
              <li>
                <a href="https://discord" className="hover:underline">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              FAQ
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
