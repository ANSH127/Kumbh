import { Rating } from "@mui/material";

const data = [
  {
    name: "Aman Tiwari",
    rating: 5,
    description:
      "यह मेरी जिंदगी का सबसे यादगार अनुभव था। संगम स्नान और गाइडेड टूर ने हमारी यात्रा को बहुत आसान बना दिया। लोकल गाइड की जानकारी और व्यवस्था शानदार थी। Definitely recommend it to everyone visiting Kumbh Mela!",
  },
  {
    name: "Rahul Sharma",
    rating: 4,
    description:
      "Kumbh ke baare mein jo suna tha, yaha aake wo sach laga. Package me jo hotel aur transportation diya gaya tha wo kaafi convenient tha. Thoda booking process aur smooth ho sakta hai, lekin overall experience amazing tha!",
  },
  {
    name: "Emily Brown",
    rating: 5,
    description:
      "Absolutely phenomenal experience! The guided Sangam Snan was spiritual and well-organized. The team made sure we felt safe and comfortable throughout. I'll cherish these memories forever. Thank you for such a soulful journey!",
  },
  {
    name: "Vikrant Verma",
    rating: 4.5,
    description:
      "Prayagraj ke har kone ki jaankari aur famous street foods ke baare mein jo guide ne bataya, wo sabse best part tha. Hume laga ki hum local experience kar rahe hain. Truly authentic aur heartfelt service. 10/10 recommend karunga.",
  },
  {
    name: "Nandini Mishra",
    rating: 5,
    description:
      "हमने कुंभ मेले के लिए इनका टूर पैकेज बुक किया था। हर चीज़ इतनी अच्छे से मैनेज की गई थी, चाहे वो गंगा स्नान हो, होटल की व्यवस्था हो या यात्रा। मेरी फैमिली को ये एक्सपीरियंस बहुत पसंद आया। धन्यवाद!",
  },
  {
    name: "John Carter",
    rating: 4,
    description:
      "The tour was good overall. The team was knowledgeable and friendly, but I wish there was more flexibility in the itinerary. Still, a very well-planned experience for such a massive event!",
  },
  {
    name: "Priya Gupta",
    rating: 5,
    description:
      "Unforgettable trip! Kumbh ka spiritual environment aur Prayagraj ka local touch dono hi humein bahut pasand aaya. Har ek cheez smooth thi, especially the hotel arrangements aur transport. 5-star experience!",
  },
];

export default function TrustedBy() {
  return (
    <div className="w-11/12 mx-auto my-8 bg-[#FF9933] rounded-2xl shadow-lg p-4">
      <h1 className="text-3xl font-bold text-center text-black">
        Trusted by 500+ Devotees
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 mt-4 md:p-4">
        

        {data.map((review, index) => (
          <div
            key={index}
            className="bg-[#F4F2E9] p-3 md:min-h-[225px]   h-fit md:p-4 rounded-lg shadow-lg text-center"
          >
            <p className="mt-2  text-sm md:text-base text-justify">
              &quot;{review.description}&quot;
            </p>
            <Rating
              name="half-rating-read"
              value={review.rating}
              precision={0.5}
              readOnly
              className=" pt-1 md:pt-2"
            />
            <h1 className="text-sm md:text-xl font-bold text-black text-center">
              ~{review.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
