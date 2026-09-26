import { Button } from "../ui/button";
import { siteConfig } from "../../config/site";
import SplitTextReveal from "../reactbits/SplitTextReveal";
import BlurText from "../reactbits/BlurText";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center space-y-8">
        {/* Animated Badge */}
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping" />
          Music & AutoMod Ready!
        </div>

        {/* Main Heading with Animation */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Tingkatkan Pengalaman Musik dengan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 block mt-2">
              <SplitTextReveal 
                text={siteConfig.name}
                delay={40}
              />
            </span>
          </h1>
          
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground leading-relaxed">
            <BlurText 
              text={siteConfig.description}
              delay={30}
            />
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-8 animate-fade-in-up">
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            onClick={() => window.open(siteConfig.botInvite, '_blank')}
          >
            Tambahkan ke Server
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-2 hover:bg-primary/5 transition-all duration-300"
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Lihat Fitur
          </Button>
        </div>

        {/* Server Count/Trust Indicator */}
        <div className="pt-12 flex flex-col items-center space-y-4 text-sm text-muted-foreground animate-fade-in delay-500">
          <p className="font-medium tracking-wide uppercase">Siap Menemani Server Anda</p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/${80 - i*10} to-blue-500/${60 - i*10}`} />
              ))}
            </div>
            <p>Bergabunglah dengan server lainnya!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;