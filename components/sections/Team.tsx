import TeamMemberCard from "@/components/ui/TeamMemberCard";

export default function Team() {
  return (
 <section id="mentor" className="bg-transparent py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary font-serif leading-relaxed">Meet the Team</h2>
          <p className="mt-4 text-text-muted">The passionate individuals behind Nrityaam.</p>
        </div>
        
        <TeamMemberCard
          position="left"
          jobPosition="Founder & Lead Instructor"
          firstName="Ranbbir"
          lastName="Banerjee"
          imageUrl="/hero-dancer.png"
          description="Ranbbir is a CCRT National Scholar and 3× World of Dance champion, dedicated to preserving and innovating the art of Bharatanatyam."
        />
        
        <TeamMemberCard
          position="right"
          jobPosition="Creative Director"
          firstName="Ananya"
          lastName="Sharma"
          imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
          description="Ananya brings the visual aesthetic to life, ensuring every piece of content resonates with the rich heritage of classical dance."
        />
      </div>
    </section>
  );
}
