import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='offer'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red inline-block mt-3'>Special</span>{" "}
          Offer
        </h2>
        <p className='mt-4 info-text lg:max-w-lg '>
          Embark on a journey of style and comfort with our exclusive offer
          today. Get a 20% discount on your first purchase.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of quality and style with our exclusive offer today.
          Your journey begins here.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop Now' iconURL={arrowRight}></Button>
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
