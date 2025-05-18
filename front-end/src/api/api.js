export async function getData(dataType) {
  if (dataType === "productsData") {
    const response = await fetch("./generic_store_db.json");
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error parsing JSON: ", error);
      throw error;
    }
  }
}
