import React from "react";

const BenefitsSection = () => {
  const programs = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-[600] text-3xl mb-[3vw]">
        What Are The <span className=" text-primary-color">Referral Benefits?</span>
      </h1>
      <div className="flex w-3/4 items-center my-4 justify-end">
        <label>
          <span>Enrolled</span>
          <input type="checkbox" className="toggle mx-4 mr-10" />
        </label>
      </div>
      <div className="flex md:flex-row flex-col w-3/4 mb-7">
        {/* Sidebar */}
        <aside className="md:w-64 w-full mb-4 text-black p-4 rounded-lg shadow-lg">
          <nav className="space-y-1">
            <a
              href="#"
              className="block py-2 px-4 bg-blue-700 rounded text-white font-bold"
            >
              ALL PROGRAMS
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600  flex justify-between items-center"
            >
              PRODUCT MANAGEMENT
              <span>&gt;</span>
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600 flex justify-between items-center"
            >
              STRATEGY & LEADERSHIP
              <span>&gt;</span>
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600 flex justify-between items-center"
            >
              BUSINESS MANAGEMENT
              <span>&gt;</span>
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600 flex justify-between items-center"
            >
              FINTECH
              <span>&gt;</span>
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600  flex justify-between items-center"
            >
              SENIOR MANAGEMENT
              <span>&gt;</span>
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600 flex justify-between items-center"
            >
              DATA SCIENCE
              <span>&gt;</span>
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600  flex justify-between items-center"
            >
              DIGITAL TRANSFORMATION
              <span>&gt;</span>
            </a>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600 flex justify-between items-center"
            >
              BUSINESS ANALYTICS
              <span>&gt;</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 pt-0">
          <div className="bg-white shadow rounded-lg p-4">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-2">Programs</th>
                  <th className="px-4 py-2">Referrer Bonus</th>
                  <th className="px-4 py-2">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program) => (
                  <tr key={program.name} className="border-t">
                    <td className="px-4 py-2">{program.name}</td>
                    <td className="px-4 py-2">{program.referrerBonus}</td>
                    <td className="px-4 py-2">{program.refereeBonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <button className="text-white bg-primary-color mt-[3.5vw] rounded-lg px-[2.5vw] py-[0.7vw] text-[1.1vw]">
        Refer Now
      </button>
    </div>
  );
};

export default BenefitsSection;
