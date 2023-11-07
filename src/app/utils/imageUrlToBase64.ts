const imageUrlToBase64 = async (url: string) => {
  const res = await fetch(url);
  const data = await res.arrayBuffer();
  if (!res.ok) {
    throw new Error("Failed to fetch image");
  }

  const base64 = Buffer.from(data).toString("base64url");
  return base64;
};

export default imageUrlToBase64;
