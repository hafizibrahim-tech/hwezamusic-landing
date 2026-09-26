import { Bot, Sparkles, Shield, Music, Zap, Globe, Github, Twitter, Mail, PlayCircle, Search, Settings2, Mic, Gift } from "lucide-react";
import prayagAvatar from "@/assets/prayag-avatar.jpg";

export const siteConfig = {
  bot: {
    name: "HwezaMusic",
    tagline: "Bot Musik & Moderasi Discord Canggih",
    description:
      "HwezaMusic adalah bot Discord all-in-one yang dirancang khusus untuk memutar lagu dengan kualitas tinggi dan menjaga server Anda tetap aman dengan automoderasi simpel.",
    version: "v1.0.0",
    servers: "2000+", // Bisa Anda sesuaikan dengan jumlah server bot saat ini
    users: "10K+",
    commands: 110,
    uptime: "99.99%",
    inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=963680629705277481&permissions=8&scope=bot", // Ganti ID_BOT_ANDA
    supportUrl: "https://discord.gg/n3GwTKnMXp", // Ganti dengan link server discord Anda
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Commands", href: "/commands" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
  ],

  features: [
    {
      icon: PlayCircle,
      title: "Pemutaran Multi-Platform",
      description:
        "Putar lagu favorit Anda dari YouTube, Spotify, Apple Music, SoundCloud, dan platform lainnya dengan mulus.",
    },
    {
      icon: Search,
      title: "Pencarian Akurat",
      description:
        "Cari lagu dengan cepat menggunakan kata kunci. HwezaMusic akan menemukan versi terbaik untuk diputar.",
    },
    {
      icon: Shield,
      title: "Auto-Moderation",
      description:
        "Jaga server tetap aman dengan fitur moderasi lengkap, mulai dari ban, kick, mute, hingga perlindungan anti-spam.",
    },
    {
      icon: Settings2,
      title: "Kontrol Musik Lengkap",
      description:
        "Pause, resume, skip, loop, hingga mengatur volume dan filter audio (bassboost, speed) di ujung jari Anda.",
    },
    {
      icon: Mic,
      title: "Kualitas Audio Jernih",
      description:
        "Nikmati streaming audio lossless yang sejernih kristal tanpa lag untuk komunitas voice channel Anda.",
    },
    {
      icon: Gift,
      title: "Sistem Giveaway",
      description:
        "Buat, kelola, dan undi giveaway dengan mudah langsung dari dalam server untuk meningkatkan interaksi member.",
    },
  ],

  commandCategories: [
    {
      name: "Music",
      icon: Music,
      commands: [
        { name: "/play", description: "Memutar lagu atau playlist", usage: "/play <judul/link>" },
        { name: "/queue", description: "Melihat antrean lagu saat ini", usage: "/queue" },
        { name: "/skip", description: "Melewati lagu yang sedang diputar", usage: "/skip" },
        { name: "/lyrics", description: "Menampilkan lirik lagu", usage: "/lyrics" },
        { name: "/filter", description: "Menerapkan filter audio", usage: "/filter <jenis>" },
      ],
    },
    {
      name: "Moderation",
      icon: Shield,
      commands: [
        { name: "/ban", description: "Memblokir member dari server", usage: "/ban <user> [alasan]" },
        { name: "/kick", description: "Mengeluarkan member dari server", usage: "/kick <user> [alasan]" },
        { name: "/mute", description: "Membisukan member sementara", usage: "/mute <user> <waktu>" },
        { name: "/purge", description: "Menghapus pesan secara massal", usage: "/purge <jumlah>" },
        { name: "/nuke", description: "Membersihkan seluruh isi channel", usage: "/nuke" },
      ],
    },
    {
      name: "Giveaway",
      icon: Gift,
      commands: [
        { name: "/gstart", description: "Memulai giveaway baru", usage: "/gstart <waktu> <pemenang> <hadiah>" },
        { name: "/gend", description: "Mengakhiri giveaway secara paksa", usage: "/gend <message_id>" },
        { name: "/greroll", description: "Mengundi ulang pemenang giveaway", usage: "/greroll <message_id>" },
      ],
    },
    {
      name: "Utility",
      icon: Zap,
      commands: [
        { name: "/serverinfo", description: "Menampilkan statistik server", usage: "/serverinfo" },
        { name: "/userinfo", description: "Menampilkan informasi member", usage: "/userinfo <user>" },
        { name: "/avatar", description: "Menampilkan foto profil resolusi tinggi", usage: "/avatar <user>" },
        { name: "/ping", description: "Mengecek latency bot", usage: "/ping" },
      ],
    },
  ],

  team: [
    {
      name: "Hapiss", // Ganti dengan nama/nickname Anda
      role: "Founder & Lead Developer",
      bio: "??",
      avatar: prayagAvatar, // Pastikan mengganti gambar ini di folder assets dengan foto profil Anda
      socials: { github: "https://github.com/hafizibrahim-tech", twitter: "#" },
    },
  ],

  faqs: [
    {
      q: "Apakah HwezaMusic gratis digunakan?",
      a: "Ya, seluruh fitur utama HwezaMusic, termasuk pemutaran musik kualitas tinggi dan moderasi, sepenuhnya gratis untuk digunakan.",
    },
    {
      q: "Bagaimana cara menambahkan HwezaMusic ke server saya?",
      a: "Cukup klik tombol Invite di website ini, otorisasi bot dengan izin yang diperlukan, dan HwezaMusic siap digunakan di server Anda.",
    },
    {
      q: "Apakah HwezaMusic menyimpan pesan saya?",
      a: "Tidak. Kami hanya menyimpan data konfigurasi yang penting untuk menjalankan command. Lihat halaman Privasi kami untuk detail lengkap.",
    },
    {
      q: "Bagaimana jika bot mengalami offline?",
      a: "Infrastruktur kami dirancang untuk meminimalisir downtime. Jika terjadi gangguan, pembaruan status akan langsung diumumkan di server support kami.",
    },
  ],

  contact: {
    email: "ibrahimhafiz840@gmail.com",
    discord: "https://discord.gg/n3GwTKnMXp",
    github: "https://github.com/hafizibrahim-tech",
    twitter: "#",
  },

  socials: [
    { icon: Github, href: "https://github.com/hafizibrahim-tech", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:ibrahimhafiz840@gmail.com", label: "Email" },
  ],

  privacy: {
    lastUpdated: "Oktober 2026",
    sections: [
      {
        title: "Informasi yang Kami Kumpulkan",
        body: "Kami mengumpulkan data minimal yang diperlukan agar bot dapat berfungsi: ID server, ID channel, ID role, dan preferensi konfigurasi. Kami tidak pernah menyimpan isi pesan kecuali diaktifkan secara eksplisit oleh administrator server untuk fitur logging.",
      },
      {
        title: "Bagaimana Kami Menggunakan Data Anda",
        body: "Data Anda digunakan semata-mata untuk menyediakan fungsionalitas bot seperti mengingat pengaturan server, command custom, log moderasi, dan antrean musik. Kami tidak menjual, menyewakan, atau membagikan data Anda kepada pihak ketiga.",
      },
      {
        title: "Penyimpanan Data",
        body: "Data konfigurasi bertahan selama bot tetap berada di server Anda. Ketika HwezaMusic dikeluarkan dari server, semua data terkait akan dihapus secara otomatis dalam waktu 30 hari.",
      },
      {
        title: "Hak Anda",
        body: "Anda dapat meminta ekspor penuh atau penghapusan data Anda kapan saja dengan menghubungi tim support kami melalui email atau Discord.",
      },
    ],
  },

  terms: {
    sections: [
      {
        title: "Penggunaan yang Dapat Diterima",
        body: "Dengan menggunakan HwezaMusic, Anda setuju untuk tidak menyalahgunakan layanan, mencoba menghindari batasan *rate limit*, atau menggunakan bot untuk aktivitas ilegal. Pelanggaran dapat mengakibatkan larangan permanen dari layanan.",
      },
      {
        title: "Ketersediaan Layanan",
        body: "HwezaMusic disediakan 'sebagaimana adanya'. Kami tidak bertanggung jawab atas gangguan layanan, kehilangan data, atau kerusakan yang timbul dari penggunaan bot.",
      },
      {
        title: "Perubahan pada Ketentuan Ini",
        body: "Kami dapat memperbarui ketentuan ini sewaktu-waktu. Penggunaan berkelanjutan setelah adanya perubahan merupakan bentuk penerimaan terhadap ketentuan yang diperbarui.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;