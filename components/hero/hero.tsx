export function HeroSection() {
  return (
    <main className="bg-hero bg-no-repeat h-screen relative bg-cover lg:bg-bottom  before:content-[''] before:inset-0 before:bg-black/55 before:h-full before:absolute">
      <div className='px-4 lg:px-0 max-w-6xl mx-auto text-center z-10 relative h-full grid place-items-center'>
        <div className="space-y-1">
          <h1 className='font-bold font-nunito text-2xl sm:text-3xl lg:text-5xl text-white leading-loose'>
            Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest Industry Insights
          </h1>
          <p className='text-lg font-nunito-sans text-white font-semibold'>
            Insights that inspire success: uncover a wealth of knowledge by staying updated
          </p>
        </div>
      </div>
    </main>
  );
}
