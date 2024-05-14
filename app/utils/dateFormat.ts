export const formatRangeDate = (startDate: string, endDate: string) => {
  const differenceInTime =
    new Date(endDate).getTime() - new Date(startDate).getTime();

  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
};
