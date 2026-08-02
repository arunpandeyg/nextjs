// FILE: app/page.tsx
// -----------------------------
import EmblaCarousel from "../components/EmblaCarousel";

export default function HomePage() {
  return (
    <main className="p-4">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <EmblaCarousel />
      </section>
    </main>
  );
}
