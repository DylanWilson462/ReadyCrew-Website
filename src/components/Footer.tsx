export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span
          className="text-base text-[#111827]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
        >
          ReadyCrew Staffing<span className="text-[#C2410C]">.</span>
        </span>
        <span className="text-sm text-[#6B7280]">
          &copy; 2025 ReadyCrew Staffing. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
