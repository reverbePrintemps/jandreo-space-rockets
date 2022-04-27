export const formatDate = (timestamp: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
};

enum LaunchSite {
  // Cape Canaveral Air Force Station Space Launch Complex 40
  Cape_Canaveral = "ccafs_slc_40",
  // Kennedy Space Center Historic Launch Complex 39A
  Kennedy_Space_Center = "ksc_lc_39a",
  // Vandenberg Air Force Base Space Launch Complex 4E
  Vandenberg_Air_Force_Base = "vafb_slc_4e",
}

export enum TimeZoneDisplayKind {
  local,
  user,
}

type TimeZone =
  | { kind: TimeZoneDisplayKind.local; timestamp: Date; launchSite: string }
  | { kind: TimeZoneDisplayKind.user; timestamp: Date };

/**
 * @param {string} kind - Display time in local or user dateTime
 * @param {string} timestamp
 * @param {string} launchSite - Used to determine local dateTime
 */
export const formatDateTime = (args: TimeZone) => {
  let timezone;
  switch (args.kind) {
    case TimeZoneDisplayKind.local:
      // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      timezone =
        args.launchSite ===
        (LaunchSite.Cape_Canaveral || LaunchSite.Kennedy_Space_Center)
          ? "America/New_York"
          : args.launchSite === LaunchSite.Vandenberg_Air_Force_Base
          ? "America/Los_Angeles"
          : // TODO communicate unknown launchSite
            undefined;
      break;
    case TimeZoneDisplayKind.user:
      // When timeZone is undefined, dateTime is offset to user time
      timezone = undefined;
      break;
    default:
      // Default to old behavior
      timezone = undefined;
      break;
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: timezone,
    timeZoneName: "short",
  }).format(new Date(args.timestamp));
};
