import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

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

export default function OurProducts() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef);

  const productRef = useRef(null);

  const isProductInView = useInView(productRef);

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchDataFromFirestore().then((data) => {
      setUserData(data);
    });
  }, []);

  const limitedUserData = userData.slice(0, 6);

  return (
    <div className="flex justify-center items-center pr-8 ml-8 mt-20  lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
      <div className="w-full pb-20  rounded-[26px] flex flex-col items-center">
        <motion.div
          variants={textVariant(0.5)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          ref={headingRef}
        >
          <h1 className="font-heavitas text-btn_hover text-4xl md:text-6xl lg:text-7xl xl:text-7xl mt-8">
            OUR PRODUCTS
          </h1>
          <p className="text-white text-center mt-4 px-4 max-w-xl font-aventa">
            Experience the difference of quality. Soft, breathable, and
            beautiful fabrics await at our store.
          </p>
        </motion.div>
        {/* {/* // opacity } */}
        <motion.div
          ref={productRef}
          animate={isProductInView ? "show" : "hidden"}
          initial="hidden"
          variants={{
            show: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            },
            hidden: { opacity: 0 },
          }}
          className="grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr] grid-cols-[1fr_1fr] xl:ml-32 xl:mr-32 mt-16  items-center justify-center "
        >
          {limitedUserData.map((user) => (
            <Link
              href={`/product/${user.id}`}
              key={user.id}
              className=" border border-gray_border text-white min-h-full"
            >
              <img
                src={user.Image}
                alt="Coming Soon"
                className="flex-1 xl:h-[350px] lg:h-[300px] md:h-[300px] h-[150px] w-full rounded-[40px] p-4"
              />
              <p className=" ml-4 text-sm md:text-4xl text-white font-heavitas font-semibold">
                {user.Name}
              </p>
              <p className="ml-4 font-ABeeZee pb-4">{user.CategoryID}</p>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
