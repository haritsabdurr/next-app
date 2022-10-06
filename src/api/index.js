const baseUrl = process.env.BASE_URL;

export async function getJsonData() {
  try {
    const response = await fetch(baseUrl);
    const dataJson = response.json();
    console.log(dataJson);
    return dataJson;
  } catch (error) {
    console.log(error.message);
  }
}
