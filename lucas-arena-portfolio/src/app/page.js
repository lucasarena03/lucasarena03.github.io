import Image from "next/image";

const Home = () => {
  return (
    <main className="flex min-w-screen min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-w-2/3 max-w-2/3 flex-col flex-start">
        <div className="flex flex-col items-center">
          <div
            role="status"
            class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
          >
            <div class="flex items-center justify-center w-full h-48 bg-neutral-quaternary rounded-base sm:w-96">
              <svg
                class="w-11 h-11 text-fg-disabled"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-8">Lucas Arena</h1>
          <h3 className="text-3xl font-bold mb-8">IT Professional</h3>
        </div>
        <div className="flex flex-col flex-start mt-12">
          <h3 className="text-3xl font-bold mb-8">Experience</h3>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li className="flex flex-col">
              <strong>Position at FSU</strong> (2020 - 2020)
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-start mt-12">
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li className="flex flex-col">
              <strong>Position at FSU</strong> (2020 - 2020)
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
