import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { galleryItems } from '@/data/gallery';
import { sectionText } from '@/data/siteContent';

export function GallerySection() {
  return (
    <section className="py-16 sm:py-20" id="gallery">
      <Container>
        <SectionHeading
          align="center"
          description={sectionText.gallery.description}
          overline={sectionText.gallery.overline}
          title={sectionText.gallery.title}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-base-900" key={item.id}>
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-110"
                  src={item.image}
                />
              </div>
              <div className="space-y-1 p-4">
                <h3 className="font-display text-lg text-white">{item.title}</h3>
                <p className="text-sm text-white/65">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
