import React from "react";
import Citylist from "./Citylist";
import city from "../cityy"
export default function CitySection() {

  const b= require('../cityy.json');
  const a=b.citylist;
  console.log(a);
  // const a = [
  //   [
  //     [""],
  //     [
  //       "Abohar",
  //       "Adilabad",
  //       "Adityapur",
  //       "Adoni",
  //       "Agartala",
  //       "Agra",
  //       "Baddi",
  //       "Bagalkot",
  //       "Bagdogra",
  //       "Bathinda",
  //       "Beed",
  //       "Chandigarh",
  //       "Changanassery",
  //       "Charkhi Dadri",
  //       "Chatra",
  //       "Chennai",
  //       "Cherthala",
  //       "Chhapra",
  //       "Chikkamagaluru",
  //       "Chilakaluripet",
  //       "Chirala",
  //       "Chittur-Thathamangalam",
  //       "Coimbatore",
  //       "Cuttack",
  //       "Dalli-Rajhara",
  //       "Darbhanga",
  //       "Darjiling",
  //       "Davanagere",
  //       "Deesa",
  //       "Dehradun",
  //       "Dehri-on-Sone",
  //       "Delhi",
  //       "Eluru",
  //       "English Bazar",
  //       "Erode",
  //       "Etawah",
  //     ],
  //   ],
  //   [
  //     [""],
  //     [
  //       "Faridabad",
  //       "Faridkot",
  //       "Farooqnagar",
  //       "Fatehabad",
  //       "Fatehpur Sikri",
  //       "Fazilka",
  //       "Gurgaon",
  //       "Guruvayoor",
  //       "Guwahati",
  //       "Gwalior",
  //       "Habra",
  //       "Hajipur",
  //       "Haldwani-cum-Kathgodam",
  //       "Hansi",
  //       "Hapur",
  //       "Hyderabad",
  //       "Ichalkaranji",
  //       "Imphal",
  //       "Indore",
  //       "Itarsi",
  //       "Jabalpur",
  //       "Jagdalpur",
  //       "Jaggaiahpet",
  //       "Jagraon",
  //       "Kochi",
  //       "Kodungallur",
  //       "Kohima",
  //       "Kolar",
  //       "Kolkata",
  //       "Kollam",
  //       "Longowal",
  //       "Loni",
  //       "Losal",
  //       "Lucknow",
  //       "Ludhiana",
  //       "Lumding",
  //     ],
  //   ],
  //   [
  //     [""],
  //     [
  //       "Malkapur",
  //       "Malout",
  //       "Malpura",
  //       "Malur",
  //       "Manachanallur",
  //       "Manasa",
  //       "Nagina",
  //       "Nagla",
  //       "Nagpur",
  //       "Nahan",
  //       "Naharlagun",
  //       "Naidupet",
  //       "Naihati",
  //       "Naila Janjgir",
  //       "Nainital",
  //       "Ongole",
  //       "Orai",
  //       "Osmanabad",
  //       "Ottappalam",
  //       "Ozar",
  //       "P.N.Patti",
  //       "Pachora",
  //       "Pachore",
  //       "Pacode",
  //       "Padmanabhapuram",
  //       "Padra",
  //       "Padrauna",
  //       "Puttur",
  //       "Qadian",
  //       "Raayachuru",
  //       "Rabkavi Banhatti",
  //       "Radhanpur",
  //       "Rae Bareli",
  //       "Rafiganj",
  //       "Raghogarh-Vijaypur",
  //       "Raghunathganj",
  //     ],
  //   ],
  //   [
  //     [""],
  //     [
  //       "Sandi",
  //       "Sandila",
  //       "Sangareddy",
  //       "Sangaria",
  //       "Thiruvananthapuram",
  //       "Thiruvarur",
  //       "Thuraiyur",
  //       "Tundla",
  //       "Tuni",
  //       "Tura",
  //       "Uchgaon",
  //       "Udaipur",
  //       "Udaipur",
  //       "Udaipurwati",
  //       "Udgir",
  //       "Udhagamandalam",
  //       "Varanasi",
  //       "Varkala",
  //       "Vasai-Virar",
  //       "Vatakara",
  //       "Warisaliganj",
  //       "Warora",
  //       "Warud",
  //       "Washim",
  //       "Wokha",
  //       "Yadgir",
  //       "Yamunanagar",
  //       "Yanam",
  //       "Yavatmal",
  //       "Yemmiganur",
  //       "Yerraguntla",
  //       "Yevla",
  //       "Zaidpur",
  //       "Zamania",
  //       "Zira",
  //       "Zirakpur",
  //     ],
  //   ],
  // ];
  return (
    <>
        <p style={{color:"#80807d",fontWeight:"600",backgroundColor:"black",paddingLeft:"30px",margin:"0px",paddingTop:"60px",fontSize:"15px"}}>WE DELIVER TO</p>
      <div className="actionflex">
        {a.map((arr, index) => {
          return <Citylist head={arr[0]} list={arr[1]} />;
        })}
      </div>
   
    </>
  );
}
