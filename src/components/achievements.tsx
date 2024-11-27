// components/JobAchievementSection.js
import Image from 'next/image';

const companies = [
  { name: 'Amazon', logo: '/ama.svg' },
  { name: 'Google', logo: '/google.svg' },
  { name: 'Microsoft', logo: '/mic.svg' },
  { name: 'Mantech', logo: '/HO1.png' },
  { name: 'Samsung', logo: '/sa1.png' },
  { name: 'Goldensach', logo: '/go.png' },
  { name: 'Hictachi', logo: '/ha.png' },
  { name: 'airtel', logo: '/air.png' },
  { name: 'Apple', logo: '/ap.png' },
  { name: 'OpenAi', logo: '/ai1.png' },
  { name: 'Dell', logo: '/del.png' },
  { name: 'PayPal', logo: '/pay.png' },
  { name: 'hp', logo: '/hp1.png' },
  { name: 'Mercdesbenz', logo: '/ma1.png' },
  { name: 'JPMorgan', logo: '/sa2.png' },

];

const JobAchievementSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Thousands of students achieved their <span className="text-[#A580FC]">dream job</span> at
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
        {companies.map((company) => (
          <div key={company.name} className="flex items-center justify-center">
            <Image src={company.logo} alt={company.name} width={140} height={140} className="object-contain"/>
          </div>
        ))}
      </div>

      <p className="text-gray-500 mt-6">+ many more</p>
    </section>
  );
};

export default JobAchievementSection;
