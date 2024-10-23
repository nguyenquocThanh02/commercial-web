"use client";
import React, {useState, useEffect} from "react";

import {typeCountDownTime} from "@/types/general.type";

const CountdownTimeSaleComponent: React.FC<{variant?: string; timeEnd: string}> = ({
  variant = "default",
  timeEnd,
}) => {
  const [timeLeft, setTimeLeft] = useState<typeCountDownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const dest = new Date(timeEnd).getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const diff = dest - now;

      if (diff <= 0) {
        clearInterval(intervalId);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeSale = [
    {label: "Days", value: timeLeft.days},
    {label: "Hours", value: timeLeft.hours},
    {label: "Minutes", value: timeLeft.minutes},
    {label: "Seconds", value: timeLeft.seconds},
  ];

  if (variant !== "default") {
    return (
      <div className="flex items-center">
        {timeSale.map((item, index) => (
          <div key={index} className="flex items-end">
            <div className="">
              <p className="text-xs font-medium">{item.label}</p>
              <h2 className="mt-2 font-inter-font text-[32px] font-bold leading-[30px] tracking-[0.04em]">
                {item.value}
              </h2>
            </div>
            {index < 3 && <div className="mx-2 mb-1 text-2xl text-Secondary2">:</div>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6">
      {timeSale.map((item, index) => (
        <div key={index} className="flex h-[62px] w-[62px] rounded-full bg-Primary">
          <div className="m-auto flex flex-col items-center justify-center">
            <p className="font-semibold">{item.value}</p>
            <p className="text-[11px]">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimeSaleComponent;
