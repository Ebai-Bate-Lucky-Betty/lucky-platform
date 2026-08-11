export default function Hero({
  data,
}: {
  data: {
    name: string;
    title: string;
    subtitle: string;
    specialty: string;
  };
}) {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center bg-white text-black px-6">

      <p className="text-sm tracking-widest text-gray-500 uppercase">
        Welcome to my world
      </p>

      <h1 className="text-7xl font-light mt-6 tracking-tight">
        {data.name}
      </h1>

      <h2 className="text-2xl text-blue-700 mt-4 font-medium">
        {data.title}
      </h2>

      <p className="text-lg text-gray-600 mt-8 max-w-xl leading-relaxed">
        I build at the intersection of creativity and software engineering,
        crafting digital experiences that make people curious.
      </p>
    </section>
  );
}