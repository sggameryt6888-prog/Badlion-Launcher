<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Badlion Client | Ultimate Minecraft Performance</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #000;
            color: #fff;
        }
        .glow-blue { text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
        .glow-yellow { text-shadow: 0 0 10px rgba(204, 255, 0, 0.5); }
        .btn-glow:hover {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.6);
            transform: translateY(-2px);
        }
        .bg-mesh {
            background: radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.05) 0%, transparent 40%),
                        radial-gradient(circle at 80% 70%, rgba(204, 255, 0, 0.05) 0%, transparent 40%);
        }
    </style>
</head>
<body class="bg-mesh">

    <nav class="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="w-10 h-10 bg-[#CCFF00] rounded-lg flex items-center justify-center">
                    <i data-lucide="zap" class="text-black"></i>
                </div>
                <span class="text-xl font-extrabold tracking-tighter uppercase italic">Badlion</span>
            </div>
            
            <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                <a href="#hero" class="hover:text-[#00FFFF] transition-colors">Home</a>
                <a href="#features" class="hover:text-[#00FFFF] transition-colors">Features</a>
                <a href="#screenshots" class="hover:text-[#00FFFF] transition-colors">Screenshots</a>
                <a href="#about" class="hover:text-[#00FFFF] transition-colors">About</a>
                <a href="#download" class="px-5 py-2 bg-white text-black rounded-full font-bold btn-glow transition-all">Download</a>
            </div>

            <div class="md:hidden">
                <i data-lucide="menu"></i>
            </div>
        </div>
    </nav>

    <section id="hero" class="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <span class="w-2 dark:h-2 bg-[#00FFFF] rounded-full animate-pulse"></span>
            <span class="text-xs font-semibold tracking-widest uppercase text-gray-400">Latest Release is Live</span>
        </div>
        
        <h1 class="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
            BADLION <span class="text-[#00FFFF] glow-blue">CLIENT</span>
        </h1>
        
        <p class="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            The ultimate Minecraft PvP client. Built for massive FPS boosts, 
            premium mods, and anti-cheat protection.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
            <a href="#download" class="px-10 py-4 bg-white text-black rounded-xl font-bold text-lg btn-glow transition-all flex items-center gap-2">
                <i data-lucide="download" class="w-5 h-5"></i> Download Windows
            </a>
            <a href="#download" class="px-10 py-4 bg-transparent border border-white/20 hover:border-white/40 rounded-xl font-bold text-lg transition-all flex items-center gap-2">
                <i data-lucide="apple" class="w-5 h-5"></i> Download macOS
            </a>
        </div>
    </section>

    <section id="features" class="py-24 max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Unmatched <span class="text-[#CCFF00] glow-yellow">Performance</span></h2>
            <p class="text-gray-500">Everything you need to dominate the leaderboard.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00FFFF]/30 transition-all group">
                <i data-lucide="gauge" class="w-12 h-12 text-[#00FFFF] mb-6"></i>
                <h3 class="text-xl font-bold mb-3">FPS Boost</h3>
                <p class="text-gray-400 leading-relaxed text-sm">Experience up to 2x more frames with our optimized rendering engine.</p>
            </div>
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#CCFF00]/30 transition-all group">
                <i data-lucide="shield-check" class="w-12 h-12 text-[#CCFF00] mb-6"></i>
                <h3 class="text-xl font-bold mb-3">Anti-Cheat</h3>
                <p class="text-gray-400 leading-relaxed text-sm">Built-in protection to keep the game fair for everyone on our partner servers.</p>
            </div>
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group">
                <i data-lucide="layers" class="w-12 h-12 text-white mb-6"></i>
                <h3 class="text-xl font-bold mb-3">100+ Mods</h3>
                <p class="text-gray-400 leading-relaxed text-sm">Custom crosshairs, keystrokes, armor status, and waypoints in one click.</p>
            </div>
        </div>
    </section>

    <section id="screenshots" class="py-24 bg-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl font-bold mb-12 text-center">In-Game <span class="text-[#00FFFF]">Interface</span></h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="aspect-video bg-gray-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center group">
                    <span class="text-gray-600 italic group-hover:scale-110 transition-transform">Screenshot 1 [Placeholder]</span>
                </div>
                <div class="aspect-video bg-gray-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center group">
                    <span class="text-gray-600 italic group-hover:scale-110 transition-transform">Screenshot 2 [Placeholder]</span>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="py-24 max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8">About Badlion</h2>
        <p class="text-gray-400 leading-loose">
            Founded by competitive gamers, Badlion Client was designed to bridge the gap between performance and utility. We believe that hardware shouldn't limit your skill. Our client is updated weekly to ensure compatibility with the latest versions of Minecraft and the most popular PvP mods.
        </p>
    </section>

    <section id="community" class="py-24 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-12 uppercase tracking-widest">Join the Community</h2>
            <div class="flex flex-wrap justify-center gap-6">
                <a href="https://youtube.com/@nekostrikesg?si=8S9UV6yqw45oSlNg" target="_blank" class="flex items-center gap-4 px-8 py-4 bg-[#FF0000]/10 border border-[#FF0000]/20 rounded-2xl hover:bg-[#FF0000]/20 transition-all group">
                    <i data-lucide="youtube" class="w-8 h-8 text-[#FF0000]"></i>
                    <div class="text-left">
                        <p class="text-xs uppercase text-gray-400">Subscribe on</p>
                        <p class="font-bold">YouTube</p>
                    </div>
                </a>
                <a href="https://discord.gg/9VCre5xpK" target="_blank" class="flex items-center gap-4 px-8 py-4 bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-2xl hover:bg-[#5865F2]/20 transition-all group">
                    <i data-lucide="message-square" class="w-8 h-8 text-[#5865F2]"></i>
                    <div class="text-left">
                        <p class="text-xs uppercase text-gray-400">Join our</p>
                        <p class="font-bold">Discord</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section id="download" class="py-24 bg-gradient-to-b from-black to-blue-900/20">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-6">Ready to <span class="text-[#00FFFF]">Dominate?</span></h2>
            <p class="text-gray-400 mb-10">Join over 12 million players already using the client.</p>
            <button class="px-16 py-5 bg-white text-black rounded-2xl font-black text-xl btn-glow transition-all uppercase tracking-tighter">
                Download Now
            </button>
        </div>
    </section>

    <footer class="py-12 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="flex items-center gap-2 opacity-50">
                <div class="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <i data-lucide="zap" class="text-black w-4 h-4"></i>
                </div>
                <span class="text-sm font-bold uppercase">Badlion</span>
            </div>
            
            <p class="text-gray-600 text-xs">
                &copy; 2026 Badlion Launcher. Not an official Minecraft product.
            </p>

            <div class="flex gap-6">
                <a href="#" class="text-gray-500 hover:text-white transition-colors"><i data-lucide="twitter" class="w-5 h-5"></i></a>
                <a href="#" class="text-gray-500 hover:text-white transition-colors"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                <a href="#" class="text-gray-500 hover:text-white transition-colors"><i data-lucide="github" class="w-5 h-5"></i></a>
            </div>
        </div>
    </footer>

    <script>
        // Initialize Lucide Icons
        lucide.createIcons();
    </script>
</body>
</html>
