import Companies from "@/components/Companies";
import Team from "@/components/Team";
import Testinomial from "@/components/Testinomial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative h-screen">
          {/* Use Next.js Image component */}
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            fill // Replaces layout="fill"
            style={{ objectFit: "cover", objectPosition: "center" }} // Replaces objectFit and objectPosition
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>

          {/* Main content with text */}
          <div className="relative container mx-auto h-full flex items-center">
            <div className="absolute inset-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div
                className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[80rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>

            {/* Text Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-32 sm:px-8 sm:py-48 lg:px-16 lg:py-64">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Transforming IT Solutions for Your Business
                </h1>
                <p className="mt-6 text-lg leading-8 text-white sm:text-xl lg:text-2xl">
                  We provide cutting-edge IT solutions tailored to meet your
                  business needs. Experience seamless integration, support, and
                  innovation that drive your success forward.
                </p>
                <div className="mt-10 flex justify-center gap-x-6">
                  <a
                    href="/contact"
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            {/* Second Clipping Path Element */}
            <div className="absolute inset-x-0 top-[calc(100%-16rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-36rem)]">
              <div
                className="relative left-[calc(50%+5rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+50rem)] sm:w-[80rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Comprehensive Development & Marketing Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We offer a complete range of web and mobile development services
              paired with effective digital marketing strategies. Our goal is to
              help your business thrive in the digital world with high-quality
              solutions and targeted marketing efforts.
            </p>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  Tailored Development Solutions
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  We deliver customized web and mobile applications that fit
                  your business needs. Our team ensures a seamless user
                  experience and high performance across all platforms.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  Effective Digital Marketing
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Our marketing strategies are designed to boost your online
                  presence. From SEO and PPC to social media campaigns, we help
                  your business reach its target audience effectively.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Seamless Integration
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  We ensure that all aspects of your digital presence are
                  integrated smoothly, from website functionality to marketing
                  tools, providing a cohesive experience for your users.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Advanced Security
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Our solutions are built with the latest security measures to
                  protect your data and ensure the safety of your digital
                  assets.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </div>
                  Comprehensive Analytics
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  Track and analyze the performance of your website and
                  marketing campaigns. Our analytics tools provide valuable
                  insights to help you make data-driven decisions.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l-6-6m6 6l6-6M6 18h12"
                      />
                    </svg>
                  </div>
                  Ongoing Support
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  We provide continuous support and maintenance for your
                  projects, ensuring they remain up-to-date and perform
                  optimally.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-indigo-400 mb-12">
            Our Key Metrics
          </h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">
                Transactions every 24 hours
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                2000+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">
                Assets under holding
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                $150M +
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">
                New users annually
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                48.5K +
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <Testinomial />
      <Team />
      <Companies />
    </>
  );
}
