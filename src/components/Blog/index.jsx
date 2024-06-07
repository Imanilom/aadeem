import SubHead from "../Atoms/subhead"
import Paragraph from "../Atoms/paragraph"
import { Button } from "../Atoms/button";

export default function Blog() {
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-20 flex flex-col gap-[50px] sm:px-10">
        {/* Head Content */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <div className="flex flex-col gap-[18px] md:w-8/12 lg:w-auto">
            <SubHead> Koleksi</SubHead>
            {/* <Paragraph>We give actionable tips, strategies, and techniques to grow your business.</Paragraph> */}
          </div>
          <a href="https://tokopedia.link/v1PVDruLeKb">
            <Button buttonStyle="bg-primary-100 text-white">
              <div className="flex gap-2.5 items-center">
                View All
                <img src="anchor-right.svg" alt="anchor" />
              </div>
            </Button>
          </a>
        </div>

        {/* Blog Items */}
        <div className="grid gap-8 font-body md:grid-cols-2 lg:grid-cols-3">
          <section className="flex flex-col gap-6">
            <div className="overflow-hidden">
              <img className="w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/images/FPK202101071.jpg" alt="thumbnail" />
            </div>
            <h3 className="text-[26px] font-medium text-black-100">Singlet Women</h3>
            <a className="underline text-black-100" href="https://tokopedia.link/rhN89KFLeKb">Detail</a>
          </section>
          <section className="flex flex-col gap-6">
            <div className="overflow-hidden">
              <img className="w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/images/FPK202006217.JPG" alt="thumbnail" />
            </div>
            <h3 className="text-[26px] font-medium text-black-100">Home Dress</h3>
            <a className="underline text-black-100 w-fit" href="https://tokopedia.link/rhN89KFLeKb">Detail</a>
          </section>
          <section className="hidden lg:flex flex-col gap-6">
            <div className="overflow-hidden">
              <img className="w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/images/Henley.jpg" alt="thumbnail" />
            </div>
            <h3 className="text-[26px] font-medium text-black-100">Henley</h3>
            <a className="underline text-black-100" href="https://tokopedia.link/k1FFMoWLeKb">Detail</a>
          </section>
        </div>
      </div>
    </div>
  );
}
