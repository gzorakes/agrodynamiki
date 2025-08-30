function ContactButton() {
  return (
    <div className="bg-main-100 border-1 border-main-900 max-w-7xl mx-auto p-4 lg:p-10 -mt-34 rounded-2xl flex justify-around items-center">
      <p className="lg:text-2xl font-semibold text-main-700">
        Επικοινωνήστε μαζι μας!
      </p>
      <button className="bg-main-900 text-main-100 rounded-xl lg:px-10 py-2 px-6 font-black text-xl">
        →
      </button>
    </div>
  );
}

export default ContactButton;
