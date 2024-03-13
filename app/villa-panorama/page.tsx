import AvailabilityCalendar from "@/components/AvailabilityCalendar/AvailabilityCalendar";
import BookYourStayCard from "@/components/BookYourStayCard/BookYourStayCard";
import PaymentConditions from "@/components/PaymentConditions/PaymentConditions";
import PriceTable from "@/components/PriceTable/PriceTable";
import PropertyGallery from "@/components/PropertyGallery/PropertyGallery";
import { Categorization } from "@/lib/categorization";
import { Features } from "@/lib/features";
import Image from "next/image";
import React from "react";

const featuresLength = Features.features.length;
function VillaPanorama() {
  return (
    <section className="pt-[10rem]">
      <div className="container">
        <h1 className="mb-12 flex justify-center text-3xl sm:text-4xl font-ExtraBold text-dark_blue_black tracking-wider">
          Holiday Home Villa Panorama
        </h1>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 mx-auto">
            <PropertyGallery />
            <div className="flex flex-col gap-4">
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Categorization.categorization.map((item, index) => (
                  <button
                    key={index}
                    className="py-2 rounded-md border-[1px] border-black flex items-center lg:flex-row justify-center gap-2"
                  >
                    <span className="tracking-widest uppercase text-xs xl:text-sm ">
                      {item.title}
                    </span>
                    <span className="font-Bold text-xs xl:text-sm uppercase tracking-widest">
                      {item.value}
                    </span>
                  </button>
                ))}
              </div>
              <hr />
            </div>
            <div className="py-10">
              <h2 className="font-bold text-2xl text-dark_blue_black mb-4">
                Villa Panorama
              </h2>
              <p>
                Stone Luxury Villa is located in Gajana, a peaceful place near
                Vodnjan (Dignano). This 7-bedroom villa (with en-suite bathroom
                in every bedroom) is perfect for nature lovers who like to relax
                away from the city noise. It has a lot to offer to its guests.
              </p>
              <p>
                <br />
                <h2 className="text-md font-ExtraBold">The space</h2>
                There is an outdoor swimming pool (68 m2) with a possibility of
                an air massage and a water cascade on the side of the pool.
                Spacious lawn offers a children's playground with a trampoline
                and football goals. Next to the pool, there is a replica of an
                old Istrian house called "kazun", which offers BBQ facilities.
                Beautiful terrace is a perfect place to enjoy your meal. Another
                place for dining is a summer kitchen, which is located within a
                game room with darts, billiard table and table football. Beauty
                room next to the villa offers a sauna, jacuzzi and excercising
                equippment. Villa has a surveillance system, which tapes the
                villa's surroundings and provides safety to its guests. Villa
                can accommodate 16 people. There are 7 bedrooms in the villa. 3
                bedrooms offer a king size beds, and each of them can fit 2
                people. In the rest of the bedrooms (4 of them), there are 2
                single beds in each of them. Someone can also sleep on living
                room sofas, if they wish to.
                <br />
                <br />
                <h2 className="font-ExtraBold text-md">Guest access</h2>
                Guests can access 7 bedrooms, 2 living rooms, 2 kitchens, 9
                bathrooms + a separated toilet, balconies, terrace, beauty room,
                game room/summer kitchen, "kazun" with BBQ facilities, a room
                with a washing machine and ironing facilities, swimming pool,
                lawn, garden, children's playground and entire outdoor area
                (2500 m2).
              </p>
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-dark_blue_black">
                Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {Features.features.map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    {item.icon_image && item.icon_alt ? (
                      <Image src={item.icon_image} alt={item.icon_alt} />
                    ) : (
                      <span>{item.icon}</span>
                    )}
                    <li
                      className={`py-4 flex flex-col justify-center ${
                        index != featuresLength - 1 &&
                        index != featuresLength - 2
                          ? "border-b-[1px] border-[#e5e7eb]"
                          : ""
                      }`}
                    >
                      {item.title}

                      <span className="text-sm text-grey">{item.des}</span>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-dark_blue_black mb-4">
                Pricelist
              </h2>
              <PriceTable />
              <p className="text-grey1 text-sm mt-4">
                *The price refers to the period of 7 nights in Euros
              </p>
            </div>
            <hr />
            <div className="py-10">
              <h2 className="font-bold text-2xl text-dark_blue_black mb-4">
                Payment and booking conditions
              </h2>
              <PaymentConditions />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="mx-auto !sticky top-14 lg:ml-2.5 w-full">
              <BookYourStayCard />
            </div>
          </div>
        </div>
        <div className="container py-10">
          <h2 className="block text-center font-bold text-2xl text-dark_blue_black mb-6">
            Availability Calendar
          </h2>
          <AvailabilityCalendar />
        </div>
      </div>
    </section>
  );
}

export default VillaPanorama;
