import logo from "../assets/logos/logo.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 px-15 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Welcome Section */}
        <div className="mb-20">
          <h4 className="text-sky-600 text-lg font-semibold mb-2">
            WELCOME TO
          </h4>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Kenwick Remedies Private Limited
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-4xl">
            Kenwick Remedies Private Limited is a professionally managed
            pharmaceutical company engaged in the manufacture of quality
            chemical and healthcare products. Guided by regulatory standards
            and ethical governance, the company operates with a commitment to
            scientific integrity, operational excellence, and sustainable
            growth. We strive to contribute responsibly to the advancement of
            healthcare and chemical manufacturing.
          </p>
        </div>

        {/* Three Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          {/* Who We Are */}
          <div>
            <div className="text-5xl mb-6 text-gray-500">📍</div>
            <h3 className="text-2xl font-semibold mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are a chemical manufacturing enterprise operating under
              NIC Code 2411, specializing in the manufacture of basic
              chemicals. Led by experienced directors, the company focuses
              on structured growth, regulatory compliance, and dependable
              industrial solutions.
            </p>
          </div>

          {/* Why Us */}
          <div>
            <div className="text-5xl mb-6 text-gray-500">⚛️</div>
            <h3 className="text-2xl font-semibold mb-4">
              Why Us?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We combine technical expertise with responsible corporate
              governance to ensure consistent quality and operational
              transparency. Our disciplined processes and regulatory
              alignment enable us to deliver reliable chemical products
              with long-term sustainability.
            </p>
          </div>

          {/* Business Ethics */}
          <div>
            <div className="text-5xl mb-6 text-gray-500">👍</div>
            <h3 className="text-2xl font-semibold mb-4">
              Business Ethics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, compliance, and accountability form the foundation
              of our operations. We maintain transparent financial practices,
              regulatory adherence, and ethical leadership to build lasting
              partnerships and uphold trust in every aspect of our business.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}