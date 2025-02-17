import { useState } from 'react';

const members = [
  "Mecha Temesgen Merga",
  "Dimtse Begidu",
  "Nasifay Chala Rorisa",
  "YESEHAK KEBERE TADESSE",
  "Mekuanint Ejigu",
  "Eyerusalem Gashaw Misganaw",
  "Meheretabe Abayneh",
  "Abenezer Daniel",
  "Aschalew Girma"
];

function GroupList() {
  return (
    <div className=" flex p-4 bg-gray-500">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          <span className=" block text-center text-gray-50">GDG React Group 12</span>
          <span className="block text-xl text-center text-gray-200">Awesome Members ({members.length})</span>
        </h1>
        <div>
          <ul className="space-y-2">
            {members.map((name, index) => (
              <li key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center">
                <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  <span>#{index + 1}</span>
                </div>
                <span className="text-lg">{name}</span>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default GroupList;
