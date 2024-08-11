import { Box, useMediaQuery, Button } from "@mui/material";
import React, { ChangeEvent, useCallback, useState } from "react";
import CustomInput from "@custom-ui/CustomInputModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TravelAutocomplete from "./TravelAutocompletes";
import { useSelector } from "react-redux";
import {
  adultsSelector,
  arrivalSelector,
  departureSelector,
} from "@redux/selectors/components-selectors";
import { UseStoreDispatcher } from "@redux/store/store";
import { fetchTicketsDataThunk } from "@redux/slices/actions-slice";
import CustomSelect from "@custom-ui/CustomSelect";
const TravelPlanFilter = () => {
  const isSmallScreen = useMediaQuery("(max-width: 850px)");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const arrivalCity = useSelector(arrivalSelector);
  const departureCity = useSelector(departureSelector);
  const passengersQuantity = useSelector(adultsSelector);
  const dispatch = UseStoreDispatcher();

  const setDepartureDateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
  };
  const setReturnDateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value);
  };
  const handleFetchTickets = useCallback(async () => {
    try {
      const result = await dispatch(
        fetchTicketsDataThunk({
          departureCity: departureCity,
          arrivalCity: arrivalCity,
          departureDate: departureDate,
          returnDate: returnDate,
          adults: passengersQuantity.toString(),
        })
      );
      console.log("result:", result);
    } catch (error) {
      console.error("Failed to fetch tickets", error);
      toast.error("Something went wrong!");
    }
  }, [
    departureCity,
    arrivalCity,
    departureDate,
    returnDate,
    passengersQuantity,
  ]);
  const handleButtonClick = () => {
    handleFetchTickets();
    console.log("Hi");
  };

  return (
    <Box
      display={"flex"}
      alignSelf={"center"}
      ml={5}
      width={"50%"}
      gap={10}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        display="flex"
        width={"100%"}
        flexDirection={"column"}
        color={"inherit"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          width={"100%"}
          mt={isSmallScreen ? "50" : "30%"}
        >
          <TravelAutocomplete />
        </Box>
      </Box>
      <Box display="flex" width={"100%"} flexDirection={"column"}>
        <CustomSelect label={"Passengers"} labelId={"label-passengers-id"} />
        <CustomInput
          id="departureDate"
          name="departureDate"
          label=""
          type="date"
          value={departureDate}
          onChange={setDepartureDateValue}
        />
        <label
          style={{
            color: "white",
            display: "flex",
            marginTop: "2%",
            alignSelf: "flex-end",
          }}
        >
          Departure on
        </label>
        <CustomInput
          id="returnDate"
          name="returnDate"
          label=""
          type="date"
          value={returnDate}
          onChange={setReturnDateValue}
        />
        <label
          style={{
            color: "white",
            display: "flex",
            marginBottom: "2%",
            marginTop: "2%",
            alignSelf: "flex-end",
          }}
        >
          Return on
        </label>
      </Box>
      <Button
        onClick={handleButtonClick}
        sx={{
          color: "white",
          border: "1px solid white",
          width: "150px",
          height: "60px",
          marginTop: `${isSmallScreen ? "5%" : "0%"}`,
        }}
      >
        Find
      </Button>
    </Box>
  );
};

export default TravelPlanFilter;
