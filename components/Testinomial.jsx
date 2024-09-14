"use client";
import React from "react";
import { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "“The team at Tech Innovations provided us with an exceptional solution that met all of our requirements. Their dedication and expertise were evident throughout the project.”",
      name: "Alice Johnson",
      role: "Chief Technology Officer at Innovate Corp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "“Working with Tech Innovations was a game-changer for our business. Their innovative approach and commitment to excellence helped us achieve our goals ahead of schedule.”",
      name: "John Smith",
      role: "Founder of NextGen Solutions",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "“The professionalism and skill of the Tech Innovations team were outstanding. They delivered a high-quality product that exceeded our expectations and transformed our digital strategy.”",
      name: "Emily Davis",
      role: "Marketing Director at Visionary Agency",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.800),theme(colors.gray.900))] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-indigo-700/10 ring-1 ring-gray-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-indigo-400 sm:text-4xl mb-12">
          What Our Clients Say
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map(({ quote, name, role, image }, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <figure className="space-y-12">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-300 sm:text-2xl sm:leading-9">
                      <p>{quote}</p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <img
                        className="mx-auto h-10 w-10 rounded-full"
                        src={image}
                        alt={name}
                      />
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base text-gray-300">
                        <div className="font-semibold">{name}</div>
                        <svg
                          viewBox="0 0 2 2"
                          width="3"
                          height="3"
                          aria-hidden="true"
                          className="fill-gray-300"
                        >
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <div>{role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-full"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
