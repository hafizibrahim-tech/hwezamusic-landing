import { Music, Search, Shield, Settings2, PlayCircle, Mic } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

const features = [
  {
    title: "Pemutaran Multi-Platform",
    description: "Putar lagu favorit Anda dari YouTube, Spotify, Apple Music, SoundCloud, dan banyak platform lainnya dengan kualitas tinggi.",
    icon: PlayCircle,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Pencarian Akurat",
    description: "Cari lagu dengan cepat menggunakan kata kunci. HwezaMusic akan menemukan versi terbaik untuk Anda dengarkan.",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Auto-Moderation (Simple)",
    description: "Jaga server Anda tetap aman dan tertib dengan fitur automoderasi simpel bawaan HwezaMusic.",
    icon: Shield,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Kontrol Musik Lengkap",
    description: "Pause, resume, skip, loop, hingga mengatur volume. Semua kontrol yang Anda butuhkan ada di genggaman.",
    icon: Settings2,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "Kualitas Audio Jernih",
    description: "Nikmati musik tanpa lag dan gangguan dengan kualitas audio terbaik untuk voice channel Discord Anda.",
    icon: Mic,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Berbagai Filter Audio",
    description: "Ubah suasana dengan fitur filter audio (bassboost, dll) untuk memberikan warna baru pada lagu yang sedang diputar.",
    icon: Music,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-muted/50">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Fitur Utama HwezaMusic
          </h2>
          <p className="text-xl text-muted-foreground">
            Satu bot untuk semua kebutuhan musik dan manajemen server dasar Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg}`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;