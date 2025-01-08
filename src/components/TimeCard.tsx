const TimeCard = (
  {
    timeCardStyle = "timeCardDark",
    timeCardTitle = "Unified Date",
    timeCardDate,
  }: {
    timeCardStyle: string;
    timeCardTitle: string;
    timeCardDate: React.ReactNode;
  },
) => {
  return (
    <div className={timeCardStyle}>
      <h2 className="text-3xl font-bold">{timeCardTitle}</h2>
      <p className="mt-2 mb-4 text-lg">
        {timeCardDate}
      </p>
      <a
        href="/jobs.html"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        Start clock
      </a>
    </div>
  );
};

export default TimeCard;
