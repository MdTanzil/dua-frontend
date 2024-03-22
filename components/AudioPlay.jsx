"use client";
import { useEffect, useRef, useState } from "react";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";

const AudioPlay = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element when component mounts
    audioRef.current = new Audio(audioUrl);

    // Clean up function to release audio resources when component unmounts
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [audioUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>
        {isPlaying ? (
          <FaCirclePause className="text-4xl text-[#3BAF70] " />
        ) : (
          <FaCirclePlay className="text-4xl text-[#3BAF70] " />
        )}
      </button>
    </div>
  );
};

export default AudioPlay;
