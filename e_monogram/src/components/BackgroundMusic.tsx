import React, { useEffect, useRef, useState } from "react";
import bgMusic from "../assets/bg_music.mp3";
import { MusicBtn, Disc } from "./styles/BackgroundMusic.styles";

/* ---------- component ---------- */
const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;

    // Step 1: Start muted — browsers allow muted autoplay
    audio.muted = true;
    audio
      .play()
      .then(() => {
        // Step 2: Unmute after playback starts
        audio.muted = false;
        setPlaying(true);
      })
      .catch(() => {
        // Fallback for iOS / strict browsers: play on first user interaction
        audio.muted = false;
        const startOnInteraction = () => {
          audio
            .play()
            .then(() => {
              setPlaying(true);
              cleanup();
            })
            .catch(() => {});
        };
        const cleanup = () => {
          window.removeEventListener("click", startOnInteraction);
          window.removeEventListener("touchstart", startOnInteraction);
          window.removeEventListener("keydown", startOnInteraction);
        };
        window.addEventListener("click", startOnInteraction);
        window.addEventListener("touchstart", startOnInteraction);
        window.addEventListener("keydown", startOnInteraction);
        return cleanup;
      });

    return () => {
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop preload="auto" />
      <MusicBtn
        onClick={toggle}
        $playing={playing}
        title={playing ? "Pause music" : "Play music"}
      >
        <Disc $spinning={playing}>
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z" opacity="0.4" />
              <line
                x1="3"
                y1="3"
                x2="21"
                y2="21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </Disc>
      </MusicBtn>
    </>
  );
};

export default BackgroundMusic;
