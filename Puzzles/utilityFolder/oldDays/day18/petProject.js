import express from "express";
import process from "process";
import cors from "cors";
import Amadeus from "amadeus";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get("/hotels", async (req, res) => {
  const { destination, checkInDate, checkOutDate, adults } = req.query;

  try {
    // Get city code from city name
    const cityResponse = await amadeus.referenceData.locations.get({
      keyword: destination,
      subType: Amadeus.location.any,
    });

    if (cityResponse.data.length === 0) {
      return res.status(404).json({ message: "City not found" });
    }

    const cityCode = cityResponse.data[0].address.cityCode;

    // Get hotels by city code
    const hotelResponse =
      await amadeus.referenceData.locations.hotels.byCity.get({
        cityCode: cityCode,
      });

    if (!hotelResponse.data || hotelResponse.data.length === 0) {
      return res.status(404).json({ message: "No hotels found" });
    }

    // Extract the first 10 hotel IDs (limit number to avoid errors)
    let hotelIdsArr = hotelResponse.data
      .map((hotel) => hotel.hotelId)
      .slice(0, 10);

    if (hotelIdsArr.length === 0) {
      return res.status(404).json({ message: "No hotel IDs found" });
    }

    // Get available offers for the hotels
    const hotelOffersResponse = await amadeus.shopping.hotelOffersSearch.get({
      hotelIds: hotelIdsArr.join(","),
      adults: adults || 1, // Default to 1 if not provided
      checkInDate: checkInDate || new Date().toISOString().split("T")[0],
      checkOutDate:
        checkOutDate ||
        new Date(new Date().setDate(new Date().getDate() + 1))
          .toISOString()
          .split("T")[0],
    });

    if (!hotelOffersResponse.data || hotelOffersResponse.data.length === 0) {
      return res.status(404).json({ message: "No offers found" });
    }

    res.json(hotelOffersResponse.data);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res
      .status(500)
      .json({ message: "Error fetching hotels", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
