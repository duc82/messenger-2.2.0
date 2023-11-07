import Image from "next/image";
import imageUrlToBase64 from "./utils/imageUrlToBase64";

const datas = [
  "https://images.unsplash.com/photo-1682685796467-89a6f149f07a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1668447600041-f050214ed5bb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1693003774127-e4553f184913?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Home = async () => {
  const images = await Promise.all(
    datas.map(async (data) => {
      const dataUrl = await imageUrlToBase64(data);
      return { url: data, dataUrl };
    })
  );

  return (
    <div className="container">
      <div className="row">
        {images.map((image, i) => (
          <div key={i} className="col-12">
            <div className="position-relative" style={{ height: 200 }}>
              <Image
                src={image.url}
                alt={"Image"}
                placeholder="blur"
                blurDataURL={image.dataUrl}
                fill={true}
                layout="reponsive"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
