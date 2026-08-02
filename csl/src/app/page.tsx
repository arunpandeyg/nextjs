import ProfileCarousel from "@/components/ProfileCarousel";


// Example Profile type and data; replace with your actual Profile type and data source
type Profile = {
  id: number;
  name: string;
  avatar: string;
  // add other fields as needed
};

const profiles: Profile[] = [
  { id: 1, name: "Alice Johnson", avatar: "/avatars/1.jpg", bio: "UX Designer from NY" },
  { id: 2, name: "Bob Smith", avatar: "/avatars/2.jpg", bio: "Frontend Dev from SF" },
  { id: 3, name: "Carla Brown", avatar: "/avatars/3.jpg", bio: "Data Scientist from LA" },
  { id: 4, name: "Daniel Lee", avatar: "/avatars/4.jpg", bio: "Backend Dev from TX" },
  { id: 5, name: "Emma Davis", avatar: "/avatars/5.jpg", bio: "Fullstack Dev from FL" },
  { id: 6, name: "Frank Miller", avatar: "/avatars/6.jpg", bio: "AI Engineer from CA" },
  // add more profiles as needed
];

export default function Home() {
  return (
    <div className="">
      <ProfileCarousel profiles={profiles}/>
    </div>
  );
}
