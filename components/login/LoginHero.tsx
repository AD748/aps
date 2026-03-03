export function LoginHero() {
  return (
    <div className="relative h-full w-full text-white px-10 py-16 flex flex-col justify-center">

      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Expert level Cybersecurity <br />
          in <span className="text-accent">hours</span> not weeks.
        </h1>

        <div className="space-y-4 ">
          <h3 className="text-[24px] font-semibold tracking-wider ">
            What’s included
          </h3>

          <ul className="space-y-3 text-gray-200">
            <li className="flex gap-5"> <span className="text-accent">✓</span> Effortlessly spider and map targets to uncover hidden security flaws</li>
            <li className="flex gap-5"> <span className="text-accent">✓</span> Deliver high-quality, validated findings in hours, not weeks.</li>
            <li className="flex gap-5"> <span className="text-accent">✓</span> Generate professional, enterprise-grade security reports automatically.</li>
          </ul>
        </div>
      </div>

      <div className="text-sm text-gray-300 absolute bottom-2 lg:bottom-16">
        <span className="text-accent">★</span> Trustpilot <br />
        <span className="text-white font-medium">
          Rated 4.5/5.0
        </span>{" "}
        (100k+ reviews)
      </div>
    </div>
  );
}