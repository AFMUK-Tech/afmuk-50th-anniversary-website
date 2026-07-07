function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.144px] not-italic relative shrink-0 text-[#38362d] text-[14px] tracking-[-0.2367px] whitespace-nowrap">Machester</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.144px] not-italic relative shrink-0 text-[#38362d] text-[14px] tracking-[-0.2367px] whitespace-nowrap">Bexley</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.144px] not-italic relative shrink-0 text-[#38362d] text-[14px] tracking-[-0.2367px] whitespace-nowrap">Peckham</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.144px] not-italic relative shrink-0 text-[#38362d] text-[14px] tracking-[-0.2367px] whitespace-nowrap">Cranfield</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.144px] not-italic relative shrink-0 text-[#38362d] text-[14px] tracking-[-0.2367px] whitespace-nowrap">Birmingham</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.144px] not-italic relative shrink-0 text-[#38362d] text-[14px] tracking-[-0.2367px] whitespace-nowrap">Aberdeen</p>
        </div>
      </div>
    </div>
  );
}

export default function BranchDropdown() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[12px] relative size-full" data-name="Branch-Dropdown">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}