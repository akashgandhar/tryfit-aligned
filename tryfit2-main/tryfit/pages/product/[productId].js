import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const desc = "Unique Description";
  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          const productRef = doc(db, "Products", productId);
          const docSnapshot = await getDoc(productRef);

          if (docSnapshot.exists()) {
            setProduct(docSnapshot.data());
            setSelectedImage(docSnapshot.data().Image[0]);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.log("Error getting document:", error);
        }
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className=" text-white mr-8 ml-8 lg:pr-20  md:pr-20 md:ml-20 lg:ml-20 xl:ml-40 xl:pr-40">
      <Header />
      <div className="grid xl:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center items-center  mt-40 rounded-[18px]  ">
          <img
            src={selectedImage}
            alt="Coming Soon"
            className="xl:h-[500px] lg:h-[500px] md:h-[500px] border-8 rounded-[40px]"
          />

          <div className="flex gap-4 mt-4">
            {/* //other images  */}
            {product?.Image?.map((img, index) => (
              <img
                onClick={(e) => setSelectedImage(img)}
                key={index}
                src={img}
                alt="Coming Soon"
                className="h-12 hover:outline cursor-pointer transition-all ease-in duration-100 rounded-lg mt-4"
              />
            ))}
          </div>
        </div>
        <div className=" xl:mt-44 lg:mt-10 md:mt-10 mt-10 flex flex-col justify-center items-center text-center">
          <h2 className="flex xl:text-8xl lg:text-8xl md:text-8xl text-6xl font-ABeeZee">
            {product.Name}
          </h2>
          <div className="flex gap-4 xl:text-3xl lg:text-3xl md:text-3xl text-2xl">
            <h2>
              Type Of Fabric :{" "}
              <span className="text-btn_hover font-aventa">
                {product.CategoryID}
              </span>
            </h2>
          </div>
          <p className=" font-ABeeZee mt-[45px] ">
            {product.Unique_Description}
          </p>
          <div className="text-white xl:text-2xl lg:text-2xl md:text-2xl text-md font-aventa_bold mt-8 flex gap-4">
            <h2 className="">
              Item Composition :{" "}
              <span className="text-btn_hover">{product.Item_Composition}</span>
            </h2>
          </div>
          <div className="text-white xl:text-2xl lg:text-2xl md:text-2xl text-md font-aventa_bold mt-8 flex gap-4">
            <h2 className="flex gap-2 items-center">
              Available Color :{" "}
              {product?.Available_Color?.map((color, index) => {
                return (
                  <div
                    onClick={() => setSelectedColor(color.Name)}
                    style={{ backgroundColor: color.Hex }}
                    title={color.Name}
                    key={index}
                    className={`${
                      selectedColor === color.Name && "outline"
                    } h-6 w-6 rounded-full hover:outline cursor-pointer`}
                  ></div>
                );
              })}
            </h2>
          </div>
          {/* <Link href={`/Contact#getInTouch`}> */}
          <button
            onClick={() => {
              router.push({
                pathname: "/Contact",
                query: {
                  product: product.Name,
                  color: selectedColor,
                },
              });
            }}
            className="bg-[#D9D9D9] xl:text-[40px] lg:text-[40px] md:text-[40px] text-3xl py-2 mt-12 text-black font-aventa_bold xl:px-24 lg:px-24 md:px-24 px-8  rounded-[10px] mb-10"
          >
            Get Quotation
          </button>
          {/* </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
