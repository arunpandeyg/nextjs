import Image from "next/image";
import ProfileCarousel from "@/components/ProfileCarousel";

// Mock Data (replace with DB/API fetch)
const profiles = [
  { id: 1, name: "Alice Johnson", avatar: "/avatars/1.jpg", bio: "UX Designer from NY" },
  { id: 2, name: "Bob Smith", avatar: "/avatars/2.jpg", bio: "Frontend Dev from SF" },
  { id: 3, name: "Carla Brown", avatar: "/avatars/3.jpg", bio: "Data Scientist from LA" },
  { id: 4, name: "Daniel Lee", avatar: "/avatars/4.jpg", bio: "Backend Dev from TX" },
  { id: 5, name: "Emma Davis", avatar: "/avatars/5.jpg", bio: "Fullstack Dev from FL" },
  { id: 6, name: "Frank Miller", avatar: "/avatars/6.jpg", bio: "AI Engineer from CA" },
];

export default function ProfilePage({ params }: { params: { id: string } }) {
  const profileId = parseInt(params.id);
  const profile = profiles.find((p) => p.id === profileId);

  if (!profile) return <div className="p-10">Profile not found</div>;

  // Suggest 5 others (excluding current)
  const suggestions = profiles.filter((p) => p.id !== profileId).slice(0, 5);

  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* Profile Details */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative w-48 h-58  rounded-2xl overflow-hidden shadow-lg">
          <Image src={profile.avatar} alt={profile.name} fill className="object-cover p-4" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-gray-600">{profile.bio}</p>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">You may also like</h2>
        <ProfileCarousel profiles={suggestions} />
      </div>
    </div>
  );
}
