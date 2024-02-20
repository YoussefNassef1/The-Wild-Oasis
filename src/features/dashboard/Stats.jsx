import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkIns = confirmedStays.length;
  const Occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        color="blue"
        title="Bookings"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        color="green"
        title="Sales"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        color="indigo"
        title="check in"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        color="yellow"
        title="Occupancy rate"
        icon={<HiOutlineChartBar />}
        value={Math.round(Occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
