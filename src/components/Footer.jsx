export default function Footer() {
  const FooterLinks = [
    { id: 1, text: "About Online Food" },
    { id: 2, text: "Read our blog" },
    { id: 3, text: "Sign up to deliver" },
    { id: 4, text: "Add your restaurant" },
    { id: 5, text: "Get Help" },
    { id: 6, text: "Ask any question" },
    { id: 7, text: "Order Now" },
    { id: 8, text: "Contact" },
    { id: 9, text: "Facebook" },
    { id: 10, text: "Instagram" },
    { id: 11, text: "Twitter" },
    { id: 12, text: "Youtube" },
  ];

  return (
    <footer className="bg-gray-800 px-6 py-12">
      <div className=" max-w-screen-xl mx-auto px-6">
        <div className="flex pb-8">
          {/* logo  */}
          <div className="flex flex-grow">
            <div>
              <img className="w-52" src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
 alt="logo" />
            </div>
          </div>
          {/* footer links  */}
          <div className="flex space-x-12">
            <div className="flex flex-col space-y-2">
              {FooterLinks.slice(0, 4).map((item) => (
                <span className="text-white poppins" key={item.id}>
                  {item.text}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              {FooterLinks.slice(4, 8).map((item) => (
                <span className="text-white poppins" key={item.id}>
                  {item.text}
                </span>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              {FooterLinks.slice(8, 12).map((item) => (
                <span className="text-white poppins" key={item.id}>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center pt-8">
          <div className="flex flex-grow">
            <span className="poppins text-gray-500">Developed by George Okumu with 💗 </span>
          </div>

          <div className="flex justify-end items-center space-x-6">
            <span className="poppins text-white cursor-pointer">Privacy Policy</span>
            <span className="poppins text-white cursor-pointer">Terms of Use</span>
            <span className="poppins text-white cursor-pointer">Pricing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
