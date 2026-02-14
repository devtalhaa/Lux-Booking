import Hero from '@/components/hero';
import StartEarning from '@/components/hero/start-earning';
import WhyChooseLux from '@/components/hero/why-choose-lux';
import WhatIsLux from '@/components/hero/what-is-lux';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhatIsLux />
      <WhyChooseLux />
      <StartEarning />
    </main>
  );
}
