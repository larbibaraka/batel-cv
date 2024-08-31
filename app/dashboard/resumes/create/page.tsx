import React from "react";

const CreateResumePage = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between">
          <section className="w-1/2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-primary">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-1/2">section 2</section>
        </div>
      </main>
    </div>
  );
};
export default CreateResumePage;
