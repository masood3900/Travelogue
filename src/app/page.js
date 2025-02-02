import Image from "next/image";

export default function Home() {
  return (
    <section>
      {/* معرفی کوتاه */}
      <section id="about" className="text-center mt-6">
        <img
          src="/us.jpg"
          alt="عکس ما"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <p className="mt-4 text-lg">سلام! ما  عاشق سفر و کشف دنیا هستیم. مااینجا تجربیات و خاطرات سفرهامون را ثبت می کنیم.</p>
      </section>

      {/* لیست سفرها */}
      <section id="travels" className="mt-8">
        <h2 className="text-2xl font-semibold">📍 سفرهای اخیر ما</h2>
        <ul className="mt-4 space-y-2">
          
        </ul>
      </section>
    </section>
  );
}