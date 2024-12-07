import { Rating } from "@mui/material";

export default function TrustedBy() {
  return (
    <div className="w-11/12 mx-auto my-8 bg-[#FF9933] rounded-2xl shadow-lg p-4">
        <h1 className="text-3xl font-bold text-center text-black">
          Trusted by 500+ Devotees
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-8 mt-4">
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;The travel package was well-organized, and every detail was
              taken care of. Highly recommended!&quot;
            </p>
            <Rating name="read-only" value={5} readOnly className="pt-4" />
            <h1 className="text-xl font-bold text-black text-center">
              ~Rahul Verma
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;A truly divine experience. The accommodations and travel
              arrangements were excellent!&quot;
            </p>
            <Rating name="read-only" value={5} readOnly className="pt-4" />
            <h1 className="text-xl font-bold text-black text-center">
              ~Priya Sharma
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;Seamless booking process and great customer support. Made my
              trip stress-free!&quot;
            </p>
            <Rating name="read-only" value={5} readOnly className="pt-4" />
            <h1 className="text-xl font-bold text-black text-center">
              ~Ankit Joshi
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;The tour was fantastic, but the transport could have been a
              bit more comfortable.&quot;
            </p>
            <Rating name="read-only" value={3} readOnly className="pt-4" />
            <h1 className="text-xl font-bold text-black text-center">
              ~Neha Kapoor
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;Best pilgrimage tour experience ever! Will definitely
              recommend to my friends.&quot;
            </p>
            <Rating name="read-only" value={5} readOnly className="pt-4" />
            <h1 className="text-xl font-bold text-black text-center">
              ~Suresh Nair
            </h1>
          </div>
          <div className="bg-[#F4F2E9] p-4 rounded-lg shadow-lg text-center">
            <p className="mt-2">
              &quot;Good value for money. However, I would have preferred more
              meal options.&quot;
            </p>
            <Rating name="read-only" value={4} readOnly className="pt-4" />
            <h1 className="text-xl font-bold text-black text-center">
              ~Vishal Singh
            </h1>
          </div>
        </div>
      </div>
  )
}
