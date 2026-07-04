"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT: any;
  }
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const hasInteractedRef = useRef<boolean>(false);

  useEffect(() => {
    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    function initPlayer() {
      playerRef.current = new window.YT.Player("youtube-audio-player", {
        height: "0",
        width: "0",
        videoId: "rhFZNbxLCi4",
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: "rhFZNbxLCi4",
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            event.target.setVolume(25);
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
            }
          },
        },
      });
    }

    const handleUserInteraction = () => {
      if (hasInteractedRef.current) return;
      
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        playerRef.current.playVideo();
        hasInteractedRef.current = true;
        removeInteractionListeners();
      }
    };

    const addInteractionListeners = () => {
      window.addEventListener("click", handleUserInteraction, { passive: true });
      window.addEventListener("scroll", handleUserInteraction, { passive: true });
      window.addEventListener("keydown", handleUserInteraction, { passive: true });
      window.addEventListener("touchstart", handleUserInteraction, { passive: true });
      window.addEventListener("mousemove", handleUserInteraction, { passive: true });
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("mousemove", handleUserInteraction);
    };

    addInteractionListeners();

    return () => {
      delete window.onYouTubeIframeAPIReady;
      removeInteractionListeners();
    };
  }, []);

  const togglePlayback = () => {
    if (!isReady || !playerRef.current) return;
    
    hasInteractedRef.current = true;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div id="youtube-audio-player" className="absolute -top-96 left-0 w-0 h-0 opacity-0 pointer-events-none" />

      <button
        onClick={togglePlayback}
        disabled={!isReady}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 backdrop-blur-md bg-black/40 text-white cursor-pointer hover:scale-110 hover:border-[#ff5e00] transition-all duration-300 ${
          !isReady ? "opacity-30 cursor-not-allowed" : "opacity-100"
        }`}
        title={isPlaying ? "Mute Ambient Soundtrack" : "Unmute Ambient Soundtrack"}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center gap-[3px]">
            <span className="w-[3px] h-3 bg-[#ff5e00] rounded-full animate-bounce [animation-duration:0.6s]" />
            <span className="w-[3px] h-5 bg-[#ff5e00] rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.15s]" />
            <span className="w-[3px] h-4 bg-[#ff5e00] rounded-full animate-bounce [animation-duration:0.7s] [animation-delay:0.3s]" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-zinc-400" />
        )}
      </button>
    </>
  );
}
