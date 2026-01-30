import Hero from '@/components/hero';
import StartEarning from '@/components/hero/start-earning';
import WhyChooseLux from '@/components/hero/why-choose-lux';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhyChooseLux />
      <StartEarning />
    </main>
  );
}
