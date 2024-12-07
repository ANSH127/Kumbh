
import foodBackgroundImage from '../assets/img/FoodBackground.png';
import locationImage from '../assets/img/location.png';
import dehatiImage from '../assets/img/Dehati.jpeg';
import rajaramImage from '../assets/img/Rajaram.jpeg';
import panditImage from '../assets/img/Pandit.jpeg';
import batiImage from '../assets/img/bati.jpeg';

export default function FoodPackages() {
  return (
    <div>
        <h1>Packages</h1>

        {/* FoodPackages BackGround */}
        <div className="md:w-full md:h-auto h-[774px] w-auto">
          <img
            src={foodBackgroundImage}
            alt="Slide 3"
            className="w-full h-auto object-cover flex-shrink-0"
          />
        </div>
        <div>
          <h1
            className="absolute agbalumo-bold text-[5vw] sm:text-[3.2vw] mt-[-113%] left-[50%] transform -translate-x-[50%] whitespace-nowrap"
            style={{ fontFamily: "Agbalumo, serif" }}
          >
            Prayagraj’s Legendary Food Stops
          </h1>

          <div className="md:block">
            {/* Upper pin */}
            <img
              className="absolute md:mt-[-115%] mt-[-100%] left-[80%] w-[4vw] h-auto md:w-auto md:h-auto"
              src={locationImage}
              alt=""
            />

            {/* Lower Pin */}
            <img
              className="absolute mt-[-23%] left-[-11%] w-[4vw] h-auto md:w-auto md:h-auto hidden md:block"
              src={locationImage}
              alt=""
            />

            <div className="w-full h-auto grid md:grid-cols-2 z-10 absolute mt-[-200%] md:mt-[-105%]">
              <div className="px-[24%] md:px-[6%]">
                <div className="md:p-8">
                  <img
                    className="rounded-[30px]"
                    src={dehatiImage}
                    alt="Dehati"
                  />
                </div>

                <div className="mt-2 md:mt-0 md:p-8">
                  <img
                    className="rounded-[30px]"
                    src={rajaramImage}
                    alt="Rajaram"
                  />
                </div>
              </div>

              <div className="absolute relative px-[6%] top-[20%] hidden md:block">
                <div className="p-8">
                  <img
                    className="rounded-[30px]"
                    src={panditImage}
                    alt="Pandit"
                  />
                </div>

                <div className="p-8">
                  <img className="rounded-[30px]" src={batiImage} alt="Bati" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
