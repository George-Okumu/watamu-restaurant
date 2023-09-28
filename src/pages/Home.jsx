export default function Home() {
  return (
    <>
      <div className="bg-yellow-400">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[2.25rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                Your favorite dishes, right at your door
              </h1>

              <p className="mt-8 text-gray-700 lg:w-10/12">
                From Watamu KE.
              </p>
            </div>
            <div className="ml-auto -mb-0 lg:-mb-0 lg:w-6/12">
              <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>        
      </div>
    </>
  );
}
