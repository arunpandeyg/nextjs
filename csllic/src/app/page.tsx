
import policies from "@/data/LIC";
import PolicyCarousel from "@/components/PolicyCarousel";




export default function Home() {
  return (
    <div className="">
      <PolicyCarousel policies={policies} />
    </div>
  );
}
