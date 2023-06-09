interface ITimezone {
    value: String;
    label: String;
}

const timezones: ITimezone[] = [
    {
        value: "Pacific/Midway",
        label: "Midway Island, Samoa",
    },
    {
        value: "Pacific/Pago_Pago",
        label: "Pago Pago",
    },
    {
        value: "Pacific/Honolulu",
        label: "Hawaii",
    },
    {
        value: "America/Anchorage",
        label: "Alaska",
    },
    {
        value: "America/Vancouver",
        label: "Vancouver",
    },
    {
        value: "America/Los_Angeles",
        label: "Pacific Time (US and Canada)",
    },
    {
        value: "America/Tijuana",
        label: "Tijuana",
    },
    {
        value: "America/Edmonton",
        label: "Edmonton",
    },
    {
        value: "America/Denver",
        label: "Mountain Time (US and Canada)",
    },
    {
        value: "America/Phoenix",
        label: "Arizona",
    },
    {
        value: "America/Mazatlan",
        label: "Mazatlan",
    },
    {
        value: "America/Winnipeg",
        label: "Winnipeg",
    },
    {
        value: "America/Regina",
        label: "Saskatchewan",
    },
    {
        value: "America/Chicago",
        label: "Central Time (US and Canada)",
    },
    {
        value: "America/Mexico_City",
        label: "Mexico City",
    },
    {
        value: "America/Guatemala",
        label: "Guatemala",
    },
    {
        value: "America/El_Salvador",
        label: "El Salvador",
    },
    {
        value: "America/Managua",
        label: "Managua",
    },
    {
        value: "America/Costa_Rica",
        label: "Costa Rica",
    },
    {
        value: "America/Montreal",
        label: "Montreal",
    },
    {
        value: "America/New_York",
        label: "Eastern Time (US and Canada)",
    },
    {
        value: "America/Indianapolis",
        label: "Indiana (East)",
    },
    {
        value: "America/Panama",
        label: "Panama",
    },
    {
        value: "America/Bogota",
        label: "Bogota",
    },
    {
        value: "America/Lima",
        label: "Lima",
    },
    {
        value: "America/Halifax",
        label: "Halifax",
    },
    {
        value: "America/Puerto_Rico",
        label: "Puerto Rico",
    },
    {
        value: "America/Caracas",
        label: "Caracas",
    },
    {
        value: "America/Santiago",
        label: "Santiago",
    },
    {
        value: "America/St_Johns",
        label: "Newfoundland and Labrador",
    },
    {
        value: "America/Montevideo",
        label: "Montevideo",
    },
    {
        value: "America/Araguaina",
        label: "Brasilia",
    },
    {
        value: "America/Argentina/Buenos_Aires",
        label: "Buenos Aires, Georgetown",
    },
    {
        value: "America/Godthab",
        label: "Greenland",
    },
    {
        value: "America/Sao_Paulo",
        label: "Sao Paulo",
    },
    {
        value: "Atlantic/Azores",
        label: "Azores",
    },
    {
        value: "Canada/Atlantic",
        label: "Atlantic Time (Canada)",
    },
    {
        value: "Atlantic/Cape_Verde",
        label: "Cape Verde Islands",
    },
    {
        value: "UTC",
        label: "Universal Time UTC",
    },
    {
        value: "Etc/Greenwich",
        label: "Greenwich Mean Time",
    },
    {
        value: "Europe/Belgrade",
        label: "Belgrade, Bratislava, Ljubljana",
    },
    {
        value: "CET",
        label: "Sarajevo, Skopje, Zagreb",
    },
    {
        value: "Atlantic/Reykjavik",
        label: "Reykjavik",
    },
    {
        value: "Europe/Dublin",
        label: "Dublin",
    },
    {
        value: "Europe/London",
        label: "London",
    },
    {
        value: "Europe/Lisbon",
        label: "Lisbon",
    },
    {
        value: "Africa/Casablanca",
        label: "Casablanca",
    },
    {
        value: "Africa/Nouakchott",
        label: "Nouakchott",
    },
    {
        value: "Europe/Oslo",
        label: "Oslo",
    },
    {
        value: "Europe/Copenhagen",
        label: "Copenhagen",
    },
    {
        value: "Europe/Brussels",
        label: "Brussels",
    },
    {
        value: "Europe/Berlin",
        label: "Amsterdam, Berlin, Rome, Stockholm, Vienna",
    },
    {
        value: "Europe/Helsinki",
        label: "Helsinki",
    },
    {
        value: "Europe/Amsterdam",
        label: "Amsterdam",
    },
    {
        value: "Europe/Rome",
        label: "Rome",
    },
    {
        value: "Europe/Stockholm",
        label: "Stockholm",
    },
    {
        value: "Europe/Vienna",
        label: "Vienna",
    },
    {
        value: "Europe/Luxembourg",
        label: "Luxembourg",
    },
    {
        value: "Europe/Paris",
        label: "Paris",
    },
    {
        value: "Europe/Zurich",
        label: "Zurich",
    },
    {
        value: "Europe/Madrid",
        label: "Madrid",
    },
    {
        value: "Africa/Bangui",
        label: "West Central Africa",
    },
    {
        value: "Africa/Algiers",
        label: "Algiers",
    },
    {
        value: "Africa/Tunis",
        label: "Tunis",
    },
    {
        value: "Africa/Harare",
        label: "Harare, Pretoria",
    },
    {
        value: "Africa/Nairobi",
        label: "Nairobi",
    },
    {
        value: "Europe/Warsaw",
        label: "Warsaw",
    },
    {
        value: "Europe/Prague",
        label: "Prague Bratislava",
    },
    {
        value: "Europe/Budapest",
        label: "Budapest",
    },
    {
        value: "Europe/Sofia",
        label: "Sofia",
    },
    {
        value: "Europe/Istanbul",
        label: "Istanbul",
    },
    {
        value: "Europe/Athens",
        label: "Athens",
    },
    {
        value: "Europe/Bucharest",
        label: "Bucharest",
    },
    {
        value: "Asia/Nicosia",
        label: "Nicosia",
    },
    {
        value: "Asia/Beirut",
        label: "Beirut",
    },
    {
        value: "Asia/Damascus",
        label: "Damascus",
    },
    {
        value: "Asia/Jerusalem",
        label: "Jerusalem",
    },
    {
        value: "Asia/Amman",
        label: "Amman",
    },
    {
        value: "Africa/Tripoli",
        label: "Tripoli",
    },
    {
        value: "Africa/Cairo",
        label: "Cairo",
    },
    {
        value: "Africa/Johannesburg",
        label: "Johannesburg",
    },
    {
        value: "Europe/Moscow",
        label: "Moscow",
    },
    {
        value: "Asia/Baghdad",
        label: "Baghdad",
    },
    {
        value: "Asia/Kuwait",
        label: "Kuwait",
    },
    {
        value: "Asia/Riyadh",
        label: "Riyadh",
    },
    {
        value: "Asia/Bahrain",
        label: "Bahrain",
    },
    {
        value: "Asia/Qatar",
        label: "Qatar",
    },
    {
        value: "Asia/Aden",
        label: "Aden",
    },
    {
        value: "Asia/Tehran",
        label: "Tehran",
    },
    {
        value: "Africa/Khartoum",
        label: "Khartoum",
    },
    {
        value: "Africa/Djibouti",
        label: "Djibouti",
    },
    {
        value: "Africa/Mogadishu",
        label: "Mogadishu",
    },
    {
        value: "Asia/Dubai",
        label: "Dubai",
    },
    {
        value: "Asia/Muscat",
        label: "Muscat",
    },
    {
        value: "Asia/Baku",
        label: "Baku, Tbilisi, Yerevan",
    },
    {
        value: "Asia/Kabul",
        label: "Kabul",
    },
    {
        value: "Asia/Yekaterinburg",
        label: "Yekaterinburg",
    },
    {
        value: "Asia/Tashkent",
        label: "Islamabad, Karachi, Tashkent",
    },
    {
        value: "Asia/Calcutta",
        label: "India",
    },
    {
        value: "Asia/Kathmandu",
        label: "Kathmandu",
    },
    {
        value: "Asia/Novosibirsk",
        label: "Novosibirsk",
    },
    {
        value: "Asia/Almaty",
        label: "Almaty",
    },
    {
        value: "Asia/Dacca",
        label: "Dacca",
    },
    {
        value: "Asia/Krasnoyarsk",
        label: "Krasnoyarsk",
    },
    {
        value: "Asia/Dhaka",
        label: "Astana, Dhaka",
    },
    {
        value: "Asia/Bangkok",
        label: "Bangkok",
    },
    {
        value: "Asia/Saigon",
        label: "Vietnam",
    },
    {
        value: "Asia/Jakarta",
        label: "Jakarta",
    },
    {
        value: "Asia/Irkutsk",
        label: "Irkutsk, Ulaanbaatar",
    },
    {
        value: "Asia/Shanghai",
        label: "Beijing, Shanghai",
    },
    {
        value: "Asia/Hong_Kong",
        label: "Hong Kong",
    },
    {
        value: "Asia/Taipei",
        label: "Taipei",
    },
    {
        value: "Asia/Kuala_Lumpur",
        label: "Kuala Lumpur",
    },
    {
        value: "Asia/Singapore",
        label: "Singapore",
    },
    {
        value: "Australia/Perth",
        label: "Perth",
    },
    {
        value: "Asia/Yakutsk",
        label: "Yakutsk",
    },
    {
        value: "Asia/Seoul",
        label: "Seoul",
    },
    {
        value: "Asia/Tokyo",
        label: "Osaka, Sapporo, Tokyo",
    },
    {
        value: "Australia/Darwin",
        label: "Darwin",
    },
    {
        value: "Australia/Adelaide",
        label: "Adelaide",
    },
    {
        value: "Asia/Vladivostok",
        label: "Vladivostok",
    },
    {
        value: "Pacific/Port_Moresby",
        label: "Guam, Port Moresby",
    },
    {
        value: "Australia/Brisbane",
        label: "Brisbane",
    },
    {
        value: "Australia/Sydney",
        label: "Canberra, Melbourne, Sydney",
    },
    {
        value: "Australia/Hobart",
        label: "Hobart",
    },
    {
        value: "Asia/Magadan",
        label: "Magadan",
    },
    {
        value: "SST",
        label: "Solomon Islands",
    },
    {
        value: "Pacific/Noumea",
        label: "New Caledonia",
    },
    {
        value: "Asia/Kamchatka",
        label: "Kamchatka",
    },
    {
        value: "Pacific/Fiji",
        label: "Fiji Islands, Marshall Islands",
    },
    {
        value: "Pacific/Auckland",
        label: "Auckland, Wellington",
    },
    {
        value: "Asia/Kolkata",
        label: "Mumbai, Kolkata, New Delhi",
    },
    {
        value: "Europe/Kiev",
        label: "Kiev",
    },
    {
        value: "America/Tegucigalpa",
        label: "Tegucigalpa",
    },
    {
        value: "Pacific/Apia",
        label: "Independent State of Samoa",
    },
];

export default timezones