import {
  Heart,
  Shield,
  Users,
  QrCode,
  Instagram,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-screen flex items-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/pat_bgk.png)" }}
        ></div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="text-white max-w-4xl px-4 sm:px-6 ml-4 sm:ml-12 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-bold leading-tight">
            A Secure Digital Space for Your Health Information
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 opacity-100">
            Empowering patients in Rwanda with secure, accessible healthcare
            technology
          </p>
          <button className="bg-blue-500 text-white hover:bg-blue-600 px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-lg text-sm sm:text-base">
            Access Patient Dashboard
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-blue-500">
              Healthcare at Your Fingertips
            </h2>
            <p className="text-gray-900 sm:text-lg px-4 sm:px-32">
              Experience modern healthcare management designed specifically for
              Rwandas healthcare ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-8 py-10 text-center bg-white rounded-lg min-h-[280px]" style={{boxShadow: '-8px 0 16px #E8ECED'}}>
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl mb-2 text-blue-500">
                Medical Records
              </h3>
              <p className="text-gray-900 text-sm">
                Access your complete medical history , prescriptions, and health
                information securely
              </p>
            </div>

            <div className="p-8 py-10 text-center bg-white rounded-lg min-h-[280px]" style={{boxShadow: '-8px 0 16px #E8ECED'}}>
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl mb-2 text-blue-500">
                Secure & Private
              </h3>
              <p className="text-gray-900 text-sm">
                Your medical data is protected with Rwandas highest security
                standards
              </p>
            </div>

            <div className="p-8 py-10 text-center bg-white rounded-lg min-h-[280px]" style={{boxShadow: '-8px 0 16px #E8ECED'}}>
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl mb-2 text-blue-500">
                Doctor Collaboration
              </h3>
              <p className="text-gray-900 text-sm">
                Seamless communication with your healthcare provider and medical
                team
              </p>
            </div>

            <div className="p-8 py-10 text-center bg-white rounded-lg min-h-[280px]" style={{boxShadow: '-8px 0 16px #E8ECED'}}>
              <QrCode className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl mb-2 text-blue-500">
                Digital Prescriptions
              </h3>
              <p className="text-gray-900 text-sm">
                Recieve and manage digital prescrition with QR verication
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="space-y-2 text-sm">
                <p>
                  <a
                    href="#"
                    className="hover:underline flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:underline flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    Some of our feature
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:underline flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    Get started
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:underline flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    What we do
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:underline flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    How it work
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-green-300">
                Quick Links:
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a
                    href="#"
                    className="hover:underline flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    Patient Portal
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="hover:underline flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    Pharmacy Tool
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-green-300">Contact Us:</h3>
              <div className="space-y-1 text-sm">
                <p className="whitespace-nowrap">
                  Address: KN 3 Ave, 30 St Kigali - Rwanda
                </p>
                <p>Phone: +250 788 195 705</p>
                <p>Email: medconnectrwanda@med.rw</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-green-300">Follow Us:</h3>
              <div className="flex gap-10">
                <a href="#" className="hover:text-blue-200">
                  𝕏
                </a>
                <a href="#" className="hover:text-blue-200">
                  f
                </a>
                <a href="#" className="hover:text-blue-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white text-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 SheCanCODE. All Rights Reserved</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
            <a href="#" className="hover:text-blue-500">
              FAQ
            </a>
            <a href="#" className="hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-500">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}