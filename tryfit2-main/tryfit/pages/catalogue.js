import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Products"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Sort data with error handling for undefined 'date' fields
  return data.sort((a, b) => {
    if (!a.date) return 1; // Move documents without 'date' to the end
    if (!b.date) return -1; // Keep documents with 'date' at the beginning
    return a.date.localeCompare(b.date); // Sort by 'date' if both exist
  });
}

async function fetchDataFromFirestore1() {
  const querySnapshot = await getDocs(collection(db, "Categories"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Sort data with error handling for undefined 'date' fields
  return data.sort((a, b) => {
    if (!a.date) return 1; // Move documents without 'date' to the end
    if (!b.date) return -1; // Keep documents with 'date' at the beginning
    return a.date.localeCompare(b.date); // Sort by 'date' if both exist
  });
}

export default function Catalogue() {
  const [userData, setUserData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetchDataFromFirestore().then((data) => {
      setUserData(data);
    });
  }, []);
  useEffect(() => {
    fetchDataFromFirestore1().then((data) => {
      setCategoryData(data);
    });
  }, []);
  console.log(userData);

  const headingRef = useRef(null);
  const isInView = useInView(headingRef);
  const headingRef2 = useRef(null);
  const isInView2 = useInView(headingRef2);

  const [category, setCategory] = useState("");

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* elevate your fabrics */}
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={headingRef}
        className="flex flex-col justify-center text-center items-center mt-36 text-white "
      >
        <div className="flex text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl gap-5 font-heavitas pr-8 ml-8 mt-20  lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
          <h1 className="">
            <span className="text-btn_hover">ELEVATE</span> YOUR FABRICS
          </h1>
          <h1></h1>
        </div>
        <div className="flex text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl gap-5 font-heavitas pr-8 ml-8  lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
          <h1>
            WITH <span className="text-btn_hover">TRYFIT</span> FABRICS
          </h1>
        </div>
        <p className=" mt-10 md:text-2xl lg:text-2xl xl:text-2xl font-aventa pr-8 ml-8  lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
          Dive Into Our Collection Of Meticulously Crafted Fabric, Designed For
          Longevity And Performance
        </p>
      </motion.div>

      <div className="flex justify-center mt-20 px-32 xl:hidden">
        <select
          value={category}
          onClick={(e) => setCategory(e.target.value)}
          className="text-white bg-white/15 rounded-[27px] p-2 w-full "
        >
          <option className="text-black" value="volvo">
            Categories
          </option>
          {
            // Loop through the category data
            categoryData.map((item) => (
              <option className="text-black" key={item.id} value={item.Name}>
                {item.Name}
              </option>
            ))
          }
        </select>
      </div>

      <div className="hidden xl:grid xl:grid-cols-[0.4fr_1.6fr] mt-32">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          initial="hidden"
          animate={isInView2 ? "show" : "hidden"}
          ref={headingRef2}
          className="flex flex-col text-white bg-white/15 mr-4 ml-12   rounded-[27px]"
        >
          <h1 className=" font-ABeeZee xl:text-4xl text-center mt-8 pb-14">
            Category
          </h1>
          {categoryData.map((item, index, i = 0) => (
            <div
              onClick={() => setCategory(item.Name)}
              key={item.id}
              className={`flex flex-col ml-5 font-ABeeZee text-xl mt-8 ${
                category === item.Name && "text-btn_hover"
              } hover:text-btn_hover cursor-pointer`}
            >
              {" "}
              {/* Wrap each item in a div */}
              <p>{item.Name}</p> {/* Use <p> for each item name */}
            </div>
          ))}
        </motion.div>

        {category ? (
          <div className="grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr] ml-6 pr-32">
            {userData
              .filter((user) => user.CategoryID === category)
              .map((user) => (
                <Link
                  href={`/product/${user.id}`}
                  key={user.id}
                  className={` border ${
                    userData?.filter((user) => user.CategoryID === category)
                      .length <= 3 && "h-[30rem]"
                  } h-auto border-gray_border text-white `}
                >
                  <img
                    src={user.Image}
                    alt="Coming Soon"
                    className="xl:h-[350px] lg:h-[300px] md:h-[300px] h-[200px] w-full rounded-[40px] p-4"
                  />
                  <p className=" ml-4 text-4xl text-white font-heavitas font-semibold">
                    {user.Name}
                  </p>
                  <p className="ml-4 font-ABeeZee pb-4">{user.CategoryID}</p>
                </Link>
              ))}
          </div>
        ) : (
          <div className="grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr] ml-6 pr-32">
            {userData.map((user) => (
              <Link
                href={`/product/${user.id}`}
                key={user.id}
                className=" border  border-gray_border text-white "
              >
                <img
                  src={user.Image}
                  alt="Coming Soon"
                  className="xl:h-[350px] lg:h-[300px] md:h-[300px] h-[200px] w-full rounded-[40px] p-4"
                />
                <p className=" ml-4 text-4xl text-white font-heavitas font-semibold">
                  {user.Name}
                </p>
                <p className="ml-4 font-ABeeZee pb-4">{user.CategoryID}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="xl:hidden lg:grid lg:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]  mt-8 md:grid md:grid-cols-[1fr_1fr] lg:ml-32 lg:pr-32 md:ml-24 md:pr-24">
        {userData.map((user) => (
          <Link
            href={`/product/${user.id}`}
            key={user.id}
            className="border border-gray_border text-white "
          >
            <img
              src={user.Image}
              alt="Coming Soon"
              className="xl:h-[350px] lg:h-[300px] md:h-[300px] h-[300px] w-full rounded-[40px] p-4"
            />
            <p className=" ml-4 text-4xl text-white font-heavitas font-semibold">
              {user.Name}
            </p>
            <p className="ml-4 font-ABeeZee pb-4">{user.CategoryID}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
