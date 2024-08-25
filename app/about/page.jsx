import React from "react";

const About = () => {
  return (
    <div className="flex gap-28 border-t-2 border-gray-500 py-10 px-16">
      <div className="w-[80%]">
        <h2 className="text-2xl font-bold pb-10">About Us</h2>
        <p className="pb-10 font-semibold text-sm">
          Established with a commitment to revolutionize the car-buying
          experience, FINANC1FYD Dealership stands as a beacon of reliability
          and excellence in Toronto&apos;s automotive industry. Our journey began
          with a simple yet profound vision: to provide customers with
          unparalleled access to the finest vehicles coupled with the most
          competitive financing options available. With this guiding principle
          at our core, we&apos;ve meticulously curated a comprehensive inventory of
          top-quality cars, ensuring there&apos;s something for every taste and
          preference. Whether you&apos;re seeking a compact commuter, a
          family-friendly SUV, or a luxurious sedan, we&apos;ve got you covered. At
          FINANC1FYD, we understand that purchasing a car is more than just a
          transaction &#45; it&apos;s an investment in your lifestyle and future.
          That&apos;s why we prioritize transparency, integrity, and customer
          satisfaction in every interaction, striving to exceed expectations at
          every turn.
        </p>
        <p className="pb-10 font-semibold text-sm">
          What sets FINANC1FYD apart from the rest is our unwavering commitment
          to making the car-buying process as seamless and stress-free as
          possible. With access to a network of trusted financial institutions
          and partnerships with leading banks, we offer our customers exclusive
          access to the lowest interest rates on the market. Our team of
          seasoned professionals understands the intricacies of automotive
          financing and works tirelessly to tailor solutions that fit your
          unique needs and budget constraints. Whether you have impeccable
          credit or are facing financial challenges, we believe that everyone
          deserves the opportunity to drive their dream car. At FINANC1FYD, we
          go above and beyond to turn your automotive aspirations into reality,
          guiding you through every step of the process with personalized
          attention and expertise.
        </p>
        <p className="pb-10 font-semibold text-sm">
          At the heart of FINANC1FYD Dealership lies a deep-rooted passion for
          empowering our customers and enriching their lives through exceptional
          vehicles and unparalleled service. We take pride in fostering
          long-lasting relationships built on trust, reliability, and mutual
          respect. Our commitment to excellence extends beyond the showroom
          floor &#45; it&apos;s ingrained in everything we do. From our meticulously
          maintained inventory to our dedicated team of automotive enthusiasts,
          every aspect of the FINANC1FYD experience is designed to exceed your
          expectations. Whether you&apos;re a first-time buyer or a seasoned car
          enthusiast, we welcome you to join the FINANC1FYD family and embark on
          a journey of automotive excellence like never before. Discover the
          difference that quality, integrity, and passion can make &#45; visit
          FINANC1FYD Dealership today and experience the future of car buying.
        </p>
      </div>
      <div className="w-[700px] bg-red-700">
        <div>Contact Us</div>
        <div>
          <div>Sales:</div>
          <div>+1 705-770-3546</div>
        </div>
        <div>
          <div>Visit Us</div>
          <div>
            1205 Finch Avenue West <br />
            North York <br />
            Toronto <br />
            M3J 2E8
          </div>
        </div>
        <div>
          <div>Hours of Operation</div>
          <div>
            <div>
              <div className="text-white text-xl font-bold py-8">OUR HOURS</div>
              <div className="text-white flex flex-col gap-3 w-96">
                <div className="flex justify-between">
                  <div>MONDAY</div>
                  <div>9:00 AM to 8:00 PM</div>
                </div>
                <div className="flex justify-between">
                  <div>TUESDAY</div>
                  <div>9:00 AM to 8:00 PM</div>
                </div>
                <div className="flex justify-between">
                  <div>WEDNESDAY</div>
                  <div>9:00 AM to 8:00 PM</div>
                </div>
                <div className="flex justify-between">
                  <div>THURSDAY</div>
                  <div>9:00 AM to 8:00 PM</div>
                </div>
                <div className="flex justify-between">
                  <div>FRIDAY</div>
                  <div>9:00 AM to 8:00 PM</div>
                </div>
                <div className="flex justify-between">
                  <div>SATURDAY</div>
                  <div>9:00 AM to 8:00 PM</div>
                </div>
                <div className="flex justify-between">
                  <div>SUNDAY</div>
                  <div>BY APPOINTMENT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
