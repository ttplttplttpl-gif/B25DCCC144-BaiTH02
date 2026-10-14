export interface WeatherInfo {
  description: string;
  icon: string;
}

export const getWeatherInfo = (code: number): WeatherInfo => {
  switch (code) {
    case 0:
      return { description: "Trời quang", icon: "☀️" };
    case 1:
    case 2:
    case 3:
      return { description: "Nhiều mây / Có mây", icon: "⛅" };
    case 45:
    case 48:
      return { description: "Có sương mù", icon: "🌫️" };
    case 51:
    case 53:
    case 55:
      return { description: "Mưa phùn", icon: "🌧️" };
    case 61:
    case 63:
    case 65:
      return { description: "Trời mưa", icon: "🌧️" };
    case 71:
    case 73:
    case 75:
      return { description: "Có tuyết rơi", icon: "❄️" };
    case 95:
    case 96:
    case 99:
      return { description: "Có dông bão", icon: "⚡" };
    default:
      return { description: "Bình thường", icon: "🌡️" };
  }
};

export const cToF = (c: number): number => {
  return Math.round((c * 9) / 5 + 32);
};

export const formatDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  return days[date.getDay()];
};
