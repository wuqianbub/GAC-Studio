import Image from "next/image";

const logos = [
  // 把你的客户 Logo 切图放到 public/clients/ 下（建议 2x PNG 或 SVG）
  // 文件名保持一致即可自动渲染
  "/clients/logo-1.png",
  "/clients/logo-2.png",
  "/clients/logo-3.png",
  "/clients/logo-4.png",
  "/clients/logo-5.png",
  "/clients/logo-6.png",
];

export function Clients() {
  return (
    <div className="rounded-3xl bg-white ring-1 ring-black/10 px-6 py-8">
      <div className="text-xs text-black/50">服务过的品牌客户</div>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {logos.map((src) => (
          <div
            key={src}
            className="h-12 rounded-2xl bg-black/[0.03] ring-1 ring-black/5 flex items-center justify-center"
          >
            <Image
              src={src}
              alt="Client logo"
              width={120}
              height={48}
              className="h-6 w-auto opacity-80"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}

