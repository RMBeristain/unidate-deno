const LocalDate = () => {
  const now = new Date();

  // Helper function to check if toLocaleString supports locales
  const toLocaleStringSupportsLocales = () =>
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function";

  const hostLocale = toLocaleStringSupportsLocales()
    ? globalThis.navigator.language // was `window.navigator.language`
    : undefined;

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <span>
      {now.toLocaleDateString(hostLocale, dateOptions)}
    </span>
  );
};

export default LocalDate;
