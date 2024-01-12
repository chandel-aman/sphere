import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
import * as timezone from "dayjs/plugin/timezone";

dayjs.extend(utc); // Extend Day.js with UTC support
dayjs.extend(timezone); // Extend Day.js with Timezone support

/**
 * Format a UTC timestamp to a specified time zone and format.
 * @param {string} timestamp - The UTC timestamp to format.
 * @param {string} userTimeZone - The user's preferred time zone (e.g., "Asia/Kolkata").
 * @param {string} format - The desired format (e.g., "HH:mm").
 * @returns {string} - The formatted timestamp in the user's time zone.
 */
function formatTimestampInTimeZone(
  timestamp: string,
  userTimeZone: string,
  format: string
): string {
  // Parse the UTC timestamp using Day.js
  const utcTimestamp = dayjs(timestamp).utc();

  // Format the timestamp in the user's time zone
  const formattedTime = utcTimestamp.tz(userTimeZone).format(format);

  return formattedTime;
}

export default formatTimestampInTimeZone;
