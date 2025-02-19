export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#e0f0ea]">
      <div className="w-full max-w-md p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Tue Feb 18 2025</span>
            <span className="text-sm text-gray-500">9:31:25 p.m.</span>
          </div>
          <h2 className="text-xl -700 mb-4">List Tailwind</h2>
          
          <div className="grid grid-cols-7 text-center text-sm mt-2">
            <span className="-400 font-bold">s</span>
            <span className="-400 font-bold">m</span>
            <span className="-400 font-bold">t</span>
            <span className="-400 font-bold">w</span>
            <span className="-400 font-bold">t</span>
            <span className="-400 font-bold">f</span>
            <span className="-400 font-bold">s</span>
            
            <span className="text-gray-600">24</span>
            <span className="text-gray-600">25</span>
            <span className="text-gray-600">26</span>
            <span className="text-gray-600">27</span>
            <span className="text-gray-600">28</span>
            <span className="text-gray-600">29</span>
            <span className="text-gray-600">30</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-[1fr,auto] gap-2">
            <div className="flex items-center bg-[#e8f4f1] rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">✓</div>
                <span className="text-gray-700 line-through">take-out-the-trash</span>
              </div>
            </div>
            <div className="bg-[#e8f4f1] rounded-lg p-3 w-24 flex items-center justify-center">
              <span className="text-sm text-gray-500">9:00 AM</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,auto] gap-2">
            <div className="flex items-center bg-[#e8f4f1] rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">✓</div>
                <span className="text-gray-700 line-through">do-homework</span>
              </div>
            </div>
            <div className="bg-[#e8f4f1] rounded-lg p-3 w-24 flex items-center justify-center">
              <span className="text-sm text-gray-500">12:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,auto] gap-2">
            <div className="flex items-center bg-[#e8f4f1] rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>
                <span className="text-gray-700">go to grocery store</span>
              </div>
            </div>
            <div className="bg-[#e8f4f1] rounded-lg p-3 w-24 flex items-center justify-center">
              <span className="text-sm text-gray-500">1:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,auto] gap-2">
            <div className="flex items-center bg-[#e8f4f1] rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>
                <span className="text-gray-700">run 5 kilometers</span>
              </div>
            </div>
            <div className="bg-[#e8f4f1] rounded-lg p-3 w-24 flex items-center justify-center">
              <span className="text-sm text-gray-500">4:20 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,auto] gap-2">
            <div className="flex items-center bg-[#e8f4f1] rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>
                <span className="text-gray-700">load the dishwasher</span>
              </div>
            </div>
            <div className="bg-[#e8f4f1] rounded-lg p-3 w-24 flex items-center justify-center">
              <span className="text-sm text-gray-500">9:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr,auto] gap-2">
            <div className="flex items-center bg-[#e8f4f1] rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>
                <span className="text-gray-700">Take out the trash</span>
              </div>
            </div>
            <div className="bg-[#e8f4f1] rounded-lg p-3 w-24 flex items-center justify-center">
              <span className="text-sm text-gray-500">9:00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
