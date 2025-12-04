function Text() {
  return (
    <div className="absolute content-stretch flex h-[88px] items-start left-0 top-[55px] w-[227.055px]" data-name="Text">
      <p className="font-['Parkinsans:Light',sans-serif] font-light leading-[56.7px] relative shrink-0 text-[#a88864] text-[63px] text-nowrap whitespace-pre font-[Figtree]">spaces</p>
    </div>
  );
}

export default function Heading() {
  return (
    <div className="relative size-full" data-name="Heading 1">
      <p className="absolute font-['Parkinsans:Light',sans-serif] font-light leading-[56.7px] left-0 text-[#eee7d2] text-[63px] text-nowrap top-0 whitespace-pre font-[Figtree]">aura</p>
      <Text />
    </div>
  );
}