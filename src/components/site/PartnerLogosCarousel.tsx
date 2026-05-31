import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Import your partner logos here
import partner1 from "@/assets/care.png";
import partner2 from "@/assets/bajaj.png";
import partner3 from "@/assets/digit.png";
import partner4 from "@/assets/hdfc.png";
import partner5 from "@/assets/icici.png";
import partner6 from "@/assets/newI.png";
import partner7 from "@/assets/lib.png";
import partner8 from "@/assets/ori.png";
import partner9 from "@/assets/rel.png";
import partner10 from "@/assets/star.png";

const partners = [
  { id: 1, name: "Partner 1", logo: partner1 },
  { id: 2, name: "Partner 2", logo: partner2 },
  { id: 3, name: "Partner 3", logo: partner3 },
  { id: 4, name: "Partner 4", logo: partner4 },
  { id: 5, name: "Partner 5", logo: partner5 },
  { id: 6, name: "Partner 6", logo: partner6 },
  { id: 7, name: "Partner 7", logo: partner7 },
  { id: 8, name: "Partner 8", logo: partner8 },
  { id: 9, name: "Partner 9", logo: partner9 },
  { id: 10, name: "Partner 10", logo: partner10 },
];

export function PartnerLogosCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Autoplay: advance every 3s unless paused (e.g., on hover)
  useEffect(() => {
    if (!api) return;

    const id = window.setInterval(() => {
      if (!paused) api.scrollNext();
    }, 3000);

    return () => clearInterval(id);
  }, [api, paused]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold">Trusted partners</h2>
          <p className="mt-2 text-muted-foreground">
            We work with leading insurance providers to get you the best coverage
          </p>
        </div>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
                  <div className="flex h-32 items-center justify-center rounded-lg border border-border bg-card p-4">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-20 max-w-full object-contain"
                      />
                    ) : (
                      <div className="text-center text-sm text-muted-foreground">
                        <p className="font-semibold">{partner.name}</p>
                        <p className="text-xs">(Logo placeholder)</p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
