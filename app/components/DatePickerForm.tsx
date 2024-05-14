"use client";

import { useEffect, useRef, useState } from "react";
import { DateRangePicker, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useAppDispatch } from "@/redux/hooks";
import { updateSelectedDates } from "@/redux/features/apartmentSlice";

const DatePickerForm = () => {
  const dispatch = useAppDispatch();
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // TODO ver el any
  const handleChange = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;
    const startDateFormatted = format(ranges.selection.startDate, "MM/dd/yyyy");
    const endDateFormatted = format(ranges.selection.endDate, "MM/dd/yyyy");
    setDate(ranges.selection);
    setSelectedStartDate(format(ranges.selection.startDate, "dd/MM/yyyy"));
    setSelectedEndDate(format(ranges.selection.endDate, "dd/MM/yyyy"));
    dispatch(updateSelectedDates({ startDateFormatted, endDateFormatted }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el event listener al desmontar el componente
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setOpenDate(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpenDate(!openDate);
  };
  return (
    <div className="pb-0 flex w-full" ref={datePickerRef}>
      <div
        className="w-[50%] flex-col text-center pr-6 cursor-pointer py-4"
        onClick={handleClick}
      >
        <p className="font-semibold">CHECK-IN</p>
        <p>{selectedStartDate ? selectedStartDate : "dd/mm/aaaa"}</p>
      </div>
      <div className="w-[1px] bg-gray"></div>
      <div className="w-[50%] flex-col text-center pl-6 cursor-pointer py-4" onClick={handleClick}>
        <p className="font-semibold">CHECK-OUT</p>
        <p>{selectedEndDate ? selectedEndDate : "dd/mm/aaaa"}</p>
      </div>
      {openDate && (
        <DateRangePicker
          ranges={[date]}
          onChange={handleChange}
          minDate={new Date()}
          months={2}
          direction={isMobile ? "vertical" : "horizontal"}
        />
      )}
    </div>
  );
};

export default DatePickerForm;
