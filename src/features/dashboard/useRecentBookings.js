import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParam] = useSearchParams();
  const numDays = !searchParam.get("last")
    ? 7
    : Number(searchParam.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoading };
}
