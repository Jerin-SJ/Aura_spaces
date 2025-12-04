import imgAuraSpacesLogoHWhite1 from "figma:asset/d81a78d002c1d513be105d537c89425276468218.png";

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative shrink-0 w-[117px]">
      <div className="font-['Parkinsans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">About Us</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center p-[10px] relative shrink-0 w-[142px]">
      <div className="font-['Parkinsans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[109px]">
        <p className="leading-[normal]">Help Centre</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[10px] relative shrink-0">
      <div className="font-['Parkinsans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Contact us</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[18px] items-center justify-center relative shrink-0 w-[1415px]">
      <Frame1 />
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-2.5 h-[46px] items-center justify-center px-[18px] py-[15px] relative rounded-[23px] shrink-0 w-[95px]">
      <div className="font-['Mundial:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#001e28] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Sign In</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1253px]">
      <div className="bg-center bg-cover bg-no-repeat h-12 shrink-0 w-[109px]" data-name="AuraSpaces-Logo-H-White 1" style={{ backgroundImage: `url('${imgAuraSpacesLogoHWhite1}')` }} />
      <Frame7 />
      <Frame12 />
    </div>
  );
}

export default function Frame1000007668() {
  return (
    <div className="backdrop-blur-[15.225px] backdrop-filter bg-[rgba(28,28,28,0.51)] relative rounded-[38.85px] size-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[31px] py-[17px] relative size-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}