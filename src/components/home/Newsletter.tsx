const Newsletter = () => (
  <section className="bg-black py-16 text-center">
    <h3 className="text-2xl font-semibold mb-4">
      Stay <span className="text-orange-500">Tuned</span>
    </h3>
    <p className="text-gray-400 mb-6">Subscribe to stay updated on EV news!</p>
    <form className="flex justify-center gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 w-64 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md font-medium text-white"
      >
        Submit
      </button>
    </form>
  </section>
);

export default Newsletter;
