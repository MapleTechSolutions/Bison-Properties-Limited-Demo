"use client";

const stats = [
  {
    label: "Average Price",
    value: "$385,000",
    change: "+2.3%",
    changeType: "positive",
  },
  {
    label: "Lowest Price",
    value: "$249,900",
    change: null,
    changeType: null,
  },
  {
    label: "Highest Price",
    value: "$899,900",
    change: null,
    changeType: null,
  },
  {
    label: "Total Listings",
    value: "342",
    change: "+15",
    changeType: "positive",
  },
  {
    label: "Avg Days On Market",
    value: "28",
    change: "-5 days",
    changeType: "positive",
  },
  {
    label: "Avg Price/Sqft",
    value: "$195",
    change: "+1.8%",
    changeType: "positive",
  },
];

const propertyTypes = [
  { type: "Single Family", percentage: 45, color: "#0d9488" },
  { type: "Townhouse", percentage: 25, color: "#0f766e" },
  { type: "Condo", percentage: 20, color: "#115e59" },
  { type: "Duplex", percentage: 10, color: "#134e4a" },
];

export default function RealEstateStats() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#f5f5f5]">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-1 sm:mb-2">
              Regina Real Estate Stats
            </h2>
            <p className="text-[#4a4a4a] text-sm sm:text-base">
              Current market overview for new home buyers
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0d9488]/10 rounded-full self-start md:self-auto">
            <div className="w-2 h-2 bg-[#0d9488] rounded-full animate-pulse" />
            <span className="text-[#0d9488] font-medium text-xs sm:text-sm">Updated every 15 minutes</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Stats Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-[#4a4a4a] text-xs sm:text-sm mb-1">{stat.label}</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-black">{stat.value}</p>
                  {stat.change && (
                    <p
                      className={`text-xs sm:text-sm font-semibold mt-1 ${
                        stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Property Types Donut Chart Placeholder */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
            <h3 className="font-bold text-black mb-4 sm:mb-6 text-sm sm:text-base">Property Types</h3>

            {/* Donut Chart Placeholder */}
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {propertyTypes.reduce((acc, type, index) => {
                  const previousPercentage = propertyTypes
                    .slice(0, index)
                    .reduce((sum, t) => sum + t.percentage, 0);
                  const circumference = 2 * Math.PI * 35;
                  const strokeDasharray = (type.percentage / 100) * circumference;
                  const strokeDashoffset = (previousPercentage / 100) * circumference;

                  acc.push(
                    <circle
                      key={index}
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke={type.color}
                      strokeWidth="12"
                      strokeDasharray={`${strokeDasharray} ${circumference}`}
                      strokeDashoffset={-strokeDashoffset}
                      className="transition-all duration-500"
                    />
                  );
                  return acc;
                }, [] as JSX.Element[])}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-black">342</p>
                  <p className="text-[10px] sm:text-xs text-[#4a4a4a]">Total</p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-1.5 sm:space-y-2">
              {propertyTypes.map((type, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: type.color }}
                    />
                    <span className="text-xs sm:text-sm text-[#4a4a4a]">{type.type}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-black">{type.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] sm:text-xs text-[#4a4a4a] mt-6 sm:mt-8 text-center px-2">
          * Statistics shown are for demonstration purposes only. Actual market data may vary.
        </p>
      </div>
    </section>
  );
}
