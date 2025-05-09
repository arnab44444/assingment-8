import CountUp from 'react-countup';
import { FaUserMd, FaUsers, FaRegThumbsUp, FaUserTie } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    { icon: <FaUserMd className="text-4xl text-primary " />, label: "Total Doctors", value: 199 },
    { icon: <FaRegThumbsUp className="text-4xl text-primary" />, label: "Total Reviews", value: 467 },
    { icon: <FaUsers className="text-4xl text-primary" />, label: "Patients", value: 1900 },
    { icon: <FaUserTie className="text-4xl text-primary" />, label: "Total Staffs", value: 300 },
  ];

  return (
    <div className="grid mt-10 grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-base-100 shadow rounded-box">
      {stats.map((stat, index) => (
        <div key={index} className="text-center space-y-2">
          <div className="flex justify-center">{stat.icon}</div>
          <h2 className="text-3xl font-bold text-neutral">
            <CountUp end={stat.value} duration={5} />+
          </h2>
          <p className="text-sm text-base-content">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;