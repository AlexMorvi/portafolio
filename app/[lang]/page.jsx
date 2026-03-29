import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const Home = async ({ params }) => {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = getDictionary(lang);

  return (
    <section className="h-full xl:min-h-[calc(100vh-140px)]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-10 xl:pt-2 xl:pb-10">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-sm uppercase tracking-[0.22em] text-white/70">{dict.home.badge}</span>
            <h1 className="h1 mb-6 mt-4">
              {dict.home.headingLead ? (
                <>
                  {dict.home.headingLead} <br />
                </>
              ) : null}
              <span className="text-accent">{dict.home.headingName}</span>
            </h1>
            <p className="mb-6 max-w-[620px] text-white/80">{dict.home.description}</p>
            {dict.home.focusAreas?.length ? (
              <ul className="mb-6 grid max-w-[680px] grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {dict.home.focusAreas.map((area) => (
                  <li key={area} className="rounded-lg border border-accent/30 bg-secondary/40 px-4 py-3 text-sm text-white/85">
                    {area}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="flex flex-col items-center gap-6 xl:flex-row">
              <a href={dict.home.cvHref} download className="inline-flex items-center">
                <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase">
                  <span>{dict.home.downloadCv}</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <Link href={`/${lang}/projects`}>
                <Button size="lg" className="uppercase">
                  {dict.home.featuredProjects}
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-4 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats items={dict.stats} />
    </section>
  );
};

export default Home;
