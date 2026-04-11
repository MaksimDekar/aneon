import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { galleryItems } from '@/data/gallery';
import { sectionText } from '@/data/siteContent';

export function GallerySection() {
  return (
    <section className="section-shell" id="gallery">
      <Container>
        <SectionHeading align="center" description={sectionText.gallery.description} overline={sectionText.gallery.overline} title={sectionText.gallery.title} />
        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article className={`group premium-card overflow-hidden ${index % 5 === 0 ? 'lg:col-span-2' : ''}`} key={item.id}>
              <div className={`relative overflow-hidden ${index % 5 === 0 ? 'h-64 sm:h-80' : 'h-56 sm:h-60'}`}>
                <img
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  decoding="async"
                  loading="lazy"
                  src={item.image}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-3 sm:p-5">
                  <h3 className="font-display text-base text-white sm:text-xl">{item.title}</h3>
                  <p className="text-xs text-white/70 sm:text-sm">{item.subtitle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
