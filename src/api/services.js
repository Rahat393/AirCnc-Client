export const addHome = async (homeData) => {
  const url = `http://localhost:5000/homes`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(homeData),
  });

  const data = await response.json();

  return data;
};

//get all homes
export const getAllHome = async () => {
  const response = await fetch(`http://localhost:5000/homes`);
  const data = await response.json();
  return data;
};
