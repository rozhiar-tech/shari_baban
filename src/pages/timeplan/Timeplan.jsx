import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const Timer2 = () => {
  const { t } = useTranslation();
  const [countDownTime, setCountDownTime] = useState({
    years: "00",
    months: "00",
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    let years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
        (1000 * 60 * 60 * 24 * 30)
    );
    let days = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    let hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Add leading zeros if needed
    years = years < 10 ? `0${years}` : years;
    months = months < 10 ? `0${months}` : months;
    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    if (timeDifference < 0) {
      setCountDownTime({
        years: "00",
        months: "00",
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTime({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear() + 7,
      customDate.getMonth(),
      customDate.getDate(),
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#028e73] overflow-hidden">
      <div className="mx-3 sm:p-10 p-4 rounded-md flex justify-center flex-col gap-6 shadow-[5px_5px_50px_rgba(47,46,60,1)]">
        <div className="flex flex-col gap-2">
          <h1 className="text-center sm:text-3xl text-xl font-semibold leading-8 text-[#FBFAF8]">
          {t("about.time")}
          </h1>
          <span className="text-sm font-semibold text-center leading-8 text-[#959AAE]">
            Time Remaining to be in your next home and be in your dream house.
          </span>
        </div>
        <div className="flex justify-between sm:px-4">
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 flex justify-center items-center bg-[#88BDBC] text-[#112D32] text-xl font-semibold rounded-md">
              {countDownTime?.years}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Years</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-xl font-semibold rounded-md">
              {countDownTime?.months}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Months</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-xl font-semibold rounded-md">
              {countDownTime?.days}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Days</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-xl font-semibold rounded-md">
              {countDownTime?.hours}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Hours</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-xl font-semibold rounded-md">
              {countDownTime?.minutes}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Minutes</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className="py-3 px-3 bg-[#88BDBC] text-[#112D32] text-xl font-semibold rounded-md">
              {countDownTime?.seconds}
            </span>
            <span className="text-sm text-[#FBFAF8] font-bold">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer2;
