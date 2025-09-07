// import React from "react";

// function getInitial(fullName) {
//   // Get first letter of the main name (ignores Mr., Ms., etc.)
//   const parts = fullName.split(" ");
//   // If starts with honorific, pick next word’s first letter
//   if (["Mr.", "Ms.", "Mrs.", "Dr."].includes(parts[0])) {
//     return parts[1].charAt(0);
//   }
//   return parts[0].charAt(0);
// }

// export default function Team() {
//   const people = [
//     { name: "Mr. Doni Singh Agrawal", role: "Product & Engineering" },
//     { name: "Ms. Seema Gawande", role: "Product & Engineering" },
//     { name: "Ms. Isha Gupta", role: "Product & Engineering" },
//     { name: "Mr. Tarun Jindal, Managing Director", role: "Managing Director" },
//   ];

//   return (
//     <section className="bg-[#FAFAFA] py-16">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-extrabold text-[#0F172A] text-center leading-snug">
//           Meet Our Team
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
//           {people.map((p) => (
//             <article
//               key={p.name}
//               className="text-center border border-gray-200 rounded-2xl p-8 bg-white shadow hover:shadow-lg transition"
//             >
//               <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 text-black font-bold grid place-items-center text-xl">
//                 {getInitial(p.name)}
//               </div>
//               <h3 className="font-semibold text-lg text-[#0F172A]">{p.name}</h3>
//               <p className="text-gray-600 mt-2">{p.role}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
