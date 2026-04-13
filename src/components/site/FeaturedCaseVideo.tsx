"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  caseFeaturedPoster,
  caseSocialBehance,
  caseSocialShare,
  caseSocialYoutube,
  caseVideoPlayIcon,
} from "@/lib/figmaAssets";

type FeaturedCaseVideoProps = {
  /** 默认视频路径（`public/videos/xxx.mp4` → `/videos/xxx.mp4`） */
  defaultSrc?: string;
  posterSrc?: string;
  className?: string;
};

export function FeaturedCaseVideo({
  defaultSrc,
  posterSrc = caseFeaturedPoster,
  className = "",
}: FeaturedCaseVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [urlDraft, setUrlDraft] = useState(defaultSrc ?? "");
  const [committedUrl, setCommittedUrl] = useState(defaultSrc ?? "");
  const [playing, setPlaying] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  useEffect(() => {
    setUrlDraft(defaultSrc ?? "");
    setCommittedUrl(defaultSrc ?? "");
  }, [defaultSrc]);

  const effectiveSrc = fileUrl ?? (committedUrl.trim() || undefined);

  useEffect(() => {
    setLoadError(false);
    setFrameReady(false);
  }, [effectiveSrc]);

  useEffect(() => {
    return () => {
      if (fileUrl) URL.revokeObjectURL(fileUrl);
    };
  }, [fileUrl]);

  /** 首帧：loadeddata 后停在 0 */
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !effectiveSrc || loadError) return;

    const paintFirstFrame = () => {
      if (v.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
      try {
        v.pause();
        v.currentTime = 0;
        setFrameReady(true);
      } catch {
        /* ignore */
      }
    };

    v.addEventListener("loadeddata", paintFirstFrame);
    queueMicrotask(paintFirstFrame);
    return () => v.removeEventListener("loadeddata", paintFirstFrame);
  }, [effectiveSrc, loadError]);

  const clearLocalFile = useCallback(() => {
    setFileUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }, []);

  const onFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      if (fileUrl) URL.revokeObjectURL(fileUrl);
      setFileUrl(URL.createObjectURL(file));
      setPlaying(false);
      e.target.value = "";
    },
    [fileUrl],
  );

  const applyUrl = useCallback(() => {
    clearLocalFile();
    setCommittedUrl(urlDraft.trim());
    setPlaying(false);
    queueMicrotask(() => videoRef.current?.load());
  }, [clearLocalFile, urlDraft]);

  const togglePlay = useCallback(async () => {
    const el = videoRef.current;
    if (!el || !effectiveSrc || loadError) {
      fileInputRef.current?.click();
      return;
    }
    if (el.paused) {
      await el.play();
    } else {
      el.pause();
    }
  }, [effectiveSrc, loadError]);

  const showPoster =
    !effectiveSrc || loadError || (!frameReady && !playing);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-black xl:max-w-[845px] ${className}`}
    >
      <div className="relative aspect-[845/602] w-full xl:aspect-auto xl:h-[602px]">
        <video
          ref={videoRef}
          src={effectiveSrc}
          poster={showPoster ? posterSrc : undefined}
          className="absolute inset-0 z-0 h-full w-full cursor-pointer object-cover"
          playsInline
          muted
          controls={Boolean(effectiveSrc) && !loadError && playing}
          preload={effectiveSrc ? "auto" : "metadata"}
          onClick={() => {
            if (!effectiveSrc || loadError) return;
            void togglePlay();
          }}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => {
            setLoadError(true);
            setFrameReady(false);
            setPlaying(false);
          }}
        />

        <div
          className={`pointer-events-none absolute inset-0 z-[1] rounded-t-xl bg-black transition-opacity duration-300 ${
            !effectiveSrc || loadError
              ? "opacity-40"
              : playing
                ? "opacity-0"
                : "opacity-[0.2]"
          }`}
          aria-hidden
        />

        <div className="absolute right-4 top-4 z-[3] flex flex-col gap-2">
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="gac-interactive flex size-8 items-center justify-center rounded bg-[#0d0d0d]"
            aria-label="Behance"
          >
            <Image
              src={caseSocialBehance}
              alt=""
              width={18}
              height={18}
              className="object-contain"
              unoptimized
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gac-interactive flex size-8 items-center justify-center rounded bg-[#0d0d0d]"
            aria-label="YouTube"
          >
            <Image
              src={caseSocialYoutube}
              alt=""
              width={18}
              height={18}
              className="object-contain"
              unoptimized
            />
          </a>
          <button
            type="button"
            className="gac-interactive flex size-8 items-center justify-center rounded bg-black/90"
            aria-label="分享"
            onClick={() => {
              if (navigator.share) {
                void navigator.share({ title: "GAC 案例视频" });
              }
            }}
          >
            <Image
              src={caseSocialShare}
              alt=""
              width={18}
              height={18}
              className="object-contain"
              unoptimized
            />
          </button>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            void togglePlay();
          }}
          className={`absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 gac-interactive rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
            playing && effectiveSrc && !loadError
              ? "pointer-events-none opacity-0"
              : ""
          }`}
          aria-label={
            loadError
              ? "上传或更换视频"
              : effectiveSrc
                ? playing
                  ? "暂停"
                  : "播放"
                : "上传或加载视频"
          }
        >
          {/* 避免 Next/Image 加载转圈挡住点击 */}
          <img
            src={caseVideoPlayIcon}
            alt=""
            width={64}
            height={64}
            className="size-16 drop-shadow-lg"
            draggable={false}
          />
        </button>

        {loadError ? (
          <p className="absolute bottom-16 left-0 right-0 z-[2] px-4 text-center text-[11px] text-red-200/90">
            无法加载该地址（请检查文件名与下划线数量），已使用占位图。推荐路径：
            /videos/showreel.mp4
          </p>
        ) : null}
      </div>

      <div
        className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-neutral-950 px-3 py-2.5"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="sr-only"
          onChange={onFile}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="gac-interactive rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20"
        >
          上传本地视频
        </button>
        {fileUrl ? (
          <button
            type="button"
            onClick={clearLocalFile}
            className="gac-interactive text-xs text-white/70 underline hover:text-white"
          >
            清除本地上传
          </button>
        ) : null}
        <label className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-white">
          <span className="shrink-0 text-[10px] text-white/50">地址</span>
          <input
            type="text"
            placeholder="/videos/showreel.mp4"
            className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-white/35"
            value={urlDraft}
            onChange={(e) => setUrlDraft(e.target.value)}
            disabled={Boolean(fileUrl)}
          />
        </label>
        <button
          type="button"
          className="gac-interactive shrink-0 rounded-md bg-white/15 px-2.5 py-1.5 text-[11px] text-white hover:bg-white/25 disabled:opacity-40"
          onClick={applyUrl}
          disabled={Boolean(fileUrl)}
        >
          加载
        </button>
      </div>
    </div>
  );
}
