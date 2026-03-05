import svgPaths from "./svg-gh5rlx9dxu";
import clsx from "clsx";
import imgImageAuraSpacesTeam from "figma:asset/e0926b9601f278920ad23316644c6254296a9968.png";
import imgContainer from "figma:asset/d81a78d002c1d513be105d537c89425276468218.png";
import imgImageModernUkKitchenWithSmartReadyDesignAuraSpaces from "figma:asset/7b6c416f052365831408e9a1f4153e98829c14ea.png";
type HeadingProps = {
  additionalClassNames?: string;
};

function Heading({ children, additionalClassNames = "" }: React.PropsWithChildren<HeadingProps>) {
  return (
    <div className={clsx("absolute h-[24.5px] left-0 top-[63px]", additionalClassNames)}>
      <p className="absolute font-['Figtree:Medium',sans-serif] leading-[24.5px] left-0 not-italic text-[#eee7d2] text-[17.5px] text-nowrap top-[0.5px]">{children}</p>
    </div>
  );
}
type Container30Props = {
  additionalClassNames?: string;
};

function Container30({ children, additionalClassNames = "" }: React.PropsWithChildren<Container30Props>) {
  return (
    <div className={clsx("h-[52.5px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">{children}</div>
    </div>
  );
}

function Container29({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#87a39f] relative rounded-[1.67772e+07px] shrink-0 size-[42px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[716.711px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function Link4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[716.711px] relative shrink-0 w-[597.594px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function Container19({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(238,231,210,0.05)] h-[442.805px] relative rounded-[21px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(238,231,210,0.1)] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[296.664px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Icon8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Icon7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[17.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Container18({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(238,231,210,0.05)] h-[716.711px] relative rounded-[21px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(238,231,210,0.1)] border-solid inset-0 pointer-events-none rounded-[21px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[14px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Parkinsans:Regular',sans-serif] font-normal leading-[21px] left-[14px] text-[#eee7d2] text-[14px] text-nowrap top-[7.5px]">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full", additionalClassNames)}>
      <p className="font-['Figtree:Regular',sans-serif] leading-[17.5px] not-italic relative shrink-0 text-[#eee7d2] text-[12.25px] text-center text-nowrap">{text}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Figtree:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#eee7d2] text-[14px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type OptionTextProps = {
  text: string;
};

function OptionText({ text }: OptionTextProps) {
  return (
    <div className="absolute bg-[#696a5a] left-[-728px] size-0 top-[-9904.72px]">
      <p className="absolute font-['Figtree:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#eee7d2] text-[14px] top-0 w-0">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="content-stretch flex items-center overflow-clip px-0 py-[14px] relative rounded-[inherit] size-full">
        <p className="font-['Figtree:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#eee7d2] text-[14px] text-nowrap">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#a88864] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[21px] relative shrink-0 w-full">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[21px] left-0 not-italic text-[#eee7d2] text-[14px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type HeadingText3Props = {
  text: string;
};

function HeadingText3({ text }: HeadingText3Props) {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[24.5px] left-0 not-italic text-[#eee7d2] text-[15.75px] text-nowrap top-[-0.5px]">{text}</p>
    </div>
  );
}
type HeadingText2Props = {
  text: string;
};

function HeadingText2({ text }: HeadingText2Props) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[28px] left-0 not-italic text-[#eee7d2] text-[21px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="absolute h-[42px] left-[21px] top-0 w-[1286px]">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[42px] left-0 not-italic text-[#eee7d2] text-[42px] text-nowrap top-[-0.5px] tracking-[-1.05px]">{text}</p>
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ additionalClassNames = "" }: Container1Props) {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[296.664px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <TextText text="View design approach" />
        <Icon additionalClassNames="relative shrink-0" />
      </div>
    </div>
  );
}
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ additionalClassNames = "" }: IconProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.16667" />
      <path d={svgPaths.pf23dd00} id="Vector_2" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.16667" />
    </Wrapper>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[120.234px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Figtree:Light',sans-serif] leading-[17.5px] left-0 not-italic text-[12.25px] text-[rgba(238,231,210,0.8)] text-nowrap top-[0.5px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[296.664px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Figtree:Light',sans-serif] grow leading-[31.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#eee7d2] text-[26.25px] tracking-[-0.6563px]">{text}</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[1120px]" data-name="Heading 2">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[42px] left-[560.63px] not-italic text-[#eee7d2] text-[42px] text-center text-nowrap top-[-0.5px] tracking-[-1.05px] translate-x-[-50%]">Interiors Designed for Modern UK Living</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[51.188px] left-[168px] top-[63px] w-[784px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[25.594px] left-[392.11px] not-italic text-[15.75px] text-[rgba(238,231,210,0.8)] text-center top-0 translate-x-[-50%] w-[772px]">Aura Spaces designs and delivers kitchens, bedrooms, and living rooms that combine thoughtful design, quality materials, and everyday functionality — tailored for UK homes.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[114.188px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <Wrapper1>
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[19.906px] left-0 not-italic text-[12.25px] text-[rgba(238,231,210,0.7)] top-[0.5px] w-[292px]">Storage-smart, appliance-ready kitchens designed for daily UK living.</p>
    </Wrapper1>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[176.313px] items-start left-px pl-[28px] pr-0 py-[28px] top-[265.49px] w-[352.664px]" data-name="Container">
      <HeadingText text="Kitchens" />
      <Paragraph1 />
      <Container1 />
    </div>
  );
}

function ImageWithFallback() {
  return <div className="absolute h-[264.492px] left-0 top-0 w-[352.664px]" data-name="ImageWithFallback" />;
}

function Container3() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.5)] h-[264.492px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[352.664px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute h-[264.492px] left-px overflow-clip top-px w-[352.664px]" data-name="Container">
      <ImageWithFallback />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <Container19>
      <Container2 />
      <Container4 />
    </Container19>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex flex-col h-[442.805px] items-start left-0 top-0 w-[354.664px]" data-name="Link">
      <Container5 />
    </div>
  );
}

function Paragraph2() {
  return (
    <Wrapper1>
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[19.906px] left-0 not-italic text-[12.25px] text-[rgba(238,231,210,0.7)] top-[0.5px] w-[296px]">Calm, organised bedrooms with intelligent storage and long-term comfort.</p>
    </Wrapper1>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[176.313px] items-start left-px pl-[28px] pr-0 py-[28px] top-[265.49px] w-[352.664px]" data-name="Container">
      <HeadingText text="Bedrooms" />
      <Paragraph2 />
      <Container1 />
    </div>
  );
}

function ImageWithFallback1() {
  return <div className="absolute h-[264.492px] left-0 top-0 w-[352.664px]" data-name="ImageWithFallback" />;
}

function Container7() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.5)] h-[264.492px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[352.664px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute h-[264.492px] left-px overflow-clip top-px w-[352.664px]" data-name="Container">
      <ImageWithFallback1 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <Container19>
      <Container6 />
      <Container8 />
    </Container19>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[442.805px] items-start left-[382.66px] top-0 w-[354.664px]" data-name="Link">
      <Container9 />
    </div>
  );
}

function Paragraph3() {
  return (
    <Wrapper1>
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[19.906px] left-0 not-italic text-[12.25px] text-[rgba(238,231,210,0.7)] top-[0.5px] w-[252px]">Flexible living spaces designed for technology, comfort, and clarity.</p>
    </Wrapper1>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[176.313px] items-start left-px pl-[28px] pr-0 py-[28px] top-[265.49px] w-[352.664px]" data-name="Container">
      <HeadingText text="Living Rooms" />
      <Paragraph3 />
      <Container1 />
    </div>
  );
}

function ImageErrorLoadingImage() {
  return <div className="absolute left-[132.33px] size-[88px] top-[88.24px]" data-name="Image (Error loading image)" />;
}

function ImageWithFallback2() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[264.492px] left-0 top-0 w-[352.664px]" data-name="ImageWithFallback">
      <ImageErrorLoadingImage />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.5)] h-[264.492px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[352.664px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute h-[264.492px] left-px overflow-clip top-px w-[352.664px]" data-name="Container">
      <ImageWithFallback2 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <Container19>
      <Container10 />
      <Container12 />
    </Container19>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[442.805px] items-start left-[765.33px] top-0 w-[354.664px]" data-name="Link">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[442.805px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#696a5a] content-stretch flex flex-col gap-[70px] h-[850.992px] items-start left-0 pb-0 pt-[112px] px-[104px] top-[1720.13px] w-[1328px]" data-name="Section">
      <Container />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[42px] left-0 not-italic text-[#eee7d2] text-[42px] text-nowrap top-[-0.5px] tracking-[-1.05px]">Popular Kitchen Styles</p>
    </div>
  );
}

function ImageWithFallback3() {
  return <div className="absolute h-[714.711px] left-0 top-0 w-[595.594px]" data-name="ImageWithFallback" />;
}

function Container15() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.4)] h-[714.711px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[595.594px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="h-[714.711px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback3 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <Container18>
      <Container16 />
    </Container18>
  );
}

function Link3() {
  return (
    <Link4>
      <Container17 />
    </Link4>
  );
}

function ImageWithFallback4() {
  return <div className="absolute h-[714.711px] left-0 top-0 w-[595.594px]" data-name="ImageWithFallback" />;
}

function Container20() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.4)] h-[714.711px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[595.594px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="h-[714.711px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback4 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <Container18>
      <Container21 />
    </Container18>
  );
}

function Link5() {
  return (
    <Wrapper2>
      <Container22 />
    </Wrapper2>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[28px] h-[716.711px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Link3 key={i} />
      ))}
      <Link5 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[730.711px] items-start overflow-clip pl-0 pr-[-562.781px] py-0 relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[828.711px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start px-[21px] py-0 relative size-full">
          <Heading2 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#696a5a] content-stretch flex flex-col h-[996.711px] items-start left-0 overflow-clip pb-0 pt-[84px] px-0 top-[2571.12px] w-[1328px]" data-name="Section">
      <Container25 />
    </div>
  );
}

function ImageWithFallback5() {
  return <div className="absolute h-[714.711px] left-0 top-0 w-[595.594px]" data-name="ImageWithFallback" />;
}

function Container26() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.4)] h-[714.711px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[595.594px]" data-name="Container" />;
}

function Container27() {
  return (
    <div className="h-[714.711px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback5 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <Container18>
      <Container27 />
    </Container18>
  );
}

function Link6() {
  return (
    <Link4>
      <Container28 />
    </Link4>
  );
}

function ImageWithFallback6() {
  return <div className="absolute h-[714.711px] left-0 top-0 w-[595.594px]" data-name="ImageWithFallback" />;
}

function Container31() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.4)] h-[714.711px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[595.594px]" data-name="Container" />;
}

function Container32() {
  return (
    <div className="h-[714.711px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback6 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <Container18>
      <Container32 />
    </Container18>
  );
}

function Link7() {
  return (
    <Wrapper2>
      <Container33 />
    </Wrapper2>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[28px] h-[716.711px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Link6 key={i} />
      ))}
      <Link7 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[730.711px] items-start left-[21px] overflow-clip pl-0 pr-[-562.781px] py-0 top-[98px] w-[1286px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[146.43px]" data-name="Text">
      <p className="absolute font-['Figtree:Regular',sans-serif] leading-[21px] left-[73.5px] not-italic text-[14px] text-[rgba(238,231,210,0.8)] text-center text-nowrap top-0 translate-x-[-50%]">View all bedroom styles</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[21px] left-[580.28px] top-[870.71px] w-[167.43px]" data-name="Link">
      <Text />
      <Icon additionalClassNames="absolute left-[153.43px] top-[3.5px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[891.711px] relative shrink-0 w-full" data-name="Container">
      <HeadingText1 text="Popular Bedroom Styles" />
      <Container35 />
      <Link8 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#696a5a] content-stretch flex flex-col h-[1059.711px] items-start left-0 overflow-clip pb-0 pt-[84px] px-0 top-[3672px] w-[1328px]" data-name="Section">
      <Container36 />
    </div>
  );
}

function ImageWithFallback7() {
  return <div className="absolute h-[714.711px] left-0 top-0 w-[595.594px]" data-name="ImageWithFallback" />;
}

function Container37() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.4)] h-[714.711px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[595.594px]" data-name="Container" />;
}

function Container38() {
  return (
    <div className="h-[714.711px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback7 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <Container18>
      <Container38 />
    </Container18>
  );
}

function Link9() {
  return (
    <Link4>
      <Container39 />
    </Link4>
  );
}

function ImageWithFallback8() {
  return <div className="absolute h-[714.711px] left-0 top-0 w-[595.594px]" data-name="ImageWithFallback" />;
}

function Container40() {
  return <div className="absolute bg-gradient-to-t from-[rgba(105,106,90,0.4)] h-[714.711px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[595.594px]" data-name="Container" />;
}

function Container41() {
  return (
    <div className="h-[714.711px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback8 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <Container18>
      <Container41 />
    </Container18>
  );
}

function Link10() {
  return (
    <Wrapper2>
      <Container42 />
    </Wrapper2>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[28px] h-[716.711px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(2).keys()].map((_, i) => (
        <Link9 key={i} />
      ))}
      <Link10 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[730.711px] items-start left-[21px] overflow-clip pl-0 pr-[-562.781px] py-0 top-[98px] w-[1286px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[158.117px]" data-name="Text">
      <p className="absolute font-['Figtree:Regular',sans-serif] leading-[21px] left-[79.5px] not-italic text-[14px] text-[rgba(238,231,210,0.8)] text-center text-nowrap top-0 translate-x-[-50%]">View all living room styles</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[21px] left-[574.44px] top-[870.71px] w-[179.117px]" data-name="Link">
      <Text1 />
      <Icon additionalClassNames="absolute left-[165.12px] top-[3.5px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[891.711px] left-[21px] top-[4686px] w-[1328px]" data-name="Container">
      <HeadingText1 text="Popular Living Room Styles" />
      <Container44 />
      <Link11 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[52.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[52.5px] left-[504.03px] not-italic text-[#eee7d2] text-[52.5px] text-center text-nowrap top-[-0.5px] translate-x-[-50%]">About Us</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[102.375px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[34.125px] left-0 not-italic text-[#eee7d2] text-[21px] top-0 w-[475px]">Aura Spaces is a UK-based interior company that designs smart-ready kitchens, bedrooms, and living rooms for modern homes.</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[85.313px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[28.438px] left-0 not-italic text-[#eee7d2] text-[17.5px] top-[0.5px] w-[455px]">We combine thoughtful design, clear pricing, and whole-home planning — delivered virtually or on-site, without the showroom overhead.</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] h-[208.688px] items-start left-0 top-0 w-[476px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[113.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[28.438px] left-0 not-italic text-[#eee7d2] text-[17.5px] top-[0.5px] w-[463px]">{`Founded to make quality interiors accessible, we're positioned between design-led British kitchens and scalable delivery — offering designed systems that work for real UK homes.`}</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[135.75px] items-start left-0 pb-0 pt-[22px] px-0 top-[292.69px] w-[476px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(238,231,210,0.2)] border-solid inset-0 pointer-events-none" />
      <Paragraph6 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[428.438px] left-0 top-0 w-[476px]" data-name="Container">
      <Container46 />
      <p className="absolute font-['Figtree:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#eee7d2] text-[14px] top-[250.69px] w-[455px]">By integrating smart energy monitoring with efficient interior design, Aura Spaces actively supports the UK’s carbon reduction goals..</p>
      <Container47 />
    </div>
  );
}

function ImageAuraSpacesTeam() {
  return (
    <div className="h-[357px] relative shrink-0 w-full" data-name="Image (Aura Spaces Team)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAuraSpacesTeam} />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[357px] items-start left-[532px] overflow-clip rounded-[21px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[35.72px] w-[476px]" data-name="Container">
      <ImageAuraSpacesTeam />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[428.438px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[rgba(105,106,90,0.34)] content-stretch flex flex-col gap-[70px] h-[550.938px] items-start left-[135px] top-[5733px] w-[1008px]" data-name="Section">
      <Heading3 />
      <Container50 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[52.5px] left-0 top-0 w-[1008px]" data-name="Heading 2">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[52.5px] left-[504.43px] not-italic text-[#eee7d2] text-[52.5px] text-center text-nowrap top-[-0.5px] translate-x-[-50%]">Aura Decor</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[42px] left-[210px] top-[80.5px] w-[588px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[21px] left-[294.14px] not-italic text-[#eee7d2] text-[15px] text-center top-[-0.5px] translate-x-[-50%] w-[571px]">Curated decorative pieces and furnishings that complete your interior vision with style and sophistication</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[122.5px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph7 />
    </div>
  );
}

function ImageWithFallback9() {
  return <div className="h-[231px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col h-[231px] items-start overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <ImageWithFallback9 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[73.125px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[24.375px] left-0 not-italic text-[#eee7d2] text-[15px] top-0 w-[298px]">Thoughtfully selected accessories that add personality and warmth to your living spaces, from statement pieces to subtle accents.</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[28px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container52 />
      <HeadingText2 text="Decorative Accessories" />
      <Paragraph8 />
    </div>
  );
}

function ImageWithFallback10() {
  return <div className="h-[231px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-[231px] items-start overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <ImageWithFallback10 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[73.125px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[24.375px] left-0 not-italic text-[#eee7d2] text-[15px] top-0 w-[301px]">Premium furniture pieces that blend timeless design with contemporary comfort, creating spaces that are both beautiful and functional.</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[28px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container54 />
      <HeadingText2 text="Designer Furnishings" />
      <Paragraph9 />
    </div>
  );
}

function ImageWithFallback11() {
  return <div className="h-[231px] shrink-0 w-full" data-name="ImageWithFallback" />;
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col h-[231px] items-start overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <ImageWithFallback11 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[73.125px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[24.375px] left-0 not-italic text-[#eee7d2] text-[15px] top-0 w-[294px]">Custom styling solutions tailored to your taste, bringing together colors, textures, and forms that reflect your unique aesthetic.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[28px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container56 />
      <HeadingText2 text="Bespoke Styling" />
      <Paragraph10 />
    </div>
  );
}

function Container58() {
  return (
    <div className="gap-[42px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[374.125px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container55 />
      <Container57 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[35px] left-[43px] top-[43px] w-[922px]" data-name="Heading 3">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[35px] left-[461.02px] not-italic text-[#eee7d2] text-[31.5px] text-center text-nowrap top-[-0.5px] translate-x-[-50%]">Transform Your Space with Aura Decor</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[51.188px] left-[210px] top-[99px] w-[588px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[25.594px] left-[294.19px] not-italic text-[#eee7d2] text-[15.75px] text-center top-0 translate-x-[-50%] w-[544px]">Discover our carefully curated collection of decor and furnishings, designed to complement your interior perfectly</p>
    </div>
  );
}

function Icon1() {
  return (
    <Wrapper additionalClassNames="absolute left-[107.92px] top-[1.75px]">
      <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
      <path d={svgPaths.pf23dd00} id="Vector_2" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
    </Wrapper>
  );
}

function App() {
  return (
    <div className="absolute h-[17.5px] left-[28px] top-[8.75px] w-[121.922px]" data-name="App">
      <p className="absolute font-['Figtree:Medium',sans-serif] leading-[17.5px] left-[50.5px] not-italic text-[#eee7d2] text-[12.25px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Explore Collection</p>
      <Icon1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#d97a43] h-[35px] left-[415.04px] overflow-clip rounded-[1.67772e+07px] top-[178.19px] w-[177.922px]" data-name="Button">
      <App />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[rgba(135,163,159,0.2)] h-[256.188px] relative rounded-[21px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(238,231,210,0.2)] border-solid inset-0 pointer-events-none rounded-[21px]" />
      <Heading5 />
      <Paragraph11 />
      <Button />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[70px] h-[878.813px] items-start left-[160px] top-[8357.91px] w-[1008px]" data-name="Section">
      <Container51 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[52.5px] left-0 top-0 w-[1008px]" data-name="Heading 2">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[52.5px] left-[504.32px] not-italic text-[#eee7d2] text-[52.5px] text-center text-nowrap top-[-0.5px] translate-x-[-50%]">Get In Touch</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[24.5px] left-[210px] top-[80.5px] w-[588px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[24.5px] left-[294.23px] not-italic text-[#eee7d2] text-[17.5px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Book a free design call or upload your floor plan to get started.</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[105px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph12 />
    </div>
  );
}

function Icon2() {
  return (
    <Icon7>
      <path d={svgPaths.p385b1800} id="Vector" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
    </Icon7>
  );
}

function Container61() {
  return (
    <Container29>
      <Icon2 />
    </Container29>
  );
}

function Container62() {
  return (
    <Container30 additionalClassNames="w-[128.492px]">
      <HeadingText3 text="Phone" />
      <ParagraphText text="+44 (0) 7721855790" />
    </Container30>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[21px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Icon3() {
  return (
    <Icon7>
      <path d={svgPaths.p8063980} id="Vector" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
      <path d={svgPaths.p3c89df0} id="Vector_2" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
    </Icon7>
  );
}

function Container64() {
  return (
    <Container29>
      <Icon3 />
    </Container29>
  );
}

function Container65() {
  return (
    <Container30 additionalClassNames="w-[148.195px]">
      <HeadingText3 text="Email" />
      <ParagraphText text="hello@auraspaces.co.uk" />
    </Container30>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[21px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[42px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container63 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="gap-[21px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[50px] relative shrink-0 w-full" data-name="Container">
      <Text2 text="First Name" additionalClassNames="[grid-area:1_/_1] place-self-stretch" />
      <Text2 text="Last Name" additionalClassNames="[grid-area:1_/_2] place-self-stretch" />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#a88864] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <OptionText text="What can we help with?" />
      <OptionText text="Kitchen design" />
      <OptionText text="Bedroom design" />
      <OptionText text="Living room design" />
      <OptionText text="Whole-home project" />
      <OptionText text="Just exploring options" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[113px] relative shrink-0 w-full" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip px-0 py-[14px] relative rounded-[inherit] size-full">
        <p className="font-['Figtree:Light',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#eee7d2] text-[14px] text-nowrap">Tell us about your project</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#a88864] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#d97a43] h-[31.5px] relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Figtree:Medium',sans-serif] leading-[17.5px] left-[205.95px] not-italic text-[#eee7d2] text-[12.25px] text-center text-nowrap top-[7.5px] translate-x-[-50%]">Send Message</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[481px] items-start relative shrink-0 w-full" data-name="Form">
      <Container68 />
      <Text2 text="Email" additionalClassNames="h-[50px] w-full" />
      <Text2 text="Phone Number" additionalClassNames="h-[50px] w-full" />
      <Dropdown />
      <TextArea />
      <Button1 />
    </div>
  );
}

function Container69() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(168,136,100,0.3)] place-self-stretch relative rounded-[21px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(238,231,210,0.2)] border-solid inset-0 pointer-events-none rounded-[21px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-start pb-px pt-[29px] px-[29px] relative size-full">
          <HeadingText2 text="Request Consultation" />
          <Form />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="gap-[70px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[595px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container69 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[70px] h-[770px] items-start left-[160px] top-[9431.72px] w-[1008px]" data-name="Section">
      <Container60 />
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[109px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[42px] relative shrink-0 w-[109px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <Text3 text="Products" />
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[38.438px]" data-name="Link">
      <Text3 text="About" />
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50.797px]" data-name="Link">
      <Text3 text="Contact" />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[21px] relative shrink-0 w-[228.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[42px] items-center relative size-full">
        <Link13 />
        <Link14 />
        <Link15 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link12 />
      <Container72 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[21px] left-[504.45px] not-italic text-[#eee7d2] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">© 2025 Aura Spaces. All rights reserved.</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[35px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[17.5px] left-[504.41px] not-italic text-[#eee7d2] text-[12.25px] text-center top-[0.5px] translate-x-[-50%] w-[951px]">Aura Spaces is the interior division of TSP London Limited, focused on delivering smart and sustainable interior solutions. TSP London Limited is registered in England and Wales (Company No. 14883402)</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[99px] items-start pb-0 pt-[29px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(168,136,100,0.3)] border-solid inset-0 pointer-events-none" />
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] h-[183px] items-start relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[296px] items-start left-0 pb-0 pt-[57px] px-[160px] top-[10313.72px] w-[1328px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(168,136,100,0.3)] border-solid inset-0 pointer-events-none" />
      <Container75 />
    </div>
  );
}

function ImageModernUkKitchenWithSmartReadyDesignAuraSpaces() {
  return (
    <div className="absolute h-[1023px] left-[-156px] top-[-168.84px] w-[1510px]" data-name="Image (Modern UK kitchen with smart-ready design - Aura Spaces)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageModernUkKitchenWithSmartReadyDesignAuraSpaces} />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#d97a43] h-[35px] relative rounded-[1.67772e+07px] shrink-0 w-[163.391px]" data-name="Button">
      <Text4 text="Book a free design call" additionalClassNames="px-[21px] py-[10.5px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[35px] relative rounded-[1.67772e+07px] shrink-0 w-[152.367px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#eee7d2] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Text4 text="Explore our services" additionalClassNames="px-[22px] py-[11.5px]" />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[35px] items-center justify-center left-[21px] pl-0 pr-[0.008px] py-0 top-[747.16px] w-[1238px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[876.313px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ImageModernUkKitchenWithSmartReadyDesignAuraSpaces />
        <Container76 />
        <p className="absolute font-['Figtree:Regular',sans-serif] leading-[42.656px] left-[639.5px] not-italic text-[#eee7d2] text-[26.25px] text-center top-[640.16px] translate-x-[-50%] w-[631px]">Designed for real UK homes. Intelligently planned from first call to final fit.</p>
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute bg-[#696a5a] content-stretch flex flex-col h-[986px] items-center justify-center left-0 overflow-clip pb-0 pt-[84px] px-0 top-0 w-[1328px]" data-name="Section">
      <Container77 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[52.5px] left-0 top-0 w-[1286px]" data-name="Heading 2">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[52.5px] left-[643.39px] not-italic text-[#eee7d2] text-[52.5px] text-center text-nowrap top-[-0.5px] translate-x-[-50%]">One home. Thoughtfully designed.</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[56.875px] left-[307px] top-[73.5px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[28.438px] left-[336.45px] not-italic text-[17.5px] text-[rgba(238,231,210,0.8)] text-center top-[0.5px] translate-x-[-50%] w-[647px]">Designed systems, whole-home thinking, and quiet intelligence — creating interiors that are as considered as they are enduring.</p>
    </div>
  );
}

function Icon4() {
  return (
    <Icon8>
      <path d="M12.25 3.0625V15.3125" id="Vector" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
      <path d={svgPaths.p1d9cd8c0} id="Vector_2" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
      <path d={svgPaths.p10ce4a80} id="Vector_3" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
    </Icon8>
  );
}

function Container78() {
  return (
    <div className="absolute bg-[rgba(217,122,67,0.2)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[49px] top-0" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading8() {
  return <Heading additionalClassNames="w-[261.328px]">Step 1 – Share your space</Heading>;
}

function Paragraph16() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[101.5px] w-[261.328px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(238,231,210,0.7)] top-[-0.5px] w-[246px]">Upload a floor plan or book a short call. We design around how you actually live.</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[169.75px] left-0 top-0 w-[261.328px]" data-name="Container">
      <Container78 />
      <Heading8 />
      <Paragraph16 />
    </div>
  );
}

function Icon5() {
  return (
    <Icon8>
      <path d={svgPaths.p10597400} id="Vector" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
      <path d={svgPaths.p1ac0bac0} id="Vector_2" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
      <path d={svgPaths.p1c1828e0} id="Vector_3" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
    </Icon8>
  );
}

function Container80() {
  return (
    <div className="absolute bg-[rgba(135,163,159,0.2)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[49px] top-0" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Heading9() {
  return <Heading additionalClassNames="w-[261.336px]">{`Step 2 – Design & refine`}</Heading>;
}

function Paragraph17() {
  return (
    <div className="absolute h-[68.25px] left-0 top-[101.5px] w-[261.336px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(238,231,210,0.7)] top-[-0.5px] w-[256px]">Layout planning, smart-ready positioning, and material guidance — clearly visualised.</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[169.75px] left-[317.33px] top-0 w-[261.336px]" data-name="Container">
      <Container80 />
      <Heading9 />
      <Paragraph17 />
    </div>
  );
}

function Icon6() {
  return (
    <Icon8>
      <path d={svgPaths.p1651bf00} id="Vector" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
      <path d="M15.3125 18.375H9.1875" id="Vector_2" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
      <path d={svgPaths.p107ed0c0} id="Vector_3" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
      <path d={svgPaths.p199dec80} id="Vector_4" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
      <path d={svgPaths.p2c579d00} id="Vector_5" stroke="var(--stroke-0, #EEE7D2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.04167" />
    </Icon8>
  );
}

function Container82() {
  return (
    <div className="absolute bg-[rgba(168,136,100,0.2)] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[49px] top-0" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Heading10() {
  return <Heading additionalClassNames="w-[261.336px]">{`Step 3 – Deliver & install`}</Heading>;
}

function Paragraph18() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[101.5px] w-[261.336px]" data-name="Paragraph">
      <p className="absolute font-['Figtree:Light',sans-serif] leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(238,231,210,0.7)] top-[-0.5px] w-[187px]">Manufactured and installed by experienced UK professionals.</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[169.75px] left-[634.66px] top-0 w-[261.336px]" data-name="Container">
      <Container82 />
      <Heading10 />
      <Paragraph18 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[169.75px] left-[195px] top-[200.38px] w-[896px]" data-name="Container">
      <Container79 />
      <Container81 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[370.125px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph15 />
      <Container84 />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute bg-[#696a5a] content-stretch flex flex-col h-[734.125px] items-start left-0 overflow-clip pb-0 pt-[140px] px-[21px] top-[986px] w-[1328px]" data-name="Section">
      <Container85 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-[#696a5a] h-[10609.719px] left-0 top-0 w-[1328px]" data-name="App">
      <Section />
      <Section1 />
      <Section2 />
      <Container45 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <Section6 />
      <Section7 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[48px] relative shrink-0 w-[109px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container86 />
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[35px] relative shrink-0 w-[90.844px]" data-name="Link">
      <Text5 text="About Us" />
    </div>
  );
}

function Link18() {
  return (
    <div className="h-[35px] relative shrink-0 w-[89.867px]" data-name="Link">
      <Text5 text="Products" />
    </div>
  );
}

function Link19() {
  return (
    <div className="basis-0 grow h-[35px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <Text5 text="Aura Decor" />
    </div>
  );
}

function Link20() {
  return (
    <div className="h-[35px] relative shrink-0 w-[105.258px]" data-name="Link">
      <Text5 text="Contact us" />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[35px] relative shrink-0 w-[412.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Link17 />
        <Link18 />
        <Link19 />
        <Link20 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link16 />
      <Container87 />
    </div>
  );
}

function App2() {
  return (
    <div className="absolute bg-[rgba(56,56,56,0.7)] content-stretch flex flex-col h-[82px] items-start left-[104px] pb-px pt-[17px] px-[33px] rounded-[1.67772e+07px] top-[14px] w-[1120px]" data-name="App">
      <div aria-hidden="true" className="absolute border border-[rgba(238,231,210,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container88 />
    </div>
  );
}

export default function Option() {
  return (
    <div className="bg-[#eee7d2] relative size-full" data-name="option 3">
      <App1 />
      <App2 />
    </div>
  );
}