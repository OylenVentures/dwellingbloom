import { Star } from "lucide-react";
import Image from "next/image";

function Testimonials() {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-360 mx-auto px-gutter-lg">
        <div className="flex flex-col items-center text-center mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
            Voices of Sanctuary
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary max-w-xl mt-1">
            Two Perspectives, One Standard of Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
          <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-on-tertiary-container mb-space-md">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-on-tertiary-container"
                  />
                ))}
                <span className="font-label-caps text-label-caps text-secondary ml-2 uppercase">
                  Homeowner Monograph
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-primary font-normal italic leading-relaxed mb-space-lg">
                “Traditional brokerages charged 10% each month while leaving me
                in the dark. With DwellingBloom, I connected directly with a
                respectful architect couple within 24 hours. The automatic
                escrow deposit clearing gives me complete financial calm.”
              </p>
            </div>
            <div className="flex items-center gap-space-md pt-space-md">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7U4UIcJM3GwWZ1JPMLCUAlVyJc65jIAe8uPIc-SUkBX7k11JPmQI9s-b0eNbZ1UNZRCFI8590QQoMiE1RcfbGT3iLgGlHDYruPva3RP3TIu6Jg-SDDj3vlrRj9RxG71sfya9QfDJwr-d9hUa6BBpjyjojaeyYle4JuAayvQwSzbAcS9KhvmVuxd6BJfii0tLsN_Z1r4k__ofjsZVwQoqMQu442cb1kpShv6CgIcHE"
                className="w-12 h-12 rounded-full object-cover"
                width={300}
                height={300}
                alt="Julian Hassan"
              />
              <div>
                <div className="font-headline-sm text-body-md text-primary font-bold">
                  Julian Hassan
                </div>
                <div className="font-body-sm text-body-sm text-secondary">
                  Homeowner • 2 Monograph Properties in Magodo
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-on-tertiary-container mb-space-md">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-on-tertiary-container"
                  />
                ))}
                <span className="font-label-caps text-label-caps text-secondary ml-2 uppercase">
                  Renter Monograph
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-primary font-normal italic leading-relaxed mb-space-lg">
                “Searching for a rental used to be dehumanizing. DwellingBloom
                felt like booking an architectural retreat. No junk application
                fees, I spoke with the owner instantly, and signing the digital
                lease took less than three minutes from my phone.”
              </p>
            </div>
            <div className="flex items-center gap-space-md pt-space-md">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsgmvu7VLeYjy99QL9yE4Rw7SVj4LdjLEK4xmj-nEdngLeEgpgMnozD8VIWdjzRRG8zF-xVV2lcqiMdHAjyRicU7PE3ZWpSCHHceG1qzQ9YZBrcI9OThJ99XFwTQDiE3OmKUuFLJSLEJnDPoGRLgjD7Ha66Yh2RX0y6iZLpUMSUPqn48Zi4_MaasOKqBV-dLHn-Psj4m_rFBbfL8-ZTvbN_HGVdPs_QxSCcGWt7RpW"
                className="w-12 h-12 rounded-full object-cover"
                width={300}
                height={300}
                alt="Maya Lin"
              />
              <div>
                <div className="font-headline-sm text-body-md text-primary font-bold">
                  Mary Moe
                </div>
                <div className="font-body-sm text-body-sm text-secondary">
                  Resident • Leventis, Maryland
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

{
  /* <section className="py-16 bg-white border-b border-border">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-extrabold text-primary tracking-tight">
        Why Choose DwellingBloom?
      </h2>
      <p className="text-text-secondary mt-3">
        We provide a secure and streamlined system to support all your
        rental listing requirements.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">
          Verified Members
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          Security is our priority. Every renter and homeowner must verify
          details like BVN to maintain absolute platform integrity.
        </p>
      </div>

      <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
          <Zap className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">
          Direct Messaging
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          Easily connect with the counterpart. Reach out directly to
          homeowners with contact details listed on every single dwelling
          page.
        </p>
      </div>

      <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
          <Heart className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">
          Zero Admin Fee
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          List and apply completely free of hidden administration costs.
          Clear, upfront monthly rental fees agreed by both parties.
        </p>
      </div>
    </div>
  </div>
</section> */
}
