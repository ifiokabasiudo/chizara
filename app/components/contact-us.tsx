export default function ContactUs() {
  return (
    <>
      <section className="bg-[#3f4a41] text-white py-32 px-6 md:px-24">
        <div className="w-full mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl mb-6">Contact Us</h2>
            <p className="text-sm leading-7 opacity-80">
              Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit
              Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione
              Voluptatem Sequi Nesciunt. Neque Porro Quisquam Est, Qui Dolorem
              Ipsum Quia Dolor Sit Amet, Consectetur, Adipisci Velit, Sed Quia
              Non Numquam Eius Modi Tempora Incidunt Ut Labore Et Dolore Magnam
              Aliquam Quaerat Voluptatem.
            </p>

            <button className="mt-10 border border-white px-10 py-3 rounded-full hover:cursor-pointer">
              Get In Touch With Our Therapist
            </button>
          </div>

          <form className="space-y-8">
            <div>
              <label className="text-sm">Name (required)</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <input
                  className="rounded-full px-5 py-3 border border-white text-black placeholder:text-white"
                  placeholder="First Name"
                />
                <input
                  className="rounded-full px-5 py-3 border border-white text-black placeholder:text-white"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm">Email (required)</label>
              <input className="w-full mt-2 rounded-full px-5 py-3 border border-white text-black" />
            </div>

            <div>
              <label className="text-sm">
                What questions do you have for us? (required)
              </label>
              <textarea className="w-full mt-2 rounded-3xl px-5 py-4 border border-white text-black h-36"></textarea>
            </div>

            <button className="border border-white px-12 py-3 rounded-full hover:cursor-pointer">
              SEND
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-[#3f4a41] text-white text-center py-6 text-xs">
        Copyright © 2025 Chizara Therapeutic Services. All Rights Reserved.
      </footer>
    </>
  );
}
