// components/Header.tsx
function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg text-gray-700">Medical Dashboard</h1>
          <p className="text-sm text-gray-500">Manage Prescriptions And Patient Records</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            DS
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;