import React from "react";

export default function page() {
  const services = [
    {
      title: "Web Development",
      description:
        "Build robust and scalable websites with modern technologies.",
      details:
        "Our web development services include everything from building responsive and adaptive websites to integrating with various APIs and databases for dynamic functionality. We use the latest technologies and best practices to ensure your website performs optimally and meets your business needs.",
    },
    {
      title: "Mobile App Development",
      description:
        "Create high-performance mobile applications for iOS and Android.",
      details:
        "We specialize in developing mobile applications that are both functional and user-friendly. Whether you need an app for iOS or Android, our team uses cutting-edge tools and technologies to deliver high-quality apps that meet your requirements and engage your audience.",
    },
    {
      title: "SEO Optimization",
      description:
        "Enhance your website’s visibility and ranking on search engines.",
      details:
        "Our SEO optimization services help improve your website’s search engine ranking through comprehensive keyword research, on-page optimization, and link-building strategies. We focus on enhancing your site’s visibility and driving targeted traffic to achieve your business goals.",
    },
    {
      title: "Digital Marketing",
      description:
        "Reach your target audience with effective digital marketing strategies.",
      details:
        "We offer a range of digital marketing services including social media management, email marketing, and pay-per-click advertising. Our goal is to help you build a strong online presence and connect with your target audience through tailored strategies and campaigns.",
    },
    {
      title: "UI/UX Design",
      description: "Design user-friendly and visually appealing interfaces.",
      details:
        "Our UI/UX design services focus on creating intuitive and engaging user experiences. From wireframes and prototypes to final designs, we ensure that your product not only looks great but is also easy to use and meets the needs of your users.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Implement scalable and reliable cloud solutions for your business.",
      details:
        "Our cloud solutions include cloud storage, cloud computing, and cloud migration services. We help businesses leverage the power of cloud technology to scale operations, improve flexibility, and reduce costs.",
    },
  ];

  return (
    <section className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-gray-400">
            Discover the range of services we offer to elevate your business.
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-6"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {/* Conditionally render SVG based on service index */}
                  {index === 0 && (
                    <svg
                      className="h-16 w-16 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v14h14V5H5z"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="h-16 w-16 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 3h.01M9.75 3h.01M19.5 5.25h-15a1.5 1.5 0 00-1.5 1.5v14a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V6.75a1.5 1.5 0 00-1.5-1.5z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="h-16 w-16 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 12a8.25 8.25 0 1114.854 5.185 7.5 7.5 0 10-6.604-10.653A8.253 8.253 0 013.75 12zm11.724 3.255a5.25 5.25 0 01-7.548-7.548M8.25 12a4.5 4.5 0 006 0"
                      />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg
                      className="h-16 w-16 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm-6 3a6 6 0 1112 0 6 6 0 01-12 0zm-2.25 0h3M3 12a9 9 0 1118 0A9 9 0 013 12z"
                      />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg
                      className="h-16 w-16 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 3.75h7.5M6 8.25v8.25M18 8.25v8.25m-6-5.25l6 6M6 8.25l6 6m0-6v11.25"
                      />
                    </svg>
                  )}
                  {index === 5 && (
                    <svg
                      className="h-16 w-16 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11.75a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zm-6 3a6 6 0 1112 0 6 6 0 01-12 0zm-2.25 0h3M3 12a9 9 0 1118 0A9 9 0 013 12z"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <p className="text-gray-500 hidden lg:block">
                    {service.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
