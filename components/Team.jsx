export default function Team() {
  const teamMembers = [
    {
      name: "Sandeep Kumar",
      role: "Co-Founder / Marketing",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
      name: "Manish Dahiya",
      role: "Co-Founder / Development",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
  ];

  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet Our Leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are passionate owners dedicated to driving our company's success
            through innovative solutions and expert leadership.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {teamMembers.map(({ name, role, image }, index) => (
            <li key={index}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={image}
                  alt={name}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-400">
                    {role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
