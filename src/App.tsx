import DemoVideo from "./components/DemoVideo";
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react';
import {
  LayoutGrid, ArrowRight, Zap, Phone, Users, Globe, Target, Clock,
  TrendingUp, Rocket, Shield, Star, CheckCircle, Play
} from 'lucide-react';
import { loadVoiceflow, openVoiceflow } from "./lib/voiceflow";

// === ADD THIS HERE ===
const colorClass: Record<string, string> = {
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  green: "text-green-400",
  red: "text-red-400",
  pink: "text-pink-400",
};


function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadVoiceflow();
  }, []);

 // === Book Demo modal state & submit ===
const [openDemo, setOpenDemo] = React.useState(false);
const [loading, setLoading] = React.useState(false);
const [success, setSuccess] = React.useState<null | "ok" | "err">(null);

const [form, setForm] = React.useState({
  name: "",
  email: "",
  service: "AI Customer Support & Chatbots",
  message: "",
});

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzMEvPA7RmaRJIVc2bWhVSpQfmjBNPcCAGMZHdx4E_aqXcN32LpQ4WI6m3myybZDbB1HQ/exec";

async function submitDemo(e: React.FormEvent) {
  e.preventDefault();
  setLoading(true);
  setSuccess(null);

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      // keep it a "simple" request so there’s no CORS preflight
      body: JSON.stringify(form),
      redirect: "follow",
    });

    if (res.ok) {
      setSuccess("ok");
      // optional: reset the form
      // setForm({ name: "", email: "", service: "AI Customer Support & Chatbots", message: "" });
    } else {
      // many Apps Script deployments still write the row even if response isn't readable
      setSuccess("ok");
      // console.warn("Non-2xx:", res.status, await res.text().catch(() => ""));
    }

    await loadVoiceflow({
      user: {
        name: String(form.name ?? ""),
        email: String(form.email ?? ""),
        service: String((form as any).service ?? ""),
      },
    });
    openVoiceflow();
  } catch (err) {
    setSuccess("err");
    console.error("Network error:", err);
  } finally {
    setLoading(false);
  }
}

 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) drops[i] = Math.random() * canvas.height;

    const colors = ['#00D4FF', '#0099CC', '#0066FF', '#3399FF', '#0080FF', '#00BFFF', '#4169E1'];

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'Fira Code', 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        ctx.fillText(char, i * fontSize, drops[i]);
        if (drops[i] > canvas.height && Math.random() > 0.98) drops[i] = 0;
        drops[i] += fontSize;
      }
    };

    const interval = setInterval(draw, 35);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // ---- Services for the grid (with stable ids for routing) ----
  const services: Array<{
    id: 'chat' | 'caller' | 'crm' | 'web' | 'ai-app' | 'ads';
    icon: React.ReactNode;
    title: string;
    description: string;
    color: 'cyan' | 'purple' | 'green' | 'red' | 'pink';
  }> = [
    {
      id: 'chat',
      icon: <Users className="w-8 h-8" />,
      title: "AI Customer Support & Chatbots",
      description: "Instantly respond 24/7 with intelligent automation",
      color: "cyan",
    },
    {
      id: 'caller',
      icon: <Phone className="w-8 h-8" />,
      title: "AI Phone Callers",
      description: "Automated outbound & inbound calls that convert",
      color: "purple",
    },
    {
      id: 'crm',
      icon: <Target className="w-8 h-8" />,
      title: "CRM Integrations & Appointment Setting",
      description: "Never miss a lead again with smart scheduling",
      color: "green",
    },
    {
      id: 'web',
      icon: <Globe className="w-8 h-8" />,
      title: "AI Website Creation",
      description: "Smart, conversion-ready websites in minutes",
      color: "red",
    },
    {
      id: 'ai-app',
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "AI App Creation",
      description: "AI app creation to give your business a more professional look",
      color: "cyan",
    },
    {
      id: 'ads',
      icon: <Zap className="w-8 h-8" />,
      title: "AI Ad Creatives & Marketing",
      description: "Facebook & Instagram ads that convert",
      color: "pink",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-mono relative overflow-hidden">
      {/* Matrix Background */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" style={{ zIndex: 1 }} />

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: '50px 50px',
          zIndex: 2
        }}
      />

      {/* Content Layer */}
      <div className="relative z-20">
        {/* Header */}
        <header className="flex justify-between items-center p-6 md:p-8 backdrop-blur-sm border-b border-cyan-400/10">
          <div className="text-xl md:text-2xl font-bold tracking-[0.2em] relative">
            <span className="relative z-10">ARTIK</span>
            <span className="text-cyan-400 relative z-10">AI</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded blur opacity-30" />
          </div>
          <div className="text-xs md:text-sm tracking-[0.3em] opacity-80 font-light relative group cursor-pointer">
            <span className="relative z-10 transition-colors group-hover:text-cyan-400">[ LOGIN ]</span>
            <div className="absolute inset-0 border border-cyan-400/30 rounded opacity-0 group-hover:opacity-100 transition-opacity" />
        
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
        {/* AUTOMATE — twin glows meeting in the center */}
        <span className="block relative">

          <span className="relative z-10">AUTOMATE</span>

          {/* LEFT half: brightest at its RIGHT edge (center), fading to the LEFT */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-1/2 top-1/2 -translate-y-1/2
                      h-[1em] w-[38%] rounded-none"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.2) 70%, rgba(34,211,238,0.2) 100%)'
            }}
          />
          {/* RIGHT half: brightest at its LEFT edge (center), fading to the RIGHT */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2
                      h-[1em] w-[34%] rounded-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(34,211,238,0.2) 0%, rgba(34,211,238,0.2) 30%, transparent 100%)'
            }}
          />
        </span>

        {/* EVERYTHING. — same twin glows + sweep underline */}
        <span className="block relative">
          <span className="relative z-10">EVERYTHING.</span>

          {/* LEFT half (mirrored) */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-1/2 top-1/2 -translate-y-1/2
                      h-[1em] w-[38%] rounded-none"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.2) 70%, rgba(34,211,238,0.2) 100%)'
            }}
          />
          {/* RIGHT half */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2
                      h-[1em] w-[34%] rounded-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(34,211,238,0.2) 0%, rgba(34,211,238,0.2) 30%, transparent 100%)'
            }}
          />

          {/* animated sweep underline (centered) */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-2 h-[3px]
                      w-[68%] md:w-[56%] overflow-hidden rounded-none"
          >
            <span
              className="block w-[140%] h-full -translate-x-1/3
                        bg-[linear-gradient(90deg,transparent,rgba(34,211,238,.9),transparent)]
                        animate-[sweep_2.4s_ease-in-out_infinite]"
            />
          </span>
        </span>
      </h1>




            <p className="text-xl md:text-2xl text-white font-medium mb-12 max-w-4xl mx-auto leading-relaxed">
              AI-powered customer support, marketing, and sales tools to scale your business without limits
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => navigate('/book')}
                className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-full text-white font-semibold tracking-[0.1em] transition-all duration-500 hover:bg-cyan-400/10 hover:shadow-[0_0_40px_rgba(0,212,255,0.8)] hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center gap-3 relative z-10">
                  <span className="text-lg">BOOK A FREE DEMO</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </button>

              <button className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Play className="w-5 h-5" />
                <span className="text-sm tracking-wide">See How It Works</span>
              </button>
            </div>

            {/* Replace raw <video> with DemoVideo */}
            <DemoVideo />

            </div>
            </section>


        {/* Trust & Social Proof Section */}
        <section className="py-16 px-6 md:px-8 border-t border-cyan-400/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-400 mb-8 tracking-wide">
              TRUSTED BY GROWING BUSINESSES TO AUTOMATE THEIR WORKFLOWS AND MAXIMIZE RESULTS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-xs tracking-wider">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>SHOPIFY</span>
              </div>
              <div className="flex items-center gap-2 text-xs tracking-wider">
                <Users className="w-4 h-4 text-purple-500" />
                <span>HUBSPOT</span>
              </div>
              <div className="flex items-center gap-2 text-xs tracking-wider">
                <Target className="w-4 h-4 text-green-400" />
                <span>FACEBOOK</span>
              </div>
              <div className="flex items-center gap-2 text-xs tracking-wider">
                <Zap className="w-4 h-4 text-red-400" />
                <span>INSTAGRAM</span>
              </div>
              <div className="flex items-center gap-2 text-xs tracking-wider">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span>SALESFORCE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                CORE OFFERINGS
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-lg backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className={`${colorClass[service.color]} mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>

                  <button
                    onClick={() => navigate(`/service/${service.id}`)}
                    className="text-cyan-400 text-xs tracking-wider hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200"
                  >
                    LEARN MORE →
                  </button>


                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 md:px-8 bg-gray-900/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 tracking-tight">
                  WHY CHOOSE
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    ARTIKAI?
                  </span>
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      icon: <Clock className="w-6 h-6 text-cyan-400" />,
                      title: "SAVE TIME",
                      description: "Automate repetitive tasks and focus on growth"
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
                      title: "INCREASE REVENUE",
                      description: "Capture and convert more leads automatically"
                    },
                    {
                      icon: <Rocket className="w-6 h-6 text-purple-500" />,
                      title: "SCALE SMARTER",
                      description: "Growth without adding headcount or overhead"
                    },
                    {
                      icon: <Shield className="w-6 h-6 text-red-400" />,
                      title: "STAY AHEAD",
                      description: "AI tools designed for modern businesses"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-gray-800/50 rounded-lg">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 tracking-wide">{benefit.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-96 relative">
                  {/* Futuristic Dashboard Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-green-400/10 rounded-lg backdrop-blur-sm border border-cyan-400/20">
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs tracking-wider text-gray-400">AI DASHBOARD ACTIVE</span>
                      </div>

                      <div className="space-y-4 flex-1">
                        <div className="bg-gray-800/50 p-4 rounded border border-cyan-400/20">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400">LEADS GENERATED</span>
                            <span className="text-cyan-400 font-bold">+247%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-cyan-400 to-green-400 h-2 rounded-full w-3/4 animate-pulse" />
                          </div>
                        </div>

                        <div className="bg-gray-800/50 p-4 rounded border border-purple-500/20">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400">AUTOMATION EFFICIENCY</span>
                            <span className="text-purple-400 font-bold">99.7%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full w-full animate-pulse" />
                          </div>
                        </div>

                        <div className="bg-gray-800/50 p-4 rounded border border-green-400/20">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400">TIME SAVED</span>
                            <span className="text-green-400 font-bold">40 HRS/WK</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-5/6 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study / Results Section */}
        <section className="py-20 px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                PROVEN RESULTS, REAL GROWTH
              </span>
            </h2>

            <div className="bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-green-400/10 p-8 rounded-lg border border-cyan-400/20 backdrop-blur-sm mb-16">
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
                  "A local service business increased qualified leads by 70% in 30 days using ArtikAi automations."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-400">CEO, TechFlow Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mike Chen",
                  company: "Digital Marketing Pro",
                  text: "ArtikAi transformed our lead generation. We're closing 3x more deals.",
                  rating: 5
                },
                {
                  name: "Lisa Rodriguez",
                  company: "E-commerce Ventures",
                  text: "The AI chatbots handle 90% of customer inquiries. Game changer.",
                  rating: 5
                },
                {
                  name: "David Park",
                  company: "Growth Consulting",
                  text: "ROI was immediate. Saved 25 hours per week on manual tasks.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-cyan-400/5 via-purple-500/5 to-green-400/5 backdrop-blur-sm border-t border-cyan-400/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
              READY TO AUTOMATE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                YOUR BUSINESS?
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              No credit card required. Start scaling in under 7 days.
            </p>

            <button
              onClick={() => navigate('/book')}
              className="group relative px-12 py-6 bg-transparent border-2 border-cyan-400 rounded-full text-white font-semibold tracking-[0.1em] transition-all duration-500 hover:bg-cyan-400/10 hover:shadow-[0_0_60px_rgba(0,212,255,0.8)] hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-3 relative z-10">
                <span className="text-xl">BOOK YOUR FREE DEMO TODAY</span>
                <ArrowRight className="w-7 h-7 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 md:px-8 border-t border-cyan-400/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-xl font-bold tracking-[0.2em] mb-4">
                  <span>ARTIK</span><span className="text-cyan-400">AI</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  AI automation solutions for modern businesses.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm tracking-wider">NAVIGATION</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Services</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm tracking-wider">LEGAL</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm tracking-wider">CONNECT</h4>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400/20 transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-cyan-400 rounded-sm" />
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-purple-500 rounded-sm" />
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-400/20 transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-green-400 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>

                        <div className="pt-8 border-t border-gray-800 text-center">
              <p className="text-xs text-gray-500 tracking-wide font-mono">
                © 2025 ArtikAi. All Rights Reserved. Built in Orlando, Florida.
              </p>
            </div>
          </div>
        </footer>
        <button
          onClick={openVoiceflow}
          className="fixed bottom-5 right-5 rounded-full px-4 py-2 bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-lg z-[60]"
          aria-label="Open chat"
        >
          Chat with us
        </button>

            </div>

    </div>
  );
}

export default App;
