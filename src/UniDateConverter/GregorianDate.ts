/**
 * @returns string with the browser's local date
 */
export const getGregorianDate = (format: "long" | "iso", when = ""): string => {
    let userDate;

    if (when === "") {
        userDate = new Date();
    } else {
        userDate = new Date(when);
    }

    // Helper function to check if toLocaleString supports locales
    const toLocaleStringSupportsLocales = () =>
        typeof Intl === "object" &&
        !!Intl &&
        typeof Intl.DateTimeFormat === "function";

    const hostLocale = toLocaleStringSupportsLocales()
        ? globalThis.navigator.language // was `window.navigator.language`
        : undefined;

    let dateOptions: Intl.DateTimeFormatOptions;

    if (format === "long") {
        dateOptions = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        };
    } else {
        // For ISO format, we don't need locale-specific options
        return userDate.toISOString().split("T")[0];
    }

    return userDate.toLocaleDateString(hostLocale, dateOptions);
};
