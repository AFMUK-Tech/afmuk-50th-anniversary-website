import img1998 from "./5a015c837cc63a1e3afec59a04ef46d449dad5cf.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[34px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[#0f1421] text-center w-full">
      <div className="flex flex-col font-['CRONDE:Regular',sans-serif] justify-center relative shrink-0 text-[96px] w-[550px]">
        <p className="leading-[normal]">Praise God With US!</p>
      </div>
      <div className="flex flex-col font-['Futura_PT:Book',sans-serif] justify-center relative shrink-0 text-[24px] w-[601px]">
        <p className="leading-[normal]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[66px] items-center relative size-full">
      <div className="h-[109px] relative shrink-0 w-[337px]" data-name="1 998">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[443.28%] left-[-22.15%] max-w-none top-[-172.98%] w-[143.62%]" src={img1998} />
        </div>
      </div>
      <Frame />
    </div>
  );
}